import React from 'react';
import Dropdown from '../../components/DropDown';

const bandArray = ['6', '5', '4', '3', '2', '1'];
const locationArray = ['Austin', 'New York', 'San Fransisco'];
const hiredArray = ['Internal', 'External'];

const TalentPoolPage = () => {
  return(
      <div>
          <h1>Talent Pool Suggestions</h1>
          <h2>-- Based on Your Team --</h2>
          <div className="bx--grid bx--grid--full-width">
                <div className="bx--row">
                    <div className="bx--col">
                        {/* <div style={{width: 200}}> */}
                        <Dropdown label={'Band Level'} array={bandArray} field='All'/>
                    </div>
                    <div className="bx--col">
                        <Dropdown label={'Location'} array={locationArray} field='Anywhere'/>
                    </div>
                    <div className="bx--col">
                        <Dropdown label={'Internal or External'} array={hiredArray} field='Either'/>
                    </div>
                </div>
            </div>
      </div>
  );
};

export default TalentPoolPage;
