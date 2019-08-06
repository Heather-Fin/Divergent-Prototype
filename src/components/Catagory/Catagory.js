import React, { Component } from 'react';
import CheckMarkFilled20 from '@carbon/icons-react/lib/checkmark--filled/20';

class Catagory extends Component {

    render() {
        return (
            <div className="catagory--flexin">
                <div>
                    <CheckMarkFilled20 className="catagory--icons"/>
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