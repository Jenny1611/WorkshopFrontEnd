import {useRef, useState} from "react";
import styles from "./GroupIntermediate.module.css";

export default function Group2() {
  const [result, setResult] = useState("");
  const [tuttoOk1, setTuttoOk1] = useState(true);
  const [tuttoOk2, setTuttoOk2] = useState(true);
  const textStyle = "{ border-color:red }";
  const errore = styles.errore;
  const ref1 = useRef();
  const ref2 = useRef();

  const confronta = (a, b) => {
    if (a === b) {
      setResult("SONO UGUALI");
    } else if (a > b) {
      setResult("A È MAGGIORE");
    } else {
      setResult("B È MAGGIORE");
    }
  };

  const controllaCampi = () => {
    let ok = true;
    if (ref1.current.value === "") {
      ok = false;
      setTuttoOk1(false);
    } else {
      setTuttoOk1(true);
    }
    if (ref2.current.value === "") {
      ok = false;
      setTuttoOk2(false);
    } else {
      setTuttoOk2(true);
    }
    return ok;
  };

  const eseguiConfronto = () => {
    let ok = controllaCampi();
    if (ok) {
      confronta(parseFloat(ref1.current.value), parseFloat(ref2.current.value));
    } else {
      setResult("ERRORE!");
    }
  };

  function submit(event) {
    event.preventDefault();
    eseguiConfronto();
  }

  return (
    <>
      <div className="card bg-light m-3">
        <div className="card-header">Gruppo 2</div>
        <div className="card-body">
          <h4 className="card-title">Confronta Numeri</h4>
          <p className="card-text">
            Membri 2° anno: Andrea Pellarin, Andrea Del Bianco, Andrea Ferrarella, Andrea Turchet.
            <br />
            Membri 1° anno: Emanuele Zanchetta, Giovanni Zol, Denis Mascherin.
            <br />
            <br />
          </p>
          <h5>Argomenti toccati in questo progetto: HTML, CSS, JAVASCRIPT.</h5>
          <p>
            HTML: creazione di un form tramite tag &lt;form&gt; con all'interno dei campi di input &lt;input
            type="numer"&gt; nei quali verranno inseriti due numeri
            <br />
            e le relative &lt;label&gt; per identificare gli elementi e stampare i risultati.
            <br />
            <br />
            CSS: import di un font da google font, input number responsive tramire utilizzo di classi CSS come .error
            {textStyle} per identificare i cambi di input invalidi.
            <br />
            <br />
            JAVASCRIPT: utilizzato per creare una funzione Confronta() che viene richiamata in modo da garantire un
            aggiornamento in tempo reale della pagina,
            <br />
            essa viene utilizzata per valutare quale dei due numeri inseriti è più grande con stampa del relativo numero
            in una label <br />
            <br />
            EXTRA: live editor for css (Vs code extension), shortcut utili per Vs code.
          </p>
        </div>
      </div>
      <h1 className={styles.title}>Esercitazione</h1>
      <form id="form" onChange={eseguiConfronto}>
        <div id={styles.result}>
          <p className={tuttoOk1 === false || tuttoOk2 === false ? errore : null}>{result}</p>
        </div>
        <div className={styles.box}>
          <div>
            <label htmlFor="numero1">Numero 1</label>
            <input type="number" id="numero1" ref={ref1} className={tuttoOk1 === false ? errore : null} />
          </div>
          <div>
            <label htmlFor="numero2">Numero 2</label>
            <input type="number" id="numero2" ref={ref2} className={tuttoOk2 === false ? errore : null} />
          </div>
        </div>
        <div className={styles.actions}>
          <input id="invia" className={styles.button} type="submit" value="confronta" onClick={submit} />
        </div>
      </form>
    </>
  );
}
