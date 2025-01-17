import nikeLogo from "../../../assets/Screenshot 2025-01-17 112202.jpg";
import image from "../../../assets/images.jpg";
import styles from "./Group1-3.module.css";

export default function Group1_3() {
  return (
    <>
      <header className={styles.header}>
        <li className={styles.mm}>
          <a href="https://thephotosociety.org/member/charles-orear/">
            <img src={image} alt="sfondo" />
          </a>
        </li>

        <li className={styles.mm}>Matteo Celant</li>
        <li className={styles.mm}>Pordenone</li>
        <li className={styles.mm}>ITS Alto Adriatico</li>
        <li className={styles.mm}>Contattami</li>
      </header>
      <h1 className="titolo">Piacere, mi presento</h1>
      <a href="https://www.youtube.com/watch?v=CsNTX6vVcLc">
        <img src={nikeLogo} alt="" id={styles.nikeLogo} />
      </a>

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
