import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const fruitItems = this.props.fruits.map((fruit, index) => {
            return <li key={'fruit ' + index}>{fruit}</li>;
        });

        return (
            <div className="List">
                <ul>{fruitItems}</ul>
            </div>
        );
    }
}

export default List;
