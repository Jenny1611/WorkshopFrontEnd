import {useState} from "react";
import Home from "./components/Home";
import ChiSiamo from "./components/ChiSiamo";
import styles from "./GroupBeginner2.module.css";

export default function GroupBeginner2() {
  const [currentPage, setCurrentPage] = useState("home");
  return (
    <>
      <ul className={styles.ul} id="header">
        <li className={styles.li}>
          <img src="https://tuttoits.it/wp-content/uploads/2022/02/logo-itsaltoadriatico.png" id={styles.logo} />
        </li>
        <li className={styles.li}>
          <a className={styles.a} onClick={() => setCurrentPage("home")}>
            Home
          </a>
        </li>
        <li className={styles.li}>
          <a className={styles.a} onClick={() => setCurrentPage("form")}>
            Chi siamo
          </a>
        </li>
        <li className={styles.li}>aree di specializzazione</li>
        <li className={styles.li}>news</li>
        <li className={styles.li}>contatti</li>
      </ul>

      {currentPage === "home" ? <Home></Home> : <ChiSiamo></ChiSiamo>}
    </>
  );
}
