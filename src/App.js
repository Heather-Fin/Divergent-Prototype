import React, { Component } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import HeaderNav from './components/HeaderNav';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import ResourcePage from './content/ResourcePage';
import StrengthsWeaknesses from './content/StrengthsWeaknesses';

class App extends Component {
  render() {
    return (
      <>
        <HeaderNav />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/resource" component={ResourcePage} />
            <Route path="srengths-weaknesses" component={StrengthsWeaknesses} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
