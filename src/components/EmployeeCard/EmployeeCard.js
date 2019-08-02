import React, { Component } from 'react';

import {
    SelectableTile,
} from 'carbon-components-react/lib/components/Tile';

import Location20 from '@carbon/icons-react/lib/location/20';
import Flow20 from '@carbon/icons-react/lib/flow/20';

class EmployeeCard extends Component {
    render() {
        return (
          <div role="group" aria-label="selectable tiles">
            <SelectableTile id="tile-1" name="tiles" >
                <div className="bx--grid bx--grid--full-width">
                    <div className="bx--row">
                        <div className="bx--col">
                            <h1>{this.props.initials}</h1>
                            <p>{this.props.description}</p>
                        </div>
                        <div className="bx--col">
                            <h2>Location & Band:</h2>
                            <p><Location20 />{this.props.location}</p>
                            <p><Flow20 />{this.props.bandLevel}</p>
                        </div>
                        <div className="bx--col">
                            <h2>Enhances team in:</h2>
                        </div>
                        <div className="bx--col">
                            <h2>Start Date:</h2>
                            <p>{this.props.startDate}</p>
                        </div>
                    </div>
                </div>
            </SelectableTile>
          </div>
        );
    }
}

export default EmployeeCard;