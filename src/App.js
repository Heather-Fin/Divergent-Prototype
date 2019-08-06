import React, { useState } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import HeaderNav from './components/HeaderNav';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './content/LandingPage';
import ResourcePage from './content/ResourcePage';
import StrengthsWeaknesses from './content/StrengthsWeaknesses';
import TalentPoolPage from './content/TalentPoolPage';
import ComparisonPage from './content/ComparisonPage';

import EmployeeContext from './EmployeeContext';
import employees from './data/employees';

const App = () => {
  const employeeHook = useState(employees);
  return (
    <>
      <HeaderNav />
      <EmployeeContext.Provider value={employeeHook}>
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/resource" component={ResourcePage} />
            <Route path="/srengths-weaknesses" component={StrengthsWeaknesses} />
            <Route path="/talent-pool" component={TalentPoolPage} />
            <Route exact path="/comparison" component={ComparisonPage} />
          </Switch>
        </Content>
      </EmployeeContext.Provider>
    </>
  );
}

export default App;
