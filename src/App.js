import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ExperienceEducation from './pages/ExperienceEducation';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';

class App extends React.Component {
  render() {
    return(
      <Switch>
        <Route exact path="/yasmintokunaga.github.io" component={ Home } />
        <Route path="/expercienceeducation" component={ ExperienceEducation } />
        <Route path="/skills" component={ Skills } />
        <Route path="/portfolio" component={ Portfolio } />
      </Switch>
    )
  }
}

export default App;
