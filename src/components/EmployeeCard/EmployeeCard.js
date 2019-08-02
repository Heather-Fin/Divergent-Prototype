import React, { Component } from 'react';

//carbon components
import {
    SelectableTile,
} from 'carbon-components-react/lib/components/Tile';

//icons
import Location20 from '@carbon/icons-react/lib/location/20';
import Flow20 from '@carbon/icons-react/lib/flow/20';
import CheckMarkFilled20 from '@carbon/icons-react/lib/checkmark--filled/20';
import CheckMarkOutline20 from '@carbon/icons-react/lib/checkmark--outline/20';

//my components
import AddInfoButton from '../AddInfoButton';

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

                            <div className="bx--row">
                                <div className="bx--col">
                                    <p><CheckMarkFilled20 />Perspective</p>
                                    <p><CheckMarkFilled20 />Skills</p>
                                    <p><CheckMarkFilled20 />Education</p>
                                </div>
                                <div className="bx--col">
                                    <p><CheckMarkFilled20 />Hobbies</p>
                                    <p><CheckMarkFilled20 />Personality</p>
                                    <p><CheckMarkFilled20 />Language</p>
                                </div>
                            </div>
                        </div>
                        <div className="bx--col">
                            <h2>Start Date:</h2>
                            <p>{this.props.startDate}</p>
                        </div>
                    </div>
                </div>
                <AddInfoButton />
            </SelectableTile>
          </div>
        );
    }
}

export default EmployeeCard;