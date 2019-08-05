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
                description="I am from a large city and have experience working in a start-up environment. I work well in agile workspaces and hope to learn more about designing in a corporate workspace."
                location="Cambridge, MA"
                bandLevel="Band 7"
                relocate={true}
                perspective={true}
                skills={true}
                education={true}
                interests={false}
                personality={true}
                language={false}
                startDate="October 1st, 2019"
            />
            <EmployeeCard
                checkMarkID="checkbox-2"
                initials="CRT"
                description="I am passionate about social sciences and incorporating them into design. I come from a culturally diverse city and have worked at large companies similar to IBM's size in the past."
                location="Austin, TX"
                bandLevel="Band 7"
                relocate={false}
                perspective={false}
                skills={true}
                education={false}
                interests={true}
                personality={false}
                language={true}
                startDate="September 1st, 2019"
            />
            <EmployeeCard
                checkMarkID="checkbox-3"
                initials="AST"
                description="I've lived in over 30 countries and love meeting new people. I have been self employed while traveling, and am comfortable with negotiating with team members."
                location="San Jose, CA"
                bandLevel="Band 8"
                relocate={true}
                perspective={true}
                skills={false}
                education={true}
                interests={true}
                personality={true}
                language={false}
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
