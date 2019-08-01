import React, { Component } from 'react';

import {
    SelectableTile,
} from 'carbon-components-react/lib/components/Tile';

class EmployeeCard extends Component {
    render() {
        return (
          <div role="group" aria-label="selectable tiles">
            <SelectableTile id="tile-1" name="tiles" >
              <h1>{this.props.initials}</h1>
              <p>{this.props.description}</p>
              <h2>Location & Band:</h2>
                <p>{this.props.location}</p>
                <p>{this.props.bandLevel}</p>
              <h2>Enhances team in:</h2>
              <h2>Start Date:</h2>
              <p>{this.props.startDate}</p>
            </SelectableTile>
          </div>
        );
    }
}

export default EmployeeCard;