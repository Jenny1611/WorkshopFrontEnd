const groups = [
  // Primo gruppo
  {
    id: 'beginner',
    firstYearMembers: null,
    secondYearMembers: null,
    name: null,
    card: {
      title: 'Beginner',
      description:
        'Il gruppo <em>Beginner</em> si è concentrato sulle basi delle pagine web: HTML, CSS e qualche accenno di JavaScript.',
    },
    projects: [
      {
        groupSubName: 'Gruppo Beginner - Sottogruppo 1',
        title: 'Resoconto della giornata',
        firstYearSubMembers: 'Giulia Quaino',
        secondYearSubMembers: 'David Machì, Alessio Mingolo',
        description:
          `<p>Abbiamo lavorato alla creazione di una pagina HTML senza l'uso di JavaScript.</p>
          <p>Utilizzando i tag <code>&lt;form/&gt;</code> e <code>&lt;ul/&gt;</code>, abbiamo strutturato il form all'interno del <code>&lt;body/&gt;</code>, curandone la funzionalità e l'organizzazione.<br>
          Successivamente, ci siamo concentrati sul miglioramento dell'interfaccia utente con CSS e Bootstrap, rendendo il design più gradevole e coerente.</p>
          <p>Durante il processo, abbiamo collaborato per ottimizzare ogni aspetto del progetto. Infine, abbiamo realizzato un resoconto per documentare il lavoro svolto e le soluzioni adottate.</p>`,
      },
      {
        groupSubName: 'Gruppo Beginner - Sottogruppo 2',
        title: 'Relazione sul Codice Creato by Chat GPT',
        firstYearSubMembers: 'Aurora Gasparutti',
        secondYearSubMembers: 'Matteo Venuti',
        description:
          `<p>Abbiamo sviluppato due pagine web e il relativo file CSS per lo stile, con l'obiettivo di presentare un sito informativo dedicato all'ITS Academy Alto Adriatico. Di seguito, i dettagli delle funzionalità implementate:</p>
          <ul>
            <li>
              <strong>Struttura delle Pagine Web:</strong> Sono state create due pagine HTML:
              <ul>
                <li>
                  <em>Pagina "Chi siamo":</em> Descrive l'istituto ITS Alto Adriatico, evidenziando la mission e ilruolo nell'ambito delle tecnologie ICT.
                </li>
                <li>
                  <em>Homepage:</em> Funziona come punto di accesso principale al sito, includendo un modulo di contatto.
                </li>
              </ul>
            </li>
            <li>
              <strong>Navigazione del Sito:</strong> Un menù di navigazione è stato integrato in entrambe le pagine tramite una lista non ordinata <code>&lt;ul&gt;</code>. Gli elementi del menù consentono di accedere facilmente alle varie sezioni del sito.
              </li>
            <li>
              <strong>Elementi Visivi:</strong> Il logo dell'ITS Alto Adriatico è stato posizionato nel menù di navigazione per migliorare il branding visivo. Inoltre, un'immagine di banner decorativa è stata aggiunta nella pagina "Chi siamo".
              </li>
            <li>
              <strong>Modulo di Contatto:</strong> Sulla homepage è stato implementato un modulo con campi per nome, cognome ed email. Il modulo permette agli utenti di inviare i propri dati tramite un pulsante.
              </li>
            <li>
              <strong>Stile e Layout:</strong> Gli stili sono stati definiti nel file <em>style.css</em> per rendere il sito accattivante e facile da navigare.
              </li>
            <li>
              <strong>Responsività:</strong> È stato aggiunto il meta tag <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;</code> per garantire che le pagine siano visualizzabili correttamente anche su dispositivi mobili.
              </li>
          </ul>
          <p>Questo codice rappresenta una base funzionale per un sito web informativo e può essere ulteriormente esteso ßcon sezioni dinamiche, funzionalità interattive e una maggiore personalizzazione grafica.</p>`,
      },
      {
        groupSubName: 'Gruppo Beginner - Sottogruppo 3',
        title: 'Pagina di esempio HTML e CSS',
        firstYearSubMembers: 'Matteo Celant, Valentina Rossi',
        secondYearSubMembers: 'Leandro Meta',
        description:
          `<p>HTML: creazione di un header con delle ipotetiche voci di menu, form a titolo dimostrativo con all'interno dei campi di input di diverso tipo (testo, numero, email e password).</p>
          <p>CSS: illustrazione di come si inietta lo stile in una pagina per cambiare il colore e la dimensione del testo o di altri elementi. Utilizzo dell'effetto hover per modificare l'elemento simulando un'animazione.</p>
          <p>EXTRA: inclusione di file immagine e tag <a> per reindirizzare a pagine esterne.</p>`,
      },
    ],
  },
  // Secondo gruppo
  {
    id: 'intermediate',
    firstYearMembers: 'Emanuele Zanchetta, Giovanni Zol, Denis Mascherin',
    secondYearMembers:
      'Andrea Pellarin, Andrea Del Bianco, Andrea Ferrarella, Andrea Turchet',
    name: 'Gruppo Intermediate',
    card: {
      name: 'Intermediate',
      description:
        'Il gruppo <em>Intermediate</em> ha approfondito le basi del Front-End, con particolare attenzione verso JavaScript, creando funzioni di comparazione.',
    },

    projects: [
      {
        groupSubName: null,
        title: 'Confronta Numeri',
        firstYearSubMembers: null,
        secondYearSubMembers: null,
        description:
          `<h5>Argomenti toccati in questo progetto: HTML, CSS, JAVASCRIPT</h5>
          <p>HTML: creazione di un form tramite tag <code>&lt;form/&gt;</code> con all'interno dei campi di input <code>&lt;input type="numer"/&gt;</code> nei quali verranno inseriti due numeri e le relative <code>&lt;label/&gt;</code> per identificare gli elementi e stampare i risultati.</p>
          <p>CSS: import di un font da google font, input number responsive tramire utilizzo di classi CSS come <code>.error{ border-color:red }</code> per identificare i cambi di input invalidi.</p>
          <p>JAVASCRIPT: utilizzato per creare una funzione <code>Confronta()</code> che viene richiamata in modo da garantire un aggiornamento in tempo reale della pagina, essa viene utilizzata per valutare quale dei due numeri inseriti è più grande con stampa del relativo numero in una label.</p>
          <p>EXTRA: live editor for CSS (VS Code extension), shortcut utili per VS Code.</p>`,
      },
    ],
  },
  // Terzo gruppo
  {
    id: 'advanced',
    firstYearMembers: 'Marco Segato, Nicola Marano',
    secondYearMembers: 'Mattia Pavan, Lorenzo Morici, Klevis Hasa',
    name: 'Gruppo Advanced',
    card: {
      name: 'Advanced',
      description:
        'Il gruppo <em>Advanced</em> ha affrontato le basi di React: componenti, stato e props. Inoltre, ha implementato delle chiamate API utilizzando Axios, imparando a gestire richieste HTTP.',
    },
    projects: [
      {
        groupSubName: null,
        title: 'Pokédex con PokéAPI e React',
        firstYearSubMembers: null,
        secondYearSubMembers: null,
        description:
          `<p>Questo piccolo progetto è stato realizzato con React e sfrutta la REST PokeApi per visualizzare i pokemon singoli.</p>
          <p>Usa la libreria axios per richiedere i dati all'API e sfrutta gli hook di React per aggiornare la grafica.</p>`,
      },
    ],
  },
];

export const GetData = () => {
  return groups;
};
