import { useEffect, useState } from 'react';
import axios from "axios";

import '/src/styles/components.css'

export default function Modal({ img, openModal, choosedCard, setOpenModal }) {
  if (!openModal || !choosedCard.url.includes("people")) return null;
  const [films, setFilms] = useState([]);

  useEffect(() => {
    if (choosedCard && choosedCard.films) {
      const getAPIf = async () => {
        const filmPromises = choosedCard.films.map((filmUrl) => axios.get(filmUrl));
        const responses = await Promise.all(filmPromises);
        const filmData = responses.map((response) => response.data);
        setFilms(filmData);
      }
      getAPIf();
    }
  }, [choosedCard]);
  const [imgLink, setImgLink] = useState();
  useEffect(() => {
    if (img instanceof Promise) {
      img.then(result => {
        if (!result) {
          setImgLink('src/assets/r2d2.png');
        } else {
          setImgLink(result);
        }
      });
    }
  }, [img]);
  const cardStyle = {
    backgroundImage: `url(${imgLink})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };
  return (
    <>
      <div className="overlay" onClick={() => setOpenModal(false)}></div>
      <div className='modal'>
        <div className='modal__left card' style={cardStyle}></div>
        <div className='modal__right'>
          <h2 className='modal__name'>{choosedCard.name.toLowerCase()}</h2>
          <ul className='modal__main-list'>
            <li><p>Height: {choosedCard.height.toLowerCase()}</p></li>
            <li><p>Mass: {choosedCard.mass.toLowerCase()}</p></li>
            <li><p>Birth year: {choosedCard.birth_year.toLowerCase()}</p></li>
            <li>List of films:</li>
            <ul className='modal__film-list'>
              {films.map((film, index) => (
                <li key={index}>{film.title}</li>
              ))}
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
}