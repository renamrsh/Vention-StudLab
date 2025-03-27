import '/src/styles/components.css'

export default function Modal({ openModal, choosedCard, setOpenModal }) {
  if (!openModal || !choosedCard.url.includes("people")) return null;
  return (
    <>
      <div className="overlay" onClick={() => setOpenModal(false)}></div>
      <div className='modal'>
        <div><img src="" alt="" /></div>
        <div>
          <h2>{choosedCard.name.toLowerCase()}</h2>
          <ul>
            <li><p>Height: {choosedCard.height.toLowerCase()}</p></li>
            <li><p>Mass: {choosedCard.mass.toLowerCase()}</p></li>
            <li><p>Birth year: {choosedCard.birth_year.toLowerCase()}</p></li>
            <li>List of films: </li>
          </ul>
        </div>
      </div>
    </>
  );
}
