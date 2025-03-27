import React, { useRef, useState } from "react";
import "./App.css";
import Gallery from "./components/Gallery";
import SideMenu from "./components/SideMenu";
import TopMenu from "./components/TopMenu";
import BottomBtn from "./components/BottomBtn";
import Modal from "./components/Modal";


function App() {
  const galleryRef = useRef();
  const [url, setUrl] = useState("people/");
  const [search, setSearch] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [choosedCard, setChoosedCard] = useState();
  const [img, setImg] = useState([]);


  const loadMore = () => {
    if (galleryRef.current) {
      galleryRef.current.loadMore();
    }
  };

  const handleMenuClick = (newUrl) => {
    setUrl(newUrl);
  };

  return (
    <>
      <div className="root__left">
        <SideMenu setOpenModal={setOpenModal} onMenuClick={handleMenuClick} />
      </div>
      <Modal img={img} openModal={openModal} setOpenModal={setOpenModal} choosedCard={choosedCard} />
      <div className="root__right" >
        <TopMenu search={search} setSearch={setSearch} />
        <Gallery setImg={setImg} setChoosedCard={setChoosedCard} openModal={openModal} setOpenModal={setOpenModal} search={search} setSearch={setSearch} ref={galleryRef} url={url} />
        <BottomBtn loadMore={loadMore} />
      </div>
      <img className="root__r2d2" src="../src/assets/r2d2.png" alt="r2d2" width='200' height='250' />
    </>
  );
}

export default App;
