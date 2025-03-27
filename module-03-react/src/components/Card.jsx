import { useState, useEffect } from 'react';
import '/src/styles/components.css';

export default function Card({ name, imgPromise, onClick }) {
    const [imgLink, setImgLink] = useState();
    useEffect(() => {
        if (imgPromise instanceof Promise) {
            imgPromise.then(result => {
                if (!result) {
                    setImgLink('src/assets/r2d2.png');
                } else {
                    setImgLink(result);
                }
            });
        }
    }, [imgPromise]);

    const cardStyle = {
        backgroundImage: `url(${imgLink})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    return (
        <div onClick={onClick} className="card" style={cardStyle}>
            <h2 className="card__name">{name}</h2>
            <p className="card__more">{"more"}</p>
        </div>
    );
}