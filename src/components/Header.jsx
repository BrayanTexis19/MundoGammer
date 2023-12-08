import { useState } from "react";
/* eslint-disable react/prop-types */
const Header = ({ menuItems, handleClickItem, activeItem }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header id="home" className="header_container">
        <section className="logo_container">
          <h1>MundoGammer</h1>
        </section>
        <nav className="menu_container">
          <section className="menu_section_login">
            <p>¡Sumérgete en el mundo de los videojuegos!</p>
          </section>
          <div className="menu-icon" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul className={`menu_listItems ${showMenu ? "show" : ""}`}>
            {menuItems.map((item, index) => (
              <li
                key={index}
                onClick={() => handleClickItem(index)}
                className={index === activeItem ? "active" : ""}
              >
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
