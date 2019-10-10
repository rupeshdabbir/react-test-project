import React, { Component } from 'react';

class charComponent extends Component {
    constructor(props) {
        super();
    }

    getLetter = () => {
        return this.props.letter || '';
    }

    render() {
        return (
            <div className="char-style">
                {this.getLetter()}
            </div>
        )
    }
}

export default charComponent;