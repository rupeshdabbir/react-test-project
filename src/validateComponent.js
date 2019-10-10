import React, { Component } from 'react';

class validateComponent extends Component {
    constructor(props) {
        super();
    }

    displayMessage = () => {
        return this.props.length > 4 ? '' : 'Small String';
    }

    render() {
        return(
            <div>
                {this.displayMessage()}
            </div>
        )
    }

}

export default validateComponent;