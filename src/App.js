import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ExperienceEducation from './pages/ExperienceEducation';
import Skills from './pages/Skills';

class App extends React.Component {
  render() {
    return(
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/expercienceeducation" component={ ExperienceEducation } />
        <Route path="/skills" component={ Skills } />
      </Switch>
    )
  }
}

export default App;
