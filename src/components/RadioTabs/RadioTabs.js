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
                <form>
                    <label className="radio-button">
                        <input
                            type="radio"
                            id='radio-1'
                            name='myRadio'
                            value='radio-1'
                            checked={this.state.selected === 'radio-1'}
                            onChange={(e) => this.setState({ selected: e.target.value })}
                        />
                        Button 1
                    </label>
                    <label>
                        <input
                            type="radio"
                            id='radio-2'
                            name='myRadio'
                            value='radio-2'
                            checked={this.state.selected === 'radio-2'}
                            onChange={(e) => this.setState({ selected: e.target.value })}
                        />
                        Button 2
                    </label>
                </form>
                {this.componentDidUpdate()}
            </div>
        );
    }
};

export default RadioTab;