import React from "react";

export default class Notification extends React.Component {

    constructor(props) {
        super(props);
        this.class = props.classname;
        this.message = props.message;
        this.icon = "";
        
        if(props.classname === "success") {
            this.icon = "/content/images/svg/checkmark-green.svg";
        } else if(props.classname === "information") {
            this.icon = "/content/images/svg/informationmark-gray.svg";
        } else if(props.classname === "warning") {
            this.icon = "/content/images/svg/questionmark-yellow.svg";
        } else if(props.classname === "danger") {
            this.icon = "/content/images/svg/closemark-red.svg";
        }

    }

    render() {
        return (
            <div className={`notification ${this.props.classname}`}>
                <div className={"icon"}>
                    <img src={this.icon} alt={"icon"} />
                </div>
                
                <div className={"message"}>
                    <span>{this.props.message}</span>
                </div>
            </div>
        )
    }
}