import React, { Component } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import HeaderNav from './components/HeaderNav';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './content/LandingPage';
import ResourcePage from './content/ResourcePage';
import StrengthsWeaknesses from './content/StrengthsWeaknesses';
import TalentPoolPage from './content/TalentPoolPage';
import ComparisonPage from './content/ComparisonPage';

class App extends Component {
  render() {
    return (
      <>
        <HeaderNav />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/resource" component={ResourcePage} />
            <Route path="/srengths-weaknesses" component={StrengthsWeaknesses} />
            <Route path="/talent-pool" component={TalentPoolPage} />
            <Route exact path="/comparison" component={ComparisonPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
