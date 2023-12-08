const SectionPrices = () => {
  return (
    <>
      <section id="precios" className="section_prices_container">
        <section className="section_prices_card_basic">
          <h2>Plan BASIC</h2>
          <p>$99.99 pesos</p>
            <ul className="section_prices_card_listItems">
              <li>2 juegos premium a elección</li>
              <li>Acceso a todos los juegos gratis</li>
              <li>Acceso a grupo GameMaster</li>
            </ul>
          <button>Comprar</button>
        </section>
        <section className="section_prices_card_plus">
          <h2>Plan PLUS +</h2>
          <p>$149.99 pesos</p>
          <section className="section_prices_card_details">
            <ul className="section_prices_card_listItems">
              <li>5 juegos premium a elección</li>
              <li>Acceso a todos los juegos gratis</li>
              <li>Acceso a grupo GameMaster</li>
              <li>Insignia de jugador estrella</li>
              <li>Descuento en tu siguiente compra</li>
            </ul>
          </section>
          <button>Comprar</button>
        </section>
        <section className="section_prices_card_premium">
          <h2>Plan PREMIUM</h2>
          <p>$199.99 pesos</p>
          <section className="section_prices_card_details">
            <ul className="section_prices_card_listItems">
              <li>10 juegos premium a elección.</li>
              <li>Acceso a todos los juegos gratis.</li>
              <li>Acceso a grupo de Discord, Telegram, Twitch.</li>
              <li>Insignia de jugador estrella.</li>
            </ul>
          </section>
          <button>Comprar</button>
        </section>
      </section>
    </>
  );
};

export default SectionPrices;
