import { useState } from "react";
import Header from "./components//header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Tale from "./components/body/Tale.jsx";
import Catalogue from "./components/catalogue/Catalogue.jsx";
import Background from "./components/background/Background.jsx"

function App() {
  const [actualTale, setActualTale] = useState(null);
  const [showCatalogue, setShowCatalogue] = useState(true);

  const selectTale = (index) => {
    setActualTale(index);
    setShowCatalogue(false);
  };

  const backToCatalogue = () => {
    setActualTale(null);
    setShowCatalogue(true);
  };

  return (
    <>
      <div className="app">
        <Header onSelectTale={selectTale} onBackToCatalogue={backToCatalogue} />
        <Background />
        {showCatalogue ? (
          <Catalogue onSelectTale={selectTale} />
        ) : (
          <Tale selectedTale={actualTale} />
        )}
        <Footer />
      </div>
    </>
  );
}

export default App;
