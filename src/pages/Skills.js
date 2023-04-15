import React from 'react';
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
  };

  render() {
    const { skills } = this.state;
    return(
      <section className="pageSkills">
      <a href="" className="text-end mt-2">Página Inicial</a>
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
        
    </section>
    );
  }
};

export default Skills;
