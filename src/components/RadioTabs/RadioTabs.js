import React, { Component } from 'react';
import RadarGraph from '../RadarGraph';
import HeatMap from '../HeatMap';

class RadioTab extends Component {
    state = {
        selected: 'radio-1'
    };
    componentDidUpdate () {
        if (this.state.selected === 'radio-1') {
            return <RadarGraph />
        } if (this.state.selected === 'radio-2') {
            return <HeatMap />
        }
    };
    render () {
        return (
            <div>
                {this.componentDidUpdate()}
                <form className='button-group'>
                    <input
                        type="radio"
                        id='radio-1'
                        name='myRadio'
                        value='radio-1'
                        checked={this.state.selected === 'radio-1'}
                        onChange={(e) => this.setState({ selected: e.target.value })}
                    />
                    <label className="radio-button">
                        Button 1
                    </label>
                    <input
                        type="radio"
                        id='radio-2'
                        name='myRadio'
                        value='radio-2'
                        checked={this.state.selected === 'radio-2'}
                        onChange={(e) => this.setState({ selected: e.target.value })}
                    />
                    <label className="radio-button">
                        Button 2
                    </label>
                </form>
            </div>
        );
    }
};

export default RadioTab;
