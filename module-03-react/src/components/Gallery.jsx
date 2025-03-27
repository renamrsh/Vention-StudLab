import React, {
    useEffect,
    useState,
    useImperativeHandle,
    forwardRef,
} from "react";
import axios from "axios";
import "/src/styles/components.css";
import Card from "./Card.jsx";

const baseURL = "https://swapi.dev/api/";

const Gallery = forwardRef(
    ({ setImg, search, setSearch, url, setOpenModal, setChoosedCard }, ref) => {
        const [cards, setCards] = useState([]);
        const [allResults, setAllResults] = useState([]);
        const [page, setPage] = useState(1);

        const [loading, setLoading] = useState(false);
        const [error, setError] = useState(null);

        const bottomButton = document.querySelector(".bottom__btn");
        let cardCounter = 0;

        useEffect(() => {
            const bottomButton = document.querySelector(".bottom__btn");

            const getAPI = async () => {
                setLoading(true);
                setError(null);

                let allResults = [];
                let nextPage = baseURL + url;
                try {
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
                    } else {
                        bottomButton.classList.remove("is-hidden");
                    }
                    setSearch("");
                } catch (error) {
                    setError("Error: can't get data.");
                } finally {
                    setLoading(false);
                }
            };
            getAPI();
            setPage(1);
        }, [url]);

        useImperativeHandle(ref, () => ({
            loadMore() {
                cardCounter = page + 1;
                setCards(allResults.slice(0, cardCounter * 15));
                setPage(cardCounter);
                if (cardCounter * 15 >= allResults.length) {
                    bottomButton.classList.add("is-hidden");
                } else {
                    bottomButton.classList.remove("is-hidden");
                }
            },
        }));
        return (
            <section className="gallery">
                <div className="gallery__grid">
                    {loading && <div className="loading">Loading...</div>}
                    {!loading && !error &&
                        allResults
                            .filter((card) => {
                                const searchField = url !== "films/" ? card.name : card.title;
                                return searchField
                                    ? search.toLowerCase() === "" ||
                                    searchField.toLowerCase().includes(search.toLowerCase())
                                    : false;
                            })
                            .slice(0, page * 15)
                            .map((card, index) => {
                                const isFilm = url === "films/";
                                const cardName = isFilm ? card.title : card.name;
                                const img = cardName ? getMainImage(cardName) : "Unknown";
                                return (
                                    <Card
                                        key={index}
                                        more={url == "people/"}
                                        imgPromise={img}
                                        name={cardName ? cardName.toLowerCase() : "Unknown"}
                                        onClick={() => {
                                            setOpenModal(true);
                                            setChoosedCard(card);
                                            setImg(img);
                                        }}
                                    />
                                );
                            })}
                </div>
            </section>
        );
    }
);

async function getMainImage(title) {
    const url = `https://pl.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=pageimages|images&pithumbsize=1000&titles=${encodeURIComponent(
        title
    )}`;

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
            const firstImage = images.find((img) => img.title.includes("File:"));

            if (firstImage) {
                const imageTitle = firstImage.title
                    .replace("File:", "")
                    .replace(/ /g, "_");
                return `https://upload.wikimedia.org/wikipedia/commons/thumb/${imageTitle}/500px-${imageTitle}`;
            }
        }
        return null;
    } catch (error) {
        return null;
    }
}

export default Gallery;
