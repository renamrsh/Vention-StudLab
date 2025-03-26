import '/src/styles/components.css';

export default function Card({ name, onClick }) {
    return(   
        <div onClick={onClick} className="card">
            <h2 className="card__name">{name}</h2>
            <p className="card__more">{"more"}</p>
        </div>
    );
}