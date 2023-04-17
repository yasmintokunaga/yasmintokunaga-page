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
      <section className="pagePortfolio">
      <Header />
      <h2>Portifólio</h2>
      <main className="portfolio-card">
        { projects.map(({ title, image, link, languages }) => (
          <a 
            className="mb-3 portfolio-card-content"
            href={ link }
            target="_blank"
          >
              <h6 className="fs-6">
                { title }
              </h6>
              <img src={ image } className="foto-portifolio"/>
              <p className="fs-6 text">
                { languages }
              </p>
          </a>
        ))}
      </main>
      <h6 className="mt-2">Acesso a todos os projetos em:</h6>
      <p>
        <a 
          href="https://github.com/yasmintokunaga"
          target="_blank"
        >
          gitHub
        </a>
      </p>
        
    </section>
    );
  }
}

export default Portfolio;