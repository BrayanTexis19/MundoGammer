/* eslint-disable react/prop-types */
// import imagen1 from "../assets/fondo.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardItems from "../components/CardItems";
import CardCarrousel from "./CardCarrousel";

const SectionVideogames = ({
  data,
  filterText,
  filteredData,
  setFilterText,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    slidesPerRow: 1,
    rows: 3,
  };
  return (
    <div>
      <section id="videojuegos" className="section_videogames_container">
        <section className="section_videogames_slider">
          <h2>Lista de exitos</h2>
          <Slider {...settings} className="slider">
            {data && filteredData.map((element, index) => (
              <CardCarrousel key={index} index={index} element={element} />
            ))}
          </Slider>
        </section>
        <section className="section_videogames_list">
          <h2>Juegos Recomendados</h2>
          <div className="section_videogames_filter">
            <p>Buscar:</p>
            <input
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              placeholder="Nombre de juego"
            />
          </div>
          <section className="section_videogames_listitems">
            {data &&
              filteredData
                .slice(0, 4)
                .map((element) => (
                  <CardItems key={element._id} data={element} />
                ))}
          </section>
        </section>
      </section>
    </div>
  );
};

export default SectionVideogames;
