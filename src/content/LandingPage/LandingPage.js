import React, { Component } from 'react';
import RadioTab from '../../components/RadioTabs';
import Smiley from '../../components/Smiley';

class LandingPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "option1"
    };
  };

  render () {
    return ( 
      <div className="bx--grid bx--grid--full-width">
        <div className="bx--row">
            <div className="bx--col charts">
              <RadioTab />
            </div>
            <div className="bx--col">
              <Smiley />
            </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
