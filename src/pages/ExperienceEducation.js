import React from 'react';
import './style-expercienceeducation.css';
import Header from '../components/Header';
import filePDF from '../files/CV-YasminSouzaTokunaga.pdf';

import education from '../data/dataEducation';
import experience from '../data/dataExperience';

import Footer from '../components/Footer';

class ExperienceEducation extends React.Component {

  render() {
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