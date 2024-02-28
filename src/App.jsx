import "./App.scss";
import Equipments from "./components/Equipments";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

// I used scss because it is more readble than normal or any  other css
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Equipments />
      <Footer />
    </>
  );
}

export default App;
