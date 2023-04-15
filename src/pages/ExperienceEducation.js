import React from 'react';
import './style-expercienceeducation.css';

class ExperienceEducation extends React.Component {
  state = {
    education: [
      {
        title: 'Desenvolvimento Web',
        school:'TRYBE',
        year: 'Nov 2022 - Atual',
      },
      {
        title: 'Engenharia de Produção Mecânica',
        school:'UNESP',
        year: '2014 - 2019',
      },
    ],
    experience: [
      {
        post: 'Analista de Precificação Pleno',
        company: 'TENDA',
        year: 'Jan 2022 - Out 2022',
      },
      {
        post: 'Analista de Precificação Pleno',
        company: 'EXTRAFARMA',
        year: 'Jan 2020 - Out 2021',
      },
      {
        post: 'Estagiária de Marketing',
        company: 'EXTRAFARMA',
        year: 'Jul 2019 - Dez 2019',
      },
      {
        post: 'Estagiária de Precificação',
        company: 'EXTRAFARMA',
        year: 'Jan 2019 - Jun 2019',
      },
    ],
  };

  render() {
    const { education, experience } = this.state;
    return(
      <section className="pageExperienceEducation">
        <a href="" className="text-end mt-2">Página Inicial</a>
        <h2>Formação</h2>
        { education.map(({ title, school, year }) => (
          <div class="card mb-3">
            <div class="card-body">
              <h6 class="card-title">
                { title }
              </h6>
              <p class="card-text">
                { `${school} | ${year}` }
              </p>
            </div>
          </div>
        ))}

        <h2 className="mt-4">Experiências</h2>
        { experience.map(({ post, company, year }) => (
          <div class="card mb-3">
            <div class="card-body">
              <h6 class="card-title">
                { post }
              </h6>
              <p class="card-text">
                { `${company} | ${year}` }
              </p>
            </div>
          </div>
        ))}
        <p>
          { 'Saiba mais em '}
          <a href="">linkedin</a>
        </p>
          
      </section>
    );
  }
};

export default ExperienceEducation;