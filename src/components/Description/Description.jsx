import styles from "./Description.module.css";

export default function Description() {
  return (
    <div className={styles.description}>
      <p>
        Gli studenti del primo e secondo anno del corso Front-End si sono incontrati per approfondire HTML, CSS,
        JavaScript e React, suddivisi in tre gruppi:
      </p>
      <ul>
        <li>
          <p>
            <strong>Gruppo base:</strong> creazione di tre siti web utilizzando <strong>HTML</strong> e{" "}
            <strong>CSS</strong>.
          </p>
        </li>
        <hr />
        <li>
          <p>
            <strong>Gruppo medio:</strong> sviluppo di un sito web con più <strong>JavaScript</strong>, includendo
            funzioni di comparazione.
          </p>
        </li>
        <hr />
        <li>
          <p>
            <strong>Gruppo avanzato:</strong> introduzione a <strong>React</strong> e chiamate <strong>API</strong> con{" "}
            <strong>axios</strong>.
          </p>
        </li>
        <hr />
      </ul>
      <p>
        È stata un&apos;esperienza coinvolgente, in cui gli studenti del secondo anno hanno supportato i colleghi più
        giovani, spiegando gli argomenti e condividendo le proprie competenze.
      </p>
      <p>
        I responsabili del progetto,{" "}
        <a href="https://www.linkedin.com/in/jennifer-tissino-826511293/" target="blank">
          Tissino Jennifer
        </a>{" "}
        e{" "}
        <a href="https://www.linkedin.com/in/giacomo-bearzi-95216b309/" target="blank">
          Bearzi Giacomo
        </a>
        , hanno coordinato i gruppi e sviluppato questa pagina in React per mostrare i risultati dei vari progetti.
      </p>
      <p>
        La pagina illustra come si è evoluta la conoscenza degli studenti, dai concetti base a quelli avanzati, in un
        anno di formazione all&apos;ITS Academy Alto Adriatico.
      </p>
    </div>
  );
}
