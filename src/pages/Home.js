import React from 'react';
import { Link } from 'react-router-dom';
import fotoPerfil from '../img/foto-perfil-3.jpg';
import filePDF from '../files/CV-YasminSouzaTokunaga.pdf'
import './style-home.css';

class Home extends React.Component {
  state = {
    links: [
      {
        name: 'Formação e Experiência',
        path: '/expercienceeducation',
      },
      {
        name: 'Habilidades Técnicas',
        path: '/skills',
      },
      {
        name: 'Portifólio',
        path: '/portfolio',
      },
    ]
  }
  render() {
    const { links } = this.state;
    return(
      <section className="home">
        <div className="left-container">

          <img src={ fotoPerfil } alt="foto de perfil" />

          <div className="text-center">
            <h2 className="fs-1 text fw-bold mt-4">
              Yasmin Souza Tokunaga
            </h2>
            <h3 className="fs-4 text fw-normal">
              Engenheira de Produção
            </h3>
            <h3 className="fs-4 text fw-normal">
              Desenvolvedora Web
            </h3>
          </div>
        </div>

        <div className="rigth-container">
          <section className="about-me">
            <h1 className="fst-italic mb-4 fw-bold">Sobre mim</h1>
            <article>
              <p className="fst-italic">
                <i class="fa-solid fa-heart fs-6 text"></i>
                {' '}
                Paixão pela lógica, vontande de inovar e aprender
              </p>
              <p className="fst-italic">
                <i class="fa-solid fa-lightbulb  fs-6 text"></i>
                {' '}
                Vontande de inovar e aprender
              </p>
              <p className="fst-italic">
                <i class="fa-solid fa-user-group  fs-6 text"></i>
                {' '}
                Próposito de facilitar a vida de milhares de pessoas
              </p>
              <p>Esses foram os meus principais motivos para ingressar na área de 
                <span className="fw-bold"> tecnologia</span>.
              </p>
              <p>Sou formada em Engenharia de Produção Mecânica pela UNESP e atualmente estou estudando na escola de programação Trybe.</p>
            </article>
          </section>
          <div className="buttons-home">
            { links.map(({ name, path }) => (            
              <Link
                className="btn btn-dark button-home"
                key={ name }
                to={ path }
              >
                { name }
              </Link>
            ))}
            <a
              className="btn btn-dark button-home"
              href={ filePDF }
              download="CV-YasminSouzaTokunaga"
            >
              Baixar Currículo
            </a>
          </div>
          <div className="icons">
            <a 
              href="https://www.linkedin.com/in/yasmin-souza-tokunaga/"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a 
              href="https://github.com/yasmintokunaga"
              target="_blank"
            >
              <i class="fa-brands fa-square-github"></i>
            </a>
            <a 
              href="https://wa.me/5511930059995"
              target="_blank"
            >
              <i class="fa-brands fa-square-whatsapp"></i>
            </a>
          </div>
        </div>
        

      </section>
    );
  }
};

export default Home;
