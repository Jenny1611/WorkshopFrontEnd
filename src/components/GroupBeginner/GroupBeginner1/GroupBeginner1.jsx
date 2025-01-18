import {useState} from "react";
import styles from "./GroupBeginner1.module.css";
import itsLogo from "/GroupBeginner/GroupBeginner1/ITS-logo.svg";

export default function GroupBeginner1() {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <div className="card bg-light m-3">
        <div className="card-header">Gruppo 1 - sottogruppo 1</div>
        <div className="card-body">
          <h4 className="card-title">Resoconto della giornata</h4>
          <br />
          <p className="card-text">
            Membri 2° anno: David Machì, Alessio Mingolo.
            <br />
            Membri 1° anno: Giulia Quaino.
            <br />
          </p>
          <p>
            Abbiamo lavorato alla creazione di una pagina HTML senza l&apos;uso di JavaScript.
            <br />
            Utilizzando i tag &lt;form&gt; e &lt;ul&gt;, abbiamo strutturato il form all&apos;interno del &lt;body&gt;,
            curandone la funzionalità e l&apos;organizzazione.
            <br />
            Successivamente, ci siamo concentrati sul miglioramento dell&apos;interfaccia utente con CSS e Bootstrap,
            rendendo il design più gradevole e coerente.
            <br />
            <br /> Durante il processo, abbiamo collaborato per ottimizzare ogni aspetto del progetto.
            <br />
            Infine, abbiamo realizzato un resoconto per documentare il lavoro svolto e le soluzioni adottate.
          </p>
        </div>
      </div>
      <header className={styles.header}>
        <img src={itsLogo} alt="its" className={styles.img} />
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a href="form.html">Chi siamo</a>
          </li>
          <li className={styles.li}>
            <a href="form.html">Form</a>
          </li>
        </ul>
      </header>

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
