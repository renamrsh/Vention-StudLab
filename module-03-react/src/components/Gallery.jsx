import '/src/styles/components.css'
import Card from './Card.jsx';

export default function Gallery() {
    return (
        <section className="gallery">
            <div className='gallery__grid'>
                <Card/>
            </div>
        </section>
    );
}
