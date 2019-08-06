import React, { Component } from 'react';
import Button from 'carbon-components-react/lib/components/Button';
import { Link } from 'react-router-dom';

class CompareButton extends Component {

    render() {
        return (
            <Link to="/comparison?id1=3&id2=5">
                <Button
                    disabled={this.props.disabled}  
                >
                    Compare Candidates
                </Button>
            </Link>
    );
    }
}

export default CompareButton;