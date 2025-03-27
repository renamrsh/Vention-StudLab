import React, { useEffect, useState, useImperativeHandle, forwardRef } from "react";
import axios from "axios";
import "/src/styles/components.css";
import Card from "./Card.jsx";

const baseURL = "https://swapi.dev/api/";

export const Gallery = forwardRef(({ search, setSearch, url, setOpenModal, setChoosedCard }, ref) => {
    const [cards, setCards] = useState([]);
    const [allResults, setAllResults] = useState([]);
    const [page, setPage] = useState(1);
    const bottomButton = document.querySelector(".bottom__btn");
    let counter = 0;

    useEffect(() => {
        const bottomButton = document.querySelector(".bottom__btn");

        const getAPI = async () => {
            if (bottomButton) {
                bottomButton.classList.remove("is-hidden");
            }
            let allResults = [];
            let nextPage = baseURL + url;
            while (nextPage) {
                try {
                    const response = await axios.get(nextPage);
                    const { results, next } = response.data;
                    allResults = [...allResults, ...results];
                    nextPage = next;
                } catch (error) {
                    nextPage = null;
                }
            }
            setAllResults(allResults);
            setCards(allResults.slice(0, 15));
            if (allResults.length <= 15 && bottomButton) {
                bottomButton.classList.add("is-hidden");
            }
            setSearch('');
        };
        getAPI();
        setPage(1);

    }, [url]);

    useImperativeHandle(ref, () => ({
        loadMore() {
            counter = page + 1;
            setCards(allResults.slice(0, counter * 15));
            setPage(counter);
            if (counter * 15 >= allResults.length) {
                bottomButton.classList.add("is-hidden");
            } else {
                bottomButton.classList.remove("is-hidden");
            }
        }
    }));

    return (
        <section className="gallery">
            <div className="gallery__grid">
                {cards.filter(card => {
                    return url !== "films/"
                        ? (card.name
                            ? search.toLowerCase() === '' ? card : card.name.toLowerCase().includes(search.toLowerCase())
                            : false)
                        : (card.title
                            ? search.toLowerCase() === '' ? card : card.title.toLowerCase().includes(search.toLowerCase())
                            : false);
                }).map((card, index) => (
                    <Card key={index}
                        imgPromise={url !== "films/"
                            ? card.name ? getMainImage(card.name) : "Unknown"
                            : card.title ? getMainImage(card.title) : "Unknown"
                        }
                        name={url !== "films/"
                            ? card.name ? card.name.toLowerCase() : "Unknown"
                            : card.title ? card.title.toLowerCase() : "Unknown"
                        }
                        onClick={() => { setOpenModal(true); setChoosedCard(card) }}
                    />
                ))}
            </div>
        </section>
    );
});

async function getMainImage(title) {
    const url = `https://pl.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=pageimages|images&pithumbsize=1000&titles=${encodeURIComponent(title)}`;

    try {
        const response = await axios.get(url);
        const pages = response.data.query.pages;
        const pageId = Object.keys(pages)[0];

        if (pageId === "-1") {
            return null;
        }

        if (pages[pageId].thumbnail) {
            return pages[pageId].thumbnail.source;
        } else if (pages[pageId].images) {
            const images = pages[pageId].images;
            const firstImage = images.find(img => img.title.includes("File:"));

            if (firstImage) {
                const imageTitle = firstImage.title.replace("File:", "").replace(/ /g, "_");
                return `https://upload.wikimedia.org/wikipedia/commons/thumb/${imageTitle}/500px-${imageTitle}`;
            }
        }
        return null;
    } catch (error) {
        return null;
    }
}
