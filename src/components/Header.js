import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import filePDF from '../files/CV-YasminSouzaTokunaga.pdf';
import Icons from './Icons';

class Header extends React.Component {
  render() {
    return(
      <header className="showBlock">
        <nav className="navbar fixed-top">
          <div className="container-fluid">
            <button className="navbar-toggler fs-6 text" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <span className="fs-5 text">
              Yasmin Souza Tokunaga
            </span>
            <Icons />
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Yasmin Souza Tokunaga</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <Link to ="/yasmintokunaga-page" className="nav-link active" aria-current="page">
                      Página inicial
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to ="/expercienceeducation" class="nav-link">
                      Formação e Experiência
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to ="/skills" class="nav-link">
                      Habilidades técnicas
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link to ="/portfolio" class="nav-link">
                      Portifólio
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link"
                      href={ filePDF }
                      download="CV-YasminSouzaTokunaga"
                    >
                      Baixar Currículo
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
