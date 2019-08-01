import React, { Component } from 'react';
import Dropdown from 'carbon-components-react/lib/components/Dropdown';

class DropDown extends Component {
    render() {
        return (
            <Dropdown
                id="carbon-dropdown-example"
                label={this.props.field}
                ariaLabel="Dropdown"
                titleText={this.props.label}
                invalid={false}
                invalidText="A valid value is required"
                items={this.props.array}
            />
        );
    }
}

export default DropDown;