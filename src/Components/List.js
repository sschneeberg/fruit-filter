import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="List">
                <ul>{/* List will go here*/}</ul>
            </div>
        );
    }
}

export default List;
