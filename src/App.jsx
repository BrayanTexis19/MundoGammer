import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import SectionVideogames from "./components/SectionVideogames";
import SectionInfo from "./components/SectionInfo";
import SectionPrices from "./components/SectionPrices";
import { useFetch } from "./hooks/useFetch";

const App = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [filterText, setFilterText] = useState("");
  let url = "http://localhost:5000/api/videogames";

  let { data } = useFetch(url);

  const filteredData = filterText
    ? data.filter((item) =>
        item.title.toLowerCase().includes(filterText.toLowerCase())
      )
    : data;

  const menuItems = ["Home", "Videojuegos", "Nosotros", "Precios"];

  const handleClickItem = (index) => {
    setActiveItem(index);
    const targetId = menuItems[index].toLowerCase();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Header
        menuItems={menuItems}
        handleClickItem={handleClickItem}
        activeItem={activeItem}
      />
      <Main />
      <SectionVideogames
        data={data}
        filterText={filterText}
        filteredData={filteredData}
        setFilterText={setFilterText}
      />
      <SectionInfo />
      <SectionPrices />
      <Footer
        menuItems={menuItems}
        handleClickItem={handleClickItem}
        activeItem={activeItem}
      />
    </>
  );
};

export default App;
