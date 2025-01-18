import styles from "../GroupBeginner2.module.css";

export default function ChiSiamo() {
  return (
    <>
      <div className={styles.pagina}>
        <div className={styles.banner}>
          <h1>Chi siamo</h1>
        </div>
        <div>
          <h1> Cos&apos;è l&apos;ITS</h1>
          <p>
            L’ITS Academy Alto Adriatico è un Istituto Tecnologico Superiore strutturato come Fondazione che dal 2011
            offre formazione post diploma di eccellenza nel campo dell’Information and Communication Technologies (ICT),
            di cui costituisce una tra le prime realtà attive.
          </p>
        </div>
      </div>
    </>
  );
}
