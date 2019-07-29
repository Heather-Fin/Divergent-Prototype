import React from 'react';

import ClickableTile from 'carbon-components-react/lib/components/Tile';

import ChevronRight20 from '@carbon/icons-react/lib/chevron--right/20';

const ResourceCard = () => (
    
    <ClickableTile className='tile'>
        <h2 className='cardTitle'>Resource Tile</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <ChevronRight20 className='arrow' />
    </ClickableTile>
);

export default ResourceCard;