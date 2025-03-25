import "./App.css";
import Gallery from "./components/Gallery";
import SideMenu from "./components/SideMenu";
import TopMenu from "./components/TopMenu";
import BottomBtn from "./components/BottomBtn";

function App() {
  const amount = 7;

  return (
    <>
      <div className="left">
        <SideMenu/>
      </div>
      <div className="right">
        <TopMenu/>
        <Gallery/>
        <BottomBtn/>
      </div>
      <img className="r2d2" src="../src/assets/r2d2menu.png" alt="r2d2" width='200' height='250'/>
    </>
  );
}

export default App;
