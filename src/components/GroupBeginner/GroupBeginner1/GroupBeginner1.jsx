import {useState} from "react";
import styles from "./GroupBeginner1.module.css";
import itsLogo from "/GroupBeginner/GroupBeginner1/ITS-logo.svg";

export default function GroupBeginner1() {
  const [checked, setChecked] = useState(false);
  return (
    <>
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
