import React, { Component } from 'react';
import List from './List';
import Input from './Input';

class FruitContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //initialize fruit list to the full list
            fruitToDisp: this.props.fruits,
            //initialize filer to empty
            filter: ''
        };
    }

    handleFilterChange = (e) => {
        e.preventDefault();
        let filterValue = e.target.value.toLowerCase();
        const filteredFruits = this.props.fruits.filter((fruit) => {
            return fruit.toLowerCase().includes(filterValue);
        });
        this.setState({ filter: filterValue, fruitToDisp: filteredFruits });
    };

    render() {
        return (
            <div className="Fruit-Container">
                <Input
                    value={this.state.filterValue}
                    onChange={this.handleFilterChange}
                />
                <List fruits={this.state.fruitToDisp} />
            </div>
        );
    }
}

export default FruitContainer;
