import { useState } from "react";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Tale from "./components/body/Tale.jsx";
import Catalogue from "./components/catalogue/Catalogue.jsx";
import Background from "./components/background/Background.jsx";

function App() {
  const [actualTale, setActualTale] = useState(null);
  const [showCatalogue, setShowCatalogue] = useState(true);
  const [theme, setTheme] = useState("middle");

  const selectTale = (index) => {
    setActualTale(index);
    setShowCatalogue(false);
  };

  const backToCatalogue = () => {
    setActualTale(null);
    setShowCatalogue(true);
  };

  const handleSunClick = () => {
    setTheme("day");
  };

  const handleMoonClick = () => {
    setTheme("night");
  };

  return (
    <div className="app">
      <Header
        onSelectTale={selectTale}
        onBackToCatalogue={backToCatalogue}
        onSunClick={handleSunClick}
        onMoonClick={handleMoonClick}
        theme={theme}
      />
      <Background theme={theme}/>
      {showCatalogue ? (
        <Catalogue onSelectTale={selectTale} />
      ) : (
        <Tale selectedTale={actualTale} />
      )}
      <Footer />
    </div>
  );
}

export default App;
