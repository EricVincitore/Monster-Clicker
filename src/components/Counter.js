import React from "react";

class Counter extends React.Component {
    state = {
        count: -1
    };

    render () {
        return (
            <div>
                <span className = "navbar-brand navLeft"
                onClick={this.state.count++}>
                    | Score: {this.state.count} |
                </span>
            </div>
        )
    }
}

export default Counter;