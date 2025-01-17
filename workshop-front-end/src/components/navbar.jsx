import itsLogo from '../assets/ITS-Alto-Adriatico-logo-new.svg';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <a
        className="navbar-brand"
        href="#"
      >
        <img
          src={itsLogo}
          alt="Logo ITS Alto Adriatico"
          style={{ height: '50px', width: 'auto' }}
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              href="/#easy"
            >
              Easy
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="/#medium"
            >
              Medium
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="/#hard"
            >
              Hard
            </a>
          </li>
        </ul>
      </div>
    </nav>

    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <div className="container-fluid">
    //     {/* Brand/Logo */}
    //     <a
    //       href="https://www.itsaltoadriatico.it/"
    //       className="navbar-brand"
    //     >
    //       <img
    //         src={itsLogo}
    //         alt="Logo ITS Alto Adriatico"
    //         style={{ height: '40px', width: 'auto' }}
    //       />
    //     </a>

    //     {/* Toggle Button for Small Screens */}
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>

    //     {/* Navigation Links */}
    //     <div
    //       className="collapse navbar-collapse"
    //       id="navbarNav"
    //     >
    //       <ul className="navbar-nav ms-auto">
    //         <li className="nav-item">
    //           <NavLink
    //             to="/"
    //             className="nav-link"
    //             activeClassName="active"
    //           >
    //             Home
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink
    //             to="/gruppo-base"
    //             className="nav-link"
    //             activeClassName="active"
    //           >
    //             Gruppo base
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink
    //             to="/gruppo-medio"
    //             className="nav-link"
    //             activeClassName="active"
    //           >
    //             Gruppo medio
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink
    //             to="/gruppo-avanzato"
    //             className="nav-link"
    //             activeClassName="active"
    //           >
    //             Gruppo avanzato
    //           </NavLink>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navbar;
