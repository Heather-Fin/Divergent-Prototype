import React, { useState } from 'react';
import Dropdown from '../../components/DropDown';
import EmployeeCard from '../../components/EmployeeCard';
import CompareButton from '../../components/CompareButton';
import employees from '../../data/employees';

const bandArray = ['6', '7', '8', '9', '10'];
const locationArray = ['Austin', 'New York', 'San Fransisco'];
const hiredArray = ['Internal', 'External'];


const TalentPoolPage = () => {
    const [selectedEmployees, setSelectedEmployees] = useState([]);

    function handleSelectedEmployees(id){
        const selectedEmployee = employees.find(employee => employee.id === id)

        // if item is already checked, remove it from array
        if(selectedEmployees.includes(selectedEmployee)){
            selectedEmployees.splice( selectedEmployees.indexOf(selectedEmployee), 1 );
            setSelectedEmployees([...selectedEmployees])
        // item is not checked, adds it to array of selected employees
        } else {
            setSelectedEmployees([...selectedEmployees, selectedEmployee])
        }
    }

    console.log(selectedEmployees);

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
                            disabled={selectedEmployees.length < 2}
                        />
                    </div>
                </div>
            </div>
            {employees.map(employee => (
                 <EmployeeCard
                    checkMarkID={employee.checkMarkID}
                    initials={employee.initials}
                    description={employee.description}
                    location={employee.location}
                    bandLevel={employee.bandLevel}
                    relocate={employee.relocate}
                    perspective={employee.perspective}
                    skills={employee.skills}
                    education={employee.education}
                    interests={employee.interests}
                    personality={employee.personality}
                    language={employee.language}
                    startDate={employee.startDate}
                    id={employee.id}
                    key={employee.id}
                    handleSelectedEmployees={handleSelectedEmployees}
                    pinned={employee.pinned}
                />
            ))}
        <div className="talent-pool-page--bottom-button">
            <CompareButton
                label="Compare Candidates"
                disabled={selectedEmployees.length < 2}
            />
        </div>
      </div>
  );
};

export default TalentPoolPage;
