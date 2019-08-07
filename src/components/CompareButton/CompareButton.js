import React, { Component } from 'react';
import Button from 'carbon-components-react/lib/components/Button';
import TooltipIcon from 'carbon-components-react/lib/components/TooltipIcon';
import { Link } from 'react-router-dom';

class CompareButton extends Component {

    displayTooltipOnButton(){
        if (this.props.disabled){
            return (
                <TooltipIcon tooltipText='Select two candidates to compare' align="center" direction="top">
                    <Button disabled={this.props.disabled}>Compare Candidates</Button>
                </TooltipIcon>
            );
        } else {
            return (<Button disabled={this.props.disabled}>Compare Candidates</Button>)
        }
    }

    render() {
        return (
            <Link to="/comparison">
                {this.displayTooltipOnButton()}
            </Link>
    );
    }
}

export default CompareButton;