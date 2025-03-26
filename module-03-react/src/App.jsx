import React, { useRef, useState } from "react";
import "./App.css";
import Gallery from "./components/Gallery";
import SideMenu from "./components/SideMenu";
import TopMenu from "./components/TopMenu";
import BottomBtn from "./components/BottomBtn";

function App() {
  const galleryRef = useRef();
  const [url, setUrl] = useState("people/");

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
      <div className="left">
        <SideMenu onMenuClick={handleMenuClick}/>
      </div>
      <div className="right">
        <TopMenu />
        <Gallery ref={galleryRef} url={url} />
        <BottomBtn loadMore={loadMore} />
      </div>
      <img className="r2d2" src="../src/assets/r2d2menu.png" alt="r2d2" width='200' height='250' />
    </>
  );
}

export default App;
