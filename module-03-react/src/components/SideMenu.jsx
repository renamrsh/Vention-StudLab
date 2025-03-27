import React, { useState, useEffect, useRef } from "react";
import "/src/styles/components.css";

export default function SideMenu({ setOpenModal, onMenuClick }) {
  const menuItems = [
    'People',
    'Species',
    'Planets',
    'Vehicles',
    'Starships',
    'Films'
  ];

  const [selectedItem, setSelectedItem] = useState(menuItems[0]);
  const firstMenuItemRef = useRef(null);

  useEffect(() => {
    if (firstMenuItemRef.current) {
      firstMenuItemRef.current.focus();
    }
  }, []);

  const handleClick = (item) => {
    setSelectedItem(item);
    onMenuClick(item.toLowerCase() + '/');
  };

  const listItems = menuItems.map((element, index) => {
    return (
      <li key={index}>
        <a
          href="#"
          className={element === selectedItem ? 'selected' : ''}
          onClick={() => handleClick(element)}
          ref={index === 0 ? firstMenuItemRef : null}
        >
          {element}
        </a>
      </li>
    );
  });

  return (
    <section onClick={() => setOpenModal(false)} className="side-menu">
      <img className="side-menu__logo" src="../src/assets/logo.svg" alt="logo" width={235} height={135} />
      <ul className="side-menu__list">
        {listItems}
      </ul>
    </section>
  );
}