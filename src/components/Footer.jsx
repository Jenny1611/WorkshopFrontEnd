import ITSlogo from '/ITS-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='container-fluid m-0 px-4 d-flex py-4 border-top'>
      <footer className='d-flex flex-wrap justify-content-between align-items-center px-4 py-3 w-100'>
        <p className='col-md-4 mb-0 text-body-secondary'>
          © Corso Font-End 2023-2025
        </p>
        <a
          href='https://www.itsaltoadriatico.it'
          target='_blank'
          className='col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none'
        >
          <img
            src={ITSlogo}
            alt='Logo di ITS Alto Adriatico'
            className='d-inline-block align-text-top'
            id='navbar-logo'
          />
        </a>

        <ul className='nav col-md-4 justify-content-end'>
          <li className='nav-item'>
            <a
              href='https://www.facebook.com/ITSAltoAdriatico'
              target='_blank'
              className='nav-link px-2 text-body-secondary'
            >
              <FontAwesomeIcon
                icon={faFacebook}
                size='2x'
                color="#4267B2"
              />
            </a>
          </li>
          <li className='nav-item'>
            <a
              href='https://www.instagram.com/itsaltoadriatico/'
              target='_blank'
              className='nav-link px-2 text-body-secondary'
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size='2x'
                color="#E1306C"
              />
            </a>
          </li>
          <li className='nav-item'>
            <a
              href='https://it.linkedin.com/school/fondazione-its-alto-adriatico/'
              target='_blank'
              className='nav-link px-2 text-body-secondary'
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size='2x'
                color="#0F76A8"
              />
            </a>
          </li>
          <li className='nav-item'>
            <a
              href='https://m.youtube.com/channel/UCLNGw_LKmmiuK79XTM5I7zg'
              target='_blank'
              className='nav-link px-2 text-body-secondary'
            >
              <FontAwesomeIcon
                icon={faYoutube}
                size='2x'
                color='#FF0000'
              />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
