import React, { Component } from 'react';
import Dropdown from 'carbon-components-react/lib/components/Dropdown';

class DropDown extends Component {
    render() {
        return (
            <Dropdown
                id="carbon-dropdown-example"
                label="Dropdown menu options"
                ariaLabel="Dropdown"
                titleText={this.props.label}
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
        );
    }
}

export default DropDown;