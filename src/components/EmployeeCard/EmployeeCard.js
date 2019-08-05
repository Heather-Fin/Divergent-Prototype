import React, { Component } from 'react';

// carbon components
import {
    ClickableTile,
} from 'carbon-components-react/lib/components/Tile';
import Checkbox from 'carbon-components-react/lib/components/Checkbox';

// icons
import Location20 from '@carbon/icons-react/lib/location/20';
import Flow20 from '@carbon/icons-react/lib/flow/20';
import CheckMarkFilled20 from '@carbon/icons-react/lib/checkmark--filled/20';
import CheckMarkOutline20 from '@carbon/icons-react/lib/checkmark--outline/20';
import Plane20 from '@carbon/icons-react/lib/plane/20';
import Pin20 from '@carbon/icons-react/lib/pin/20';

// my components
import AddInfoButton from '../AddInfoButton';

class EmployeeCard extends Component {

    // determines if the employee card will show able to relocate or not
    relocation(){
        if (this.props.relocate) {
            return <p><Plane20 className="employee-card--icon"/>Willing to relocate</p>
        }
    }

    // returns either a filled checkbox or unfilled one based on the feature passed
    checked(feature){
        if (feature){
            return <CheckMarkFilled20 className="employee-card--icon"/>
        } else {
            return <CheckMarkOutline20 className="employee-card--icon"/>
        }
    }

    render() {
        return (
          <div role="group" aria-label="selectable tiles">
            <ClickableTile id="tile-1" name="tiles" className="employee-card">
                <div className="bx--grid bx--grid--full-width">
                    <div className="bx--row">
                        <div className="bx--col-sm-16 employee-card--checkbox">
                            <Checkbox id={this.props.checkMarkID} />
                        </div>
                        <div className="bx--col">
                            <h1>{this.props.initials}</h1>
                            <p>{this.props.description}</p>
                        </div>
                        <div className="bx--col">
                            <h2>Location & Band:</h2>
                            <p><Location20 className="employee-card--icon"/>{this.props.location}</p>
                            <p><Flow20 className="employee-card--icon"/>{this.props.bandLevel}</p>
                            {this.relocation()}
                        </div>
                        <div className="bx--col">
                            <h2>Enhances team in:</h2>

                            <div className="bx--row">
                                <div className="bx--col">
                                    <p>{this.checked(this.props.perspective)}Perspective</p>
                                    <p>{this.checked(this.props.skills)}Skills</p>
                                    <p>{this.checked(this.props.education)}Education</p>
                                </div>
                                <div className="bx--col">
                                    <p>{this.checked(this.props.interests)}Interests</p>
                                    <p>{this.checked(this.props.personality)}Personality</p>
                                    <p>{this.checked(this.props.language)}Language</p>
                                </div>
                            </div>
                        </div>
                        <div className="bx--col">
                            <h2>Start Date:</h2>
                            <p>{this.props.startDate}</p>
                        </div>
                    </div>
                </div>
                <div className="employee-card--pinned">
                    <Pin20 />
                </div>
                <div className="employee-card--info-button">
                    <AddInfoButton />
                </div>
            </ClickableTile>
          </div>
        );
    }
}

export default EmployeeCard;