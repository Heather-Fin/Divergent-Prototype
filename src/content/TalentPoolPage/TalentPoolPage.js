import React from 'react';
import Dropdown from '../../components/DropDown';
import EmployeeCard from '../../components/EmployeeCard';
import CompareButton from '../../components/CompareButton';

const bandArray = ['6', '7', '8', '9', '10'];
const locationArray = ['Austin', 'New York', 'San Fransisco'];
const hiredArray = ['Internal', 'External'];

const TalentPoolPage = () => {
  return(
      <div>
          <h1 className="talent-pool-page--h1">Talent Pool Suggestions</h1>
          <h2 className="talent-pool-page--h2">— Based on Your Team —</h2>
          <div className="bx--grid--full-width talent-pool--tool-bar">
                <div className="bx--row">
                    <div className="bx--col">
                        <Dropdown label={'Band Level'} array={bandArray} field='All'/>
                    </div>
                    <div className="bx--col">
                        <Dropdown label={'Location'} array={locationArray} field='Anywhere'/>
                    </div>
                    <div className="bx--col">
                        <Dropdown label={'Internal/External'} array={hiredArray} field='Either'/>
                    </div>
                    <div className="bx--col">{/*spacing*/}</div>
                    <div className="talent-pool--compare-button">
                        <CompareButton
                            label="Compare Candidates"
                            cantCompare={false}    
                        />
                    </div>
                </div>
            </div>
            <EmployeeCard
                checkMarkID="checkbox-1"
                initials="HRU"
                description="Lorem ipsum dolor sit amet, ex erant legere eam, quot eleifend aliquando ea vim. Erat corpora platonem quo cu. Sensibus delicatissimi eum id, mel quidam equidem ut. Vis elit vitae temporibus."
                location="Cambridge, MA"
                bandLevel="Band 7"
                relocate={true}
                startDate="October 1st, 2019"
            />
            <EmployeeCard
                checkMarkID="checkbox-2"
                initials="CRT"
                description="Lorem ipsum dolor sit amet, ex erant legere eam, quot eleifend aliquando ea vim. Erat corpora platonem quo cu. Sensibus delicatissimi eum id, mel quidam equidem ut. Vis elit vitae temporibus."
                location="Austin, TX"
                bandLevel="Band 7"
                relocate={false}
                startDate="September 1st, 2019"
            />
            <EmployeeCard
                checkMarkID="checkbox-3"
                initials="AST"
                description="Lorem ipsum dolor sit amet, ex erant legere eam, quot eleifend aliquando ea vim. Erat corpora platonem quo cu. Sensibus delicatissimi eum id, mel quidam equidem ut. Vis elit vitae temporibus."
                location="San Jose, CA"
                bandLevel="Band 8"
                relocate={true}
                startDate="September 1st, 2019"
            />
        <div className="talent-pool-page--bottom-button">
            <CompareButton
                label="Compare Candidates"
                cantCompare={false} 
            />
        </div>
      </div>
  );
};

export default TalentPoolPage;
