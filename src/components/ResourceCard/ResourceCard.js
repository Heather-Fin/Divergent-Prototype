import React, { Component } from 'react';

import {
    Tile,
} from 'carbon-components-react/lib/components/Tile';

import Button from 'carbon-components-react/lib/components/Button';

import Add20 from '@carbon/icons-react/lib/add/20';

class ResourceCard extends Component {
    
    render() {
        return (
            <Tile className='tile'>
                <div className="resource-card--image-holder"></div>
                <div>
                    <h2 className='resource-card--h2'>{this.props.title}</h2>
                    <p className="resource-card--p">{this.props.description}</p>
                    <Button 
                        kind="secondary" 
                        size="small"
                        className="resource-card--button">
                        Add to Your Learning<Add20 className="bx--btn__icon"/>
                    </Button>
                </div>
            </Tile>
        );
    };
}

export default ResourceCard;