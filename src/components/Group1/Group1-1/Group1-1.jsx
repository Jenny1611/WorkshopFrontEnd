import {useState} from "react";
import styles from "./Group1-1.module.css";
import itsLogo from "../../../assets/ITS-Alto-Adriatico-logo-new.svg";

export default function Group1_1() {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <header className={styles.header}>
        <img src={itsLogo} alt="its" className={styles.img}/>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a href="form.html">Chi siamo</a>
          </li>
          <li className={styles.li}>
            <a href="form.html">Form</a>
          </li>
        </ul>
      </header>

      <div>
        <h1 style={{textAlign: "center"}} className="mt-3">
          Resoconto della giornata
        </h1>
        <div className={styles.d}>
          <p>
            Abbiamo lavorato come gruppo Base 1 (David Machì anno 2, Giulia Quaino anno 1, Alessio Mingolo anno 2\) alla
            creazione di una pagina HTML senza l’uso di JavaScript.
            <br />
            Utilizzando i tag `form` e `ul`, abbiamo strutturato il form all’interno del `body`, curandone la
            funzionalità e l’organizzazione.
            <br />
            Successivamente, ci siamo concentrati sul miglioramento dell’interfaccia utente con CSS e Bootstrap,
            rendendo il design più gradevole e coerente.
            <br /> Durante il processo, abbiamo collaborato per ottimizzare ogni aspetto del progetto.
            <br />
            Infine, abbiamo realizzato un resoconto per documentare il lavoro svolto e le soluzioni adottate.
          </p>
        </div>
      </div>

      <h1 style={{textAlign: "center"}} className="mb-3">
        Dati Personali
      </h1>
      <div className={styles.c}>
        <form className={styles.a}>
          <div className="mb-3">
            <label className="form-label">Nome</label>
            <input type="text" name="nome" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Cognome</label>
            <input type="text" name="cognome" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Sesso</label>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Maschio
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked={checked}
                onChange={() => {
                  setChecked(!checked);
                }}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Femmina
              </label>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" name="email" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Paese</label>
            <select className="form-select">
              <option>Seleziona</option>
              <option>Italia</option>
              <option>Francia</option>
            </select>
          </div>
          <button id={styles.button} className="btn btn-secondary">
            Inserisci
          </button>
        </form>
      </div>
    </>
  );
}
