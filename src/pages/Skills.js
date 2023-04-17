import React from 'react';
import filePDF from '../files/CV-YasminSouzaTokunaga.pdf'
import Header from '../components/Header';
import './style-skills.css';

class Skills extends React.Component {
  state = {
    skills: [
      {
        skill: 'HTML',
        icon: 'icon-skills fa-brands fa-html5'
      },
      {
        skill: 'CSS',
        icon: 'icon-skills fa-brands fa-css3-alt'
      },
      {
        skill: 'JavaScript',
        icon: 'icon-skills fa-brands fa-square-js'
      },
      { 
        skill: 'React',
        icon: 'icon-skills fa-brands fa-react'
      },
      { 
        skill: 'Excel (VBA)',
        icon: 'icon-skills fa-solid fa-table'
      },
    ],

    softSkills: [
      {
        skill: 'Comunicação assertiva',
        icon: 'icon-skills fa-regular fa-comments'
      },
      {
        skill: 'Trabalho em equipe',
        icon: 'icon-skills fa-solid fa-people-group'
      },
      {
        skill: 'Resiliência',
        icon: 'icon-skills fa-solid fa-person-hiking'
      },
      { 
        skill: 'Pensamento lógico',
        icon: 'icon-skills fa-solid fa-gears'
      },
      { 
        skill: 'Pensamento crítico',
        icon: 'icon-skills fa-solid fa-chart-pie'
      },
    ],
  };

  render() {
    const { skills, softSkills } = this.state;
    return(
      <section className="pageSkills">
      <Header />
      <h2>Habilidades técnicas</h2>
      <main className="skills-card">
        { skills.map(({ skill, icon }) => (
          <div className="mb-3 skills-card-content">
            <i className={ icon }/>
              <h6>
                { skill }
              </h6>
          </div>
        ))}
      </main>

      <h2 className="showBlock">Habilidades comportamentais</h2>
      <main className="showBlock skills-card">
        { softSkills.map(({ skill, icon }) => (
          <div className="mb-3 skills-card-content showBlock">
            <i className={ icon }/>
              <h6>
                { skill }
              </h6>
          </div>
        ))}
      </main>
      <h6 className="mt-2">Mais detalhes em:</h6>
      <p>
        <a 
          href="https://www.linkedin.com/in/yasmin-souza-tokunaga/"
          target="_blank"
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
    );
  }
};

export default Skills;
