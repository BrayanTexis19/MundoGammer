/* eslint-disable react/prop-types */
import Modal from "../components/Modal";
import { useModal } from "../hooks/useModal";

import imagen1 from "../assets/MundoGammer.jpg";
const CardItems = ({ data }) => {
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const { title, description, gender, gameMode, price, platform, developer } = data;
  return (
    <>
      <div className="section_videogames_card_items">
        <div className="section_videogames_card_image">
          <img src={imagen1} alt="" />
        </div>
        <div className="section_videogame_card_info">
          <h3>{title}</h3>
          <div className="section_videogame_card_details">
            <p>Genero: {gender}</p>
            <p>Mode de juego: {gameMode}</p>
            <p>Plataformas: {platform.join(", ")}</p>
            <p>Precio: ${price} pesos</p>
          </div>
          <div className="section_videogaem_card_buttons">
            <button>Obtener</button>
            <button onClick={openModal}>Detalles</button>
          </div>
        </div>
        <Modal isOpen={isOpenModal} closeModal={closeModal}>
          <section className="section_Modal">
            <h2>{title}</h2>
            <section className="section_Modal_Details">
              <p>{description}</p>
              <p><b>Desarrollador:</b> {developer}</p>
              <p><b>Genero:</b> {gender}</p>
              <p><b>Mode de juego:</b> {gameMode}</p>
              <p><b>Plataformas:</b> {platform.join(", ")}</p>
              <p><b>Precio:</b> ${price} pesos</p>
            </section>
            <button onClick={closeModal}>Cancelar</button>
          </section>
        </Modal>
      </div>
    </>
  );
};

export default CardItems;
