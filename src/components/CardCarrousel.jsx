/* eslint-disable react/prop-types */

const CardCarrousel = ({ element, index }) => {
  const {title, score} = element;
  return (
    <div>
      <div className="section_videogame_ranking">
        <h1>#{index + 1 }</h1>
      </div>
      <div className="section_videogame_details">
        <p>
          <b>{ title }</b>
        </p>
        <p>Puntuación: {score}/10</p>
      </div>
    </div>
  );
};

export default CardCarrousel;
