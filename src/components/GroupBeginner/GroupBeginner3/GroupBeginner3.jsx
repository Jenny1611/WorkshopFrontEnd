import nikeLogo from "/GroupBeginner/GroupBeginner3/nike-logo.jpg";
import image from "/GroupBeginner/GroupBeginner3/windows-xp-hills.jpg";
import styles from "./GroupBeginner3.module.css";

export default function GroupBeginner3() {
  return (
    <>
      <header className={styles.header}>
        <li className={styles.mm} style={{margin: 0}}>
          <a href="https://thephotosociety.org/member/charles-orear/" target="blank">
            <img src={image} alt="sfondo" style={{borderTopLeftRadius: 5}} />
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
          <button id={styles.button} onClick={(event) => event.preventDefault()}>
            INVIA
          </button>
        </div>
      </form>
    </>
  );
}
