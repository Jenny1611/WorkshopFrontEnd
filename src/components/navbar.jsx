import "bootstrap/js/dist/dropdown";
import ITSlogo from "/ITS-logo.png";
import {useEffect, useState} from "react";
import clsx from "clsx";

const Navbar = () => {
  const [element, setElement] = useState("");
  const sections = ["beginner", "intermediate", "advanced"];
  const subSections = ["beginner1", "beginner2", "beginner3"];

  function handleScroll() {
    const scrollPosition = window.scrollY;
    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const offsetTop = section.offsetTop - 110;
        const offsetHeight = section.offsetHeight - 110;
        let offsetTop2;
        let offsetHeight2;
        if (sectionId === "beginner") {
          subSections.forEach((subSectionId) => {
            const subSection = document.getElementById(subSectionId);
            if (subSection) {
              offsetTop2 = subSection.offsetTop + offsetTop - 110;
              offsetHeight2 = subSection.offsetHeight + offsetHeight - 110;
              if (scrollPosition >= offsetTop2 && scrollPosition < offsetTop2 + offsetHeight2) {
                setElement(subSectionId);
              }
            }
          });
        } else if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setElement(sectionId);
        }
        if (scrollPosition < offsetTop && sectionId === "beginner") {
          setElement("");
        }
      }
    });
  }

  useEffect(() => {
    handleScroll();
  }, []);

  window.addEventListener("scroll", handleScroll);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="mx-5 my-2 container-fluid">
        <a className="navbar-brand" href="https://www.itsaltoadriatico.it" target="_blank">
          <img
            src={ITSlogo}
            alt="Logo di ITS Alto Adriatico"
            className="d-inline-block align-text-top"
            id="navbar-logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown mx-4">
              <a
                onClick={() => setElement("beginner")}
                className={clsx("nav-link dropdown-toggle", {selected: element.startsWith("b")})}
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Beginner
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <a
                    onClick={() => setElement("beginner1")}
                    className={clsx("dropdown-item", {selected: element === "beginner1"})}
                    href="#beginner1">
                    Progetto 1
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => setElement("beginner2")}
                    className={clsx("dropdown-item", {selected: element === "beginner2"})}
                    href="#beginner2">
                    Progetto 2
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => setElement("beginner3")}
                    className={clsx("dropdown-item", {selected: element === "beginner3"})}
                    href="#beginner3">
                    Progetto 3
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item mx-4">
              <a
                onClick={() => setElement("intermediate")}
                className={clsx("nav-link", {selected: element === "intermediate"})}
                href="#intermediate">
                Intermediate
              </a>
            </li>
            <li className="nav-item mx-4">
              <a
                onClick={() => setElement("advanced")}
                className={clsx("nav-link", {selected: element === "advanced"})}
                href="#advanced">
                Advanced
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
