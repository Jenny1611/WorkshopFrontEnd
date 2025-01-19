import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode} from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <section className="py-2" id="hero-section">
      <div className="my-5 w-75 mx-auto d-flex flex-column justify-content-center">
        <h1 className="text-white" style={{textAlign: "left"}}>
          <FontAwesomeIcon icon={faCode} className="me-2" />
          Workshop Front-End
        </h1>
        <div className="w-50 text-white">
          <p>
            Gli studenti del primo e secondo anno del corso Front-End si sono incontrati per approfondire HTML, CSS,
            JavaScript e React, suddivisi in tre gruppi:
          </p>
          <ul>
            <li className="my-4">
              <strong>Beginner</strong>: creazione di tre siti web utilizzando <strong>HTML</strong> e{" "}
              <strong>CSS</strong>
            </li>
            <li className="my-4">
              <strong>Intermediate</strong>: sviluppo di un sito web che integra <strong>JavaScript</strong>, includendo
              funzionalità di confronto
            </li>
            <li className="my-4">
              <strong>Advanced</strong>: introduzione a <strong>React</strong> e chiamate <strong>API</strong> con{" "}
              <strong>axios</strong>
            </li>
          </ul>
          <p>
            È stata un&apos;esperienza coinvolgente e collaborativa, in cui gli studenti del secondo anno hanno guidato
            i colleghi più giovani, condividendo con entusiasmo le proprie competenze.
          </p>
          <p>
            I responsabili del progetto, {""}
            <a
              href="https://www.linkedin.com/in/jennifer-tissino-826511293/"
              target="blank"
              className="fw-bold link-info link-underline-hover">
              Tissino Jennifer
            </a>{" "}
            e {""}
            <a
              href="https://www.linkedin.com/in/giacomo-bearzi-95216b309/"
              target="blank"
              className="fw-bold link-info link-underline-hover">
              Bearzi Giacomo
            </a>{" "}
            , hanno coordinato i gruppi e sviluppato questa pagina in React per mostrare i risultati dei vari progetti.
          </p>
          <p>
            La pagina illustra come si è evoluta la conoscenza degli studenti, dai concetti base a quelli avanzati, in
            un anno di formazione all&apos;ITS Academy Alto Adriatico.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
