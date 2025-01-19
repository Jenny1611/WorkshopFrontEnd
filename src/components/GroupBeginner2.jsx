import {useState} from "react";
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
          <a className={styles.a} onClick={() => setCurrentPage("chiSiamo")}>
            Chi siamo
          </a>
        </li>
        <li className={styles.li}>aree di specializzazione</li>
        <li className={styles.li}>news</li>
        <li className={styles.li}>contatti</li>
      </ul>

      {currentPage === "home" ? (
        <div className={styles.pagina}>
          <h1 id="home-heading">Welcome to the homepage</h1>
          <form className={styles.form}>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" />
            <br />
            <label htmlFor="cognome"> Cognome:</label>
            <input type="cognome" id="cognome" name="cognome" />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <br />
            <button type="submit" style={{marginBottom: 50}} onClick={(event) => event.preventDefault()}>
              Invia
            </button>
          </form>
        </div>
      ) : (
        <div className={styles.pagina}>
          <div className={styles.banner}>
            <h1>Chi siamo</h1>
          </div>
          <div>
            <h1> Cos&apos;è l&apos;ITS</h1>
            <p>
              L’ITS Academy Alto Adriatico è un Istituto Tecnologico Superiore strutturato come Fondazione che dal 2011
              offre formazione post diploma di eccellenza nel campo dell’Information and Communication Technologies
              (ICT), di cui costituisce una tra le prime realtà attive.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
