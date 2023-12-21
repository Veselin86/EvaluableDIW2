import { useState } from "react";
import Header from "./components//header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Body from "./components/body/Body.jsx";

function App() {
  const [actualTale, setActualTale] = useState(0);

  return (
    <>
      <div className="app">
        <Header onSelectTale={(index) => setActualTale(index)} />
        <Body selectedTale={actualTale} />
        <Footer />
      </div>
    </>
  );
}

export default App;
