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
            <RadioButton value="default-selected" id="radio-1" labelText='Button 1'/>
            <RadioButton value="standard" id="radio-2" labelText='Button 2'/>
            <RadioButton value="disabled" id="radio-3" labelText='Button 3'/>
          </RadioButtonGroup>
        </FormGroup>
);

export default RadioTab;