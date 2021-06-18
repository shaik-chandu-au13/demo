import React, { Component } from 'react'

export default class Button extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <button className="btn-1">{this.props.title}
            </button>
            </div>
        )
    }
}
