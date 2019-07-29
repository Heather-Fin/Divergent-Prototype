import React, { Component } from 'react';

// import RadioButtonGroup from 'carbon-components-react/lib/components/RadioButtonGroup';
// import RadioButton from 'carbon-components-react/lib/components/RadioButton';
// import FormGroup from 'carbon-components-react/lib/components/FormGroup';

class RadioTab extends Component {
    state = {
        selected: 'radio-1'
    };
    componentDidUpdate () {
        if (this.state.selected === 'radio-1') {
            console.log("radio-1")
        } else {
            console.log("radio-2")
        }
    };
    render () {
        return (
            <form>
                <label>
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
        );
    }
};

export default RadioTab;