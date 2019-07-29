import React, { Component } from 'react';
import RadarGraph from '../RadarGraph';
import HeatMap from '../HeatMap';


function showData () {
    //console.log(this.selectedOption);
    return (<div><RadarGraph/><HeatMap /></div>)
}

class RadioTab extends Component {

    constructor(props) {
      super(props);
      this.state = {
        selectedOption: 1
      };
    };
  
    render () {
      return ( 
        <div>
            {showData()}
        </div>
      );
    }
};

export default RadioTab;