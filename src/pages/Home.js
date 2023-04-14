import React from 'react';
import fotoPerfil from '../img/foto-perfil-2.jpg'
import './style-home-mobile.css';

class Home extends React.Component {
  state = {
    buttons: [
      'Formação e Experiência',
      'Habilidades Técnicas',
      'Portifólio',
      'Baixar Currículo'],
  }
  render() {
    const { buttons } = this.state;
    return(
      <section className="home">
        
        <img src={ fotoPerfil } alt="foto de perfil" />

        <div className="text-center">
          <h2 className="fs-1 text fw-bold">
            Yasmin Souza Tokunaga
          </h2>
          <h3 className="fs-4 text fw-normal">
            Desenvolvedora Web
          </h3>
          <h3 className="fs-4 text fw-normal">
            Engenheira de Produção
          </h3>
        </div>

        <div className="buttons-home">
          { buttons.map((button) => (            
            <button className="btn btn-dark" key={ button }>
              { button }
            </button>
          ))}
        </div>
        <div className="icons">
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-square-github"></i>
          <i class="fa-brands fa-square-whatsapp"></i>
        </div>

      </section>
    );
  }
};

export default Home;
