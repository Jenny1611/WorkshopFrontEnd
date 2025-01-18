import styles from "../GroupBeginner2.module.css";

export default function Home() {
  return (
    <>
      <h1>Welcome to the homepage</h1>
      <form className={styles.form}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <br />
        <label htmlFor="cognome"> Cognome</label>
        <input type="cognome" id="cognome" name="cognome" />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <br />
        <button type="submit">Invia</button>
      </form>
    </>
  );
}
