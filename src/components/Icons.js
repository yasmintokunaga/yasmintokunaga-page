import React from 'react';
import './Icons.css';

class Icons extends React.Component {
  render() {
    return(
      <section>
        <div className="page-icons">
          <a 
            href="https://www.linkedin.com/in/yasmin-souza-tokunaga/"
            target="_blank" rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a 
            href="https://github.com/yasmintokunaga"
            target="_blank" rel="noreferrer"
          >
            <i className="fa-brands fa-square-github text"></i>
          </a>
          <a 
            href="https://wa.me/5511930059995"
            target="_blank" rel="noreferrer"
          >
            <i className="fa-brands fa-square-whatsapp text"></i>
          </a>

        </div>
      </section>
    );
  }
}

export default Icons;