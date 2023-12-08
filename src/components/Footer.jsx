/* eslint-disable react/prop-types */
import redSocial1 from "../assets/facebook.svg";
import redSocial2 from "../assets/whatsapp.svg";
import redSocial3 from "../assets/discord.svg";

const Footer = ({ menuItems, handleClickItem, activeItem }) => {
  return (
    <>
      <footer className="footer_container">
        <section className="section_footer_redes">
          <img src={redSocial1} alt="red social 1" />
          <img src={redSocial2} alt="red social 2" />
          <img src={redSocial3} alt="red social 3" />
        </section>
        <ul className="footer_listItems">
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
      </footer>
    </>
  );
};

export default Footer;
