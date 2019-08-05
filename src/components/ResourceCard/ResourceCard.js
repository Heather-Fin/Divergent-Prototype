import React from 'react';

import {
    ClickableTile,
} from 'carbon-components-react/lib/components/Tile';

import Button from 'carbon-components-react/lib/components/Button';

import Add20 from '@carbon/icons-react/lib/add/20';

const ResourceCard = () => (
    
    <ClickableTile className='tile'>
        <div>
            <h2 className='cardTitle'>Resource Tile</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Button className="resource-card--button">
                Add to Your Learning<Add20 className="bx--btn__icon"/>
            </Button>
        </div>
    </ClickableTile>
);

export default ResourceCard;