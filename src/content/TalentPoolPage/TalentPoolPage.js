import React from 'react';
import Dropdown from '../../components/DropDown';

const TalentPoolPage = () => {
  return(
      <div>
          <h1>Talent Pool Suggestions</h1>
          <h2>-- Based on Your Team --</h2>

          <div style={{width: 200}}>
              <Dropdown />
          </div>

      </div>
  );
};

export default TalentPoolPage;
