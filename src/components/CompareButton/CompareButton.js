import React, { Component } from 'react';
import Button from 'carbon-components-react/lib/components/Button';

class CompareButton extends Component {

    render() {
        return (
            <>
                <a href="#/comparison">
                    <Button
                        disabled={this.props.cantCompare}  
                    >
                        Compare Candidates
                    </Button>
                </a>
            </>
        );
    }
}

export default CompareButton;