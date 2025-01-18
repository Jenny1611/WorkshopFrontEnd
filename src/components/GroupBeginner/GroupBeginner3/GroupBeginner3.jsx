import nikeLogo from "/GroupBeginner/GroupBeginner3/nike-logo.jpg";
import image from "/GroupBeginner/GroupBeginner3/windows-xp-hills.jpg";
import styles from "./GroupBeginner3.module.css";

export default function GroupBeginner3() {
  return (
    <>
      <div className="card bg-light m-3">
        <div className="card-header">Gruppo 1 - sottogruppo 3</div>
        <div className="card-body">
          <h4 className="card-title">Pagina di esempio HTML e CSS</h4>
          <p className="card-text">
            Membri 2° anno: Leandro Meta.
            <br />
            Membri 1° anno: Matteo Celant, Valentina Rossi.
            <br />
          </p>
          <p>
            HTML: creazione di un header con delle ipotetiche voci di menu, form a titolo dimostrativo con all&apos;interno
            dei campi di input di diverso tipo (testo, numero, email e password).
            <br />
            <br />
            CSS: illustrazione di come si inietta lo stile in una pagina per cambiare il colore e la dimensione del
            testo o di altri elementi. <br /> Utilizzo dell&apos;effetto hover per modificare l&apos;elemento simulando
            un&apos;animazione.
            <br />
            <br />
            EXTRA: inclusione di file immagine e tag &lt;a&gt; per reindirizzare a pagine esterne.
          </p>
        </div>
      </div>
      <header className={styles.header}>
        <li className={styles.mm}>
          <a href="https://thephotosociety.org/member/charles-orear/" target="blank">
            <img src={image} alt="sfondo" />
          </a>
        </li>

        <li className={styles.mm}>Matteo Celant</li>
        <li className={styles.mm}>Pordenone</li>
        <li className={styles.mm}>ITS Alto Adriatico</li>
        <li className={styles.mm}>Contattami</li>
      </header>
      <h1 className="titolo">Piacere, mi presento</h1>
      <div id={styles.div}>
        <a href="https://www.youtube.com/watch?v=CsNTX6vVcLc" target="blank">
          <img src={nikeLogo} alt="" />
        </a>
      </div>

      <p className={styles.p}>
        Lorem ipsum dolor sit amet<span style={{color: "aqua"}}>Loremmm</span>Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Itaque magni et, inventore, molestiae odio dolor non recusandae laudantium dolorum, debitis
        qui reiciendis. Ut quas error similique possimus repellat fugiat dolorem?
      </p>
      <div id={styles.contenitore}>
        <div style={{backgroundColor: "blue"}} className={styles.con}>
          Laura
        </div>
        <div style={{backgroundColor: "chartreuse"}} className={styles.con}>
          Fiorenza
        </div>
        <div style={{backgroundColor: "chocolate"}} className={styles.con}>
          Martina
        </div>
      </div>

      <form id={styles.form}>
        <div className={styles.campi}>
          <label>Nome</label>
          <input type="text" />
        </div>
        <div className={styles.campi}>
          <label>Età</label>
          <input type="number" max="99" min="1" />
        </div>

        <div className={styles.campi}>
          <label>E-Mail</label>
          <input type="email" />
        </div>
        <div className={styles.campi}>
          <input type="password" placeholder="password" />
        </div>

        <div>
          <button id={styles.button}>INVIA</button>
        </div>
      </form>
    </>
  );
}
