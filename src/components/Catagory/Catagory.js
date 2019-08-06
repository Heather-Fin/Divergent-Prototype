import React, { Component } from 'react';
import CheckMarkFilled20 from '@carbon/icons-react/lib/checkmark--filled/20';
import ErrorFilled20 from '@carbon/icons-react/lib/error--filled/20';

class Catagory extends Component {

    // returns either a check or slash icon
    pickIcon(strength){
        if (strength){
            return <CheckMarkFilled20 className="catagory--icon"/>
        } else {
            return <ErrorFilled20 className="catagory--icon"/>
        }
    }

    render() {
        return (
            <div className="catagory--flexin">
                <div>
                    {this.pickIcon(this.props.strength)}
                </div>
                <div>
                    <h3 className="catagory--h3">{this.props.title}</h3>
                    <p className="catagory--p">{this.props.description}</p>
                </div>
            </div>
        );
    }
}

export default Catagory;