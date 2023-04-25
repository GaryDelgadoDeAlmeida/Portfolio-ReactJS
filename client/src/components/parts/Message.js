import React from "react";

export default class Message extends React.Component {

    render() {
        return (
            <div className={`message ${this.props.classname}`}>
                <span>{this.props.message}</span>
            </div>
        )
    }
}