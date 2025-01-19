import './index.css';
import './App.css';
import Navbar from "./components/navbar.jsx";
import Hero from './components/Hero.jsx';
import GroupsList from './components/GroupsList.jsx';
import ResultsList from './components/ResultsList.jsx';
import { GetData } from './database.jsx'
import { useState } from 'react';

const App = () => {
  //const [scroll, setScroll] = useState("");
  const groups = GetData();

  function setScroll() {
    console.log("ok");
    
  }

  return (
    <>
      <Navbar />
      <Hero />
      <GroupsList groups={groups} />
      <ResultsList groups={groups} setScroll={setScroll}/>
    </>
  );
};

export default App;
