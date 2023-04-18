import React from 'react';
import fotoOnlineStore from '../img/online-store.png';
import fotoTrybeWallet from '../img/carteira-trybe-wallet.png';
import fotoTrybeTunes from '../img/trybetunes.png';
import fotoSuperTryunfo from '../img/super-tryunfo.png';
import './style-portfolio.css';
import Header from '../components/Header';

class Portfolio extends React.Component {
  state = {
    projects: [
      {
        title: 'Online Store',
        image: fotoOnlineStore,
        link: 'https://yasmintokunaga.github.io/project-online-store/',
        languages: 'JavaScript | React | HTML | CSS',
      },
      {
        title: 'Trybe Wallet',
        image: fotoTrybeWallet,
        link: 'https://yasmintokunaga.github.io/projeto-trybe-wallet/',
        languages: 'JavaScript | React | Redux | HTML | CSS',
      },
      {
        title: 'Trybe Tunes',
        image: fotoTrybeTunes,
        link: 'https://yasmintokunaga.github.io/trybe-tunes-project/',
        languages: 'JavaScript | React | HTML | CSS',
      },
      {
        title: 'Super Tryunfo',
        image: fotoSuperTryunfo,
        link: 'https://yasmintokunaga.github.io/super-tryunfo-project/',
        languages: 'JavaScript | React | HTML | CSS',
      },
    ],
  };

  render() {
    const { projects } = this.state;
    return(
      <>
        <Header />
        <section className="pagePortfolio">
          <h2>Portifólio</h2>
          <div id="carouselExampleAutoplaying" className="carousel slide container-carousel carousel-dark" data-bs-ride="carousel">
            <div className="carousel-inner">
              { projects.map(({ title, image, link, languages }, index) => (         
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={ title }>
                  <h5>{ title }</h5>
                  <p>{ languages }</p>
                  <p></p>
                  <img src={ image } className="d-block w-100 foto-portifolio" alt={ title } />
                  <p> Visite a página
                    {' '}
                    <a 
                      href={ link }
                      target="_blank" rel="noreferrer"
                    >
                    aqui
                    </a>
                  </p>       
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
      </>
    );
  }
}

export default Portfolio;