import React, { useEffect, useState, useImperativeHandle, forwardRef } from "react";
import axios from "axios";
import "/src/styles/components.css";
import Card from "./Card.jsx";
import Modal from "./Modal.jsx";

const baseURL = "https://swapi.dev/api/";

const Gallery = forwardRef(({ url }, ref) => {
    const [cards, setCards] = useState([]);
    const [allResults, setAllResults] = useState([]);
    const [page, setPage] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
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
                    console.error(`Error: ${error}`);
                    nextPage = null;
                }
            }
            setAllResults(allResults);
            setCards(allResults.slice(0, 15));
            if (allResults.length <= 15 && bottomButton) {
                bottomButton.classList.add("is-hidden");
            }
        };
        getAPI();
        setPage(1);
    }, [url]);

    useImperativeHandle(ref, () => ({
        loadMore() {
            console.log(page)
            counter = page + 1;
            setCards(allResults.slice(0, counter * 15));
            setPage(counter);
            console.log(counter + " *15 >"+ allResults.length)
            if(counter*15>allResults.length){
                bottomButton.classList.add("is-hidden");
            } else {
                bottomButton.classList.remove("is-hidden");
            }
        }
    }));
    
    const openModalWindow = (card) => {
        console.log("Card clicked:", card);
     
    };


    return (
        <section className="gallery">
            <div className="gallery__grid">
                {cards.map((card, index) => (
                    <Card key={index} name={url!=="films/" 
                        ? card.name ? card.name.toLowerCase() : "Unknown"
                        : card.title ? card.title.toLowerCase() : "Unknown"
                    } 
                    onClick={() => setIsOpen(true)}
                    />
                ))}
                <Modal open={isOpen}/>
            </div>
        </section>
    );
});
export default Gallery;