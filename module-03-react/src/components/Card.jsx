import '/src/styles/components.css'

export default function Card() {
    let name = "Beru Lars";
    return(   
        <div className="card">
            <h2 className="card__name">{name}</h2>
            <p className="card__more">{"more"}</p>
        </div>
    )
}