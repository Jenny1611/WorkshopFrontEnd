import styles from "../GroupBeginner2.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.pagina}>
        <h1 id="home-heading">
          Welcome to the homepage
        </h1>
        <form className={styles.form}>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" />
          <br />
          <label htmlFor="cognome"> Cognome:</label>
          <input type="cognome" id="cognome" name="cognome" />
          <br />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <br />
          <button type="submit" style={{marginBottom: 50}} onClick={(event) => event.preventDefault()}>
            Invia
          </button>
        </form>
      </div>
    </>
  );
}
