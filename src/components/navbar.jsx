import 'bootstrap/js/dist/dropdown';
import ITSlogo from '/ITS-logo.png';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='mx-5 my-2 container-fluid'>
        <a
          className='navbar-brand'
          href='https://www.itsaltoadriatico.it'
          target='_blank'
        >
          <img
            src={ITSlogo}
            alt='Logo di ITS Alto Adriatico'
            className='d-inline-block align-text-top'
            id='navbar-logo'
          />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavDropdown'
          aria-controls='navbarNavDropdown'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse'
          id='navbarNavDropdown'
        >
          <ul className='navbar-nav'>
            <li className='nav-item dropdown mx-4'>
              <a
                className='nav-link dropdown-toggle'
                href='#beginner'
                id='navbarDropdownMenuLink'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Beginner
              </a>
              <ul
                className='dropdown-menu'
                aria-labelledby='navbarDropdownMenuLink'
              >
                <li>
                  <a
                    className='dropdown-item'
                    href='#beginner1'
                  >
                    Progetto 1
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item'
                    href='#beginner2'
                  >
                    Progetto 2
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item'
                    href='#beginner3'
                  >
                    Progetto 3
                  </a>
                </li>
              </ul>
            </li>
            <li className='nav-item mx-4'>
              <a
                className='nav-link'
                href='#intermediate'
              >
                Intermediate
              </a>
            </li>
            <li className='nav-item mx-4'>
              <a
                className='nav-link'
                href='#advanced'
              >
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
