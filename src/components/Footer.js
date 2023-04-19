import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return(
      <footer>
        <nav className="navbar fixed-bottom">
          <div className="container-fluid">
            <Link to="/yasmintokunaga-page">
              <i className="fa-solid fa-house"></i>
            </Link>
            <a 
              href="https://www.linkedin.com/in/yasmin-souza-tokunaga/"
              target="_blank" rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a 
              href="https://github.com/yasmintokunaga"
              target="_blank" rel="noreferrer"
            >
              <i className="fa-brands fa-square-github text"></i>
            </a>
            <a 
              href="https://wa.me/5511930059995"
              target="_blank" rel="noreferrer"
            >
              <i className="fa-brands fa-square-whatsapp text"></i>
            </a>
          </div>
        </nav>
      </footer>
    );
  }
}

export default Footer;
