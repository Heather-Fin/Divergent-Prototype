import React from 'react';
import Button from 'carbon-components-react/lib/components/Button';

import RightArrow20 from '@carbon/icons-react/lib/arrow--right/20';

const AddInfoButton = () => (
    <Button kind="secondary">
        View Additional Info <RightArrow20 className="bx--btn__icon"/>
    </Button>
)

export default AddInfoButton;