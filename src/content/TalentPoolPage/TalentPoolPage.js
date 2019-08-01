import React from 'react';
import Dropdown from '../../components/DropDown';
import EmployeeCard from '../../components/EmployeeCard';
import CompareButton from '../../components/CompareButton';

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
                    <div className="bx--col">
                        <CompareButton label="Compare Candidates"/>
                    </div>
                </div>
            </div>
            <EmployeeCard
                initials="JKY"
                description="Lorem ipsum dolor sit amet, ex erant legere eam, quot eleifend aliquando ea vim. Erat corpora platonem quo cu. Sensibus delicatissimi eum id, mel quidam equidem ut. Vis elit vitae temporibus."
                location="Cambridge, MA"
                bandLevel="Band 7"
            />
            <EmployeeCard
                initials="CRT"
                description="Lorem ipsum dolor sit amet, ex erant legere eam, quot eleifend aliquando ea vim. Erat corpora platonem quo cu. Sensibus delicatissimi eum id, mel quidam equidem ut. Vis elit vitae temporibus."
                location="Austin, TX"
                bandLevel="Band 7"
            />
            <EmployeeCard
                initials="AST"
                description="Lorem ipsum dolor sit amet, ex erant legere eam, quot eleifend aliquando ea vim. Erat corpora platonem quo cu. Sensibus delicatissimi eum id, mel quidam equidem ut. Vis elit vitae temporibus."
                location="San Jose, CA"
                bandLevel="Band 8"
            />
      </div>
  );
};

export default TalentPoolPage;
