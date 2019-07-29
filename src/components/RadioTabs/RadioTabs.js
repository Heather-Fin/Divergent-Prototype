import React from 'react';

import RadioButtonGroup from 'carbon-components-react/lib/components/RadioButtonGroup';
import RadioButton from 'carbon-components-react/lib/components/RadioButton';
import FormGroup from 'carbon-components-react/lib/components/FormGroup';

const RadioTab = () => (
        <FormGroup legendText="Radio Buttons Heading">
          <RadioButtonGroup
            defaultSelected="default-selected"
            legend="Group Legend"
          >
            <RadioButton 
                value="default-selected"
                checked={true}
                id="radio-1"
                labelText='Button 1' />
            <RadioButton
                value="standard-2"
                id="radio-2"
                labelText='Button 2'
                />
            <RadioButton value="standard-3" id="radio-3" labelText='Button 3'/>
            <RadioButton value="standard-4" id="radio-4" labelText='Button 4'/>
            <RadioButton value="standard-5" id="radio-5" labelText='Button 5'/>
            <RadioButton value ='standard-6' id="radio-6" labelText='Button 6'/>
          </RadioButtonGroup>
        </FormGroup>
);

export default RadioTab;