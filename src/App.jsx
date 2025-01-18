import './index.css';
import './App.css';
import Navbar from "./components/Navbar";
import Description from './components/Description/Description.jsx';
import Hero from './components/Hero.jsx';
import GroupsList from './components/GroupsList.jsx';
import ResultsList from './components/ResultsList.jsx';
import { GetData } from './database.jsx'

const App = () => {
  const groups = GetData();

  return (
    <>
      <Navbar />
      <Description  />
      <Hero />
      <GroupsList groups={groups} />
      <ResultsList groups={groups} />
    </>
  );
};

export default App;
