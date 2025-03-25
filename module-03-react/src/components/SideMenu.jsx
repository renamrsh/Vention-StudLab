import "/src/styles/components.css";

export default function SideMenu() {
  return (
    <section className="side-menu">
      <img className="side-menu__logo" src="../src/assets/logo.svg" alt="logo" width={235} height={135} />
      <ul className="side-menu__list">
        <li><a href="#">People</a></li>
        <li><a href="#">Species</a></li>
        <li><a href="#">Planets</a></li>
        <li><a href="#">Vehicles</a></li>
        <li><a href="#">Starships</a></li>
        <li><a href="#">Films</a></li>
      </ul>
    </section>
  );
}
