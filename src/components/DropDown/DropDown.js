import React from 'react';
import Dropdown from 'carbon-components-react/lib/components/Dropdown';

const DropDown = () => (
    <div style={{width: 300}}>
        <Dropdown
            id="carbon-dropdown-example"
            label="Dropdown menu options"
            ariaLabel="Dropdown"
            titleText="This is not a dropdown title."
            helperText="This is not some helper text."
            invalid={false}
            invalidText="A valid value is required"
            items={[
                {id: 'option-1',text: 'Option 1'},
                {id: 'option-2',text: 'Option 2'},
                {id: 'option-3',text: 'Option 3'},
            ]}
            //itemToString={itemToString}
            //onChange={anonymous}
        />
    </div>
);

export default DropDown;