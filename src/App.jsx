import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import GroupsList from "./components/GroupsList.jsx";
import ResultsList from "./components/ResultsList.jsx";
import {GetData} from "./database.js";
import Footer from "./components/Footer.jsx";

const App = () => {
  const groups = GetData();

  return (
    <>
      <Navbar />
      <Hero />
      <GroupsList groups={groups} />
      <ResultsList groups={groups} />
      <Footer />
    </>
  );
};

export default App;
