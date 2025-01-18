import {useRef, useState} from "react";
import styles from "./GroupIntermediate.module.css";

export default function Group2() {
  const [result, setResult] = useState("");
  const [tuttoOk1, setTuttoOk1] = useState(true);
  const [tuttoOk2, setTuttoOk2] = useState(true);
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
