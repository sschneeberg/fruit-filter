import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="Input">
                <label htmlFor="fruit-filter">Filter these fruits: </label>
                <input
                    type="text"
                    value={this.props.value}
                    onChange={this.props.onChange}
                    name="fruit-filter"
                />
            </div>
        );
    }
}

export default Input;
