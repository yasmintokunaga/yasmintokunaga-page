import React from 'react';
import './style-expercienceeducation.css';
import Header from '../components/Header';
import filePDF from '../files/CV-YasminSouzaTokunaga.pdf';

import logoTrybe from '../img/logo-trybe.png';
import logoUNESP from '../img/unesp-logo.png';
import logoTenda from '../img/logo-tenda.png';
import logoExtrafarma from '../img/logo-extrafarma.png';
import Footer from '../components/Footer';

class ExperienceEducation extends React.Component {
  state = {
    education: [
      {
        title: 'Desenvolvimento Web',
        school:'TRYBE',
        year: 'Nov 2022 - Atual',
        logo: logoTrybe,
      },
      {
        title: 'Engenharia de Produção Mecânica',
        school:'UNESP',
        year: '2014 - 2019',
        logo: logoUNESP,
      },
    ],
    experience: [
      {
        key: 4,
        post: 'Analista de Precificação Pleno',
        company: 'TENDA',
        year: 'Jan 2022 - Out 2022',
        responsibilities: [
          'Relatórios de pesquisa de preço',
          'Montagem dos encartes promocionais',
          'Preparação para abertura de novas lojas',
          'Gerenciamento das hierarquias mercadológicas',
        ],
        logo: logoTenda,
      },
      {
        key: 3,
        post: 'Analista de Precificação Pleno',
        company: 'EXTRAFARMA',
        year: 'Jan 2020 - Out 2021',
        responsibilities: [
          'Gerenciamento de preços e promoções',
          'Relatórios de pesquisa de preço',
          'Comunicação com as lojas',
          'Automatização e melhorias sistêmicas da área'
        ],
        logo: logoExtrafarma,
      },
      {
        key: 2,
        post: 'Estagiária de Marketing',
        company: 'EXTRAFARMA',
        year: 'Jul 2019 - Dez 2019',
        responsibilities: [
          'Criação de conteúdo para as mídias sociais',
          'Realizações de pesquisas qualitativas',
          'Comunicação com as lojas',
          'Desenvolvimento de campanhas locais',
          'Preparação de relatórios analíticos da área'
        ],
        logo: logoExtrafarma,
      },
      {
        key: 1,
        post: 'Estagiária de Precificação',
        company: 'EXTRAFARMA',
        year: 'Jan 2019 - Jun 2019',
        responsibilities: [
          'Participação no processo de precificação',
          'Análise de margens',
          'Comunicação com as lojas',
          'Auxilio no processo de gestão de preços promocionais',
          'Comunicação com as lojas',
        ],
        logo: logoExtrafarma,
      },
    ],
  };

  render() {
    const { education, experience } = this.state;
    return(
      <>
        <Header />
        <section className="pageExperienceEducation">
          <h2>Formação</h2>
          <section className="container-content-education">
            { education.map(({ title, school, year, logo }) => (
              <div
                className="card m-3"
                key={ school }
              >
                <img src={ logo } className="showBlock" alt={ title }/>
                <div className="card-body">
                  <h6 className="card-title">
                    { title }
                  </h6>
                  <p className="card-text">
                    { `${school} | ${year}` }
                  </p>
                </div>
              </div>
            ))}
          </section>

          <h2 className="mt-4">Experiências</h2>
          <section className="container-content-experience">
            { experience.map(({ post, company, year, logo, key }) => (
              <div className="card m-3" key={ key }>
                <img src={ logo } className="showBlock" alt={ company }/>
                <div className="card-body">
                  <h6 className="card-title">
                    { post }
                  </h6>
                  <p className="card-text">
                    { `${company} | ${year}` }
                  </p>
                </div>
              </div>
            ))}
          </section>
          <p className="mt-3">
            Mais detalhes em:
            {' '}
            <a 
              href="https://www.linkedin.com/in/yasmin-souza-tokunaga/"
              target="_blank" rel="noreferrer"
            >
              linkedin
            </a>
            {' / '}
          
            <a
              className=""
              href={ filePDF }
              download="CV-YasminSouzaTokunaga"
            >
            Currículo completo
            </a>
          </p>
        </section>
        <Footer />
      </>
    );
  }
}

export default ExperienceEducation;