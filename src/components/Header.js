import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import filePDF from '../files/CV-YasminSouzaTokunaga.pdf'
import Icons from './Icons';

class Header extends React.Component {
  render() {
    return(
      <header>
        <nav class="navbar fixed-top">
          <div class="container-fluid">
            <button class="navbar-toggler fs-6 text" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <span className="showBlock fs-5 text">
              Yasmin Souza Tokunaga
            </span>
            <Icons />
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Yasmin Souza Tokunaga</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li class="nav-item">
                    <Link to ="/yasmintokunaga-page" className="nav-link active" aria-current="page">
                      Página inicial
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to ="/skills" class="nav-link">
                      Habilidades técnicas
                    </Link>
                  </li>
                  <li class="nav-item dropdown">
                    <Link to ="/portfolio" class="nav-link">
                      Portifólio
                    </Link>
                  </li>
                  <li class="nav-item dropdown">
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
};

export default Header;
