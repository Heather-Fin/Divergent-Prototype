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
      <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
        <div className="bx--row">
          <div className="bx--col-lg-16">
            <RadioTab className='charts'/>
            <Smiley />
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
