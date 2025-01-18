import {useState} from "react";
import Home from "./components/Home";
import ChiSiamo from "./components/ChiSiamo";
import styles from "./Group1-2.module.css";

export default function Group1_2() {
  const [currentPage, setCurrentPage] = useState("home");
  return (
    <>
      <div className="card bg-light m-3">
        <div className="card-header">Gruppo 1 - sottogruppo 2</div>
        <div className="card-body">
          <h4 className="card-title">Relazione sul Codice Creato by Chat GPT</h4>
          <br />
          <p className="card-text">
            Membri 2° anno: Matteo Venuti.
            <br />
          </p>
          <p>
            Abbiamo sviluppato due pagine web e il relativo file CSS per lo stile, con l'obiettivo di presentare un sito
            informativo dedicato all'ITS Academy Alto Adriatico. Di seguito, i dettagli delle funzionalità implementate:
          </p>
          <ul>
            <li>
              <strong>Struttura delle Pagine Web:</strong> Sono state create due pagine HTML:
              <ul>
                <li>
                  <em>Pagina "Chi siamo":</em> Descrive l'istituto ITS Alto Adriatico, evidenziando la mission e il
                  ruolo nell'ambito delle tecnologie ICT.
                </li>
                <li>
                  <em>Homepage:</em> Funziona come punto di accesso principale al sito, includendo un modulo di
                  contatto.
                </li>
              </ul>
            </li>
            <li>
              <strong>Navigazione del Sito:</strong> Un menù di navigazione è stato integrato in entrambe le pagine
              tramite una lista non ordinata <code>&lt;ul&gt;</code>. Gli elementi del menù consentono di accedere
              facilmente alle varie sezioni del sito.
            </li>
            <li>
              <strong>Elementi Visivi:</strong> Il logo dell'ITS Alto Adriatico è stato posizionato nel menù di
              navigazione per migliorare il branding visivo. Inoltre, un'immagine di banner decorativa è stata aggiunta
              nella pagina "Chi siamo".
            </li>
            <li>
              <strong>Modulo di Contatto:</strong> Sulla homepage è stato implementato un modulo con campi per nome,
              cognome ed email. Il modulo permette agli utenti di inviare i propri dati tramite un pulsante.
            </li>
            <li>
              <strong>Stile e Layout:</strong> Gli stili sono stati definiti nel file <em>style.css</em> per rendere il
              sito accattivante e facile da navigare.
            </li>
            <li>
              <strong>Responsività:</strong> È stato aggiunto il meta tag
              <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;</code> per garantire
              che le pagine siano visualizzabili correttamente anche su dispositivi mobili.
            </li>
          </ul>
          <p>
            Questo codice rappresenta una base funzionale per un sito web informativo e può essere ulteriormente esteso
            con sezioni dinamiche, funzionalità interattive e una maggiore personalizzazione grafica.
          </p>
        </div>
      </div>
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
