import React from "react";
import Notification from "../parts/Notification";

export default class WitnessForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            clientType: "",
            photo: "",
            firstname: "",
            lastname: "",
            job: "",
            corporation: "",
            email: "",
            comment: "",
            printResponse: false,
            response: []
        }
    }

    handleChange(e) {
        console.log("Hello handleChange")
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log("Hello handleSubmit")
    }

    render() {
        return (
            <>
                {/* Message */}
                {this.state.printResponse && (
                    <>
                        <Notification response={this.state.response} />
                        <div>&nbsp;</div>
                    </>
                )}

                <form onSubmit={(e) => this.handleSubmit(e)}>

                    {/* Client type ? */}
                    <div className={"form-field"}>
                        <label>Client type ?</label>
                        <label>
                            <input type={"radio"} name={"clientType"} value={"particulier"} onChange={(e) => this.handleChange(e)} />
                            <span>Particulier</span>
                        </label>
                        <label>
                            <input type={"radio"} name={"clientType"} value={"corporation"} onChange={(e) => this.handleChange(e)} />
                            <span>Corporation</span>
                        </label>
                    </div>

                    {this.state.clientType === "particulier" ? (
                        <>
                            {/* Photo / Logo */}
                            <div className={"form-field"}>
                                <label htmlFor={"photo"}>Photo / Logo</label>
                                <input type={"file"} name={"photo"} value={""} onChange={(e) => this.handleChange(e)} />
                            </div>

                            {/* Firstname */}
                            <div className={"form-field"}>
                                <label htmlFor={"firstname"}>Firstname</label>
                                <input id={"firstname"} type={"text"} name={"firstname"} value={""} onChange={(e) => this.handleChange(e)} />
                            </div>
                            
                            {/* Lastname */}
                            <div className={"form-field"}>
                                <label htmlFor={"lastname"}>Lastname</label>
                                <input id={"lastname"} type={"text"} name={"lastname"} value={""} onChange={(e) => this.handleChange(e)} />
                            </div>
                            
                            {/* Job */}
                            <div className={"form-field"}>
                                <label htmlFor={"job"}>Job</label>
                                <input id={"job"} type={"text"} name={"job"} value={""} onChange={(e) => this.handleChange(e)} />
                            </div>
                        </>
                    ) : (this.state.clientType === "corporation" ? (
                        
                        // Corporation
                        <div className={"form-field"}>
                            <label htmlFor={"corporation"}>Corporation</label>
                            <input id={"corporation"} type={"text"} name={"corporation"} value={""} onChange={(e) => this.handleChange(e)} />
                        </div>
                    ) : "")}

                    {/* Email */}
                    <div className={"form-field"}>
                        <label htmlFor={"email"}>Email</label>
                        <input type={"email"} name={"email"} value={""} onChange={(e) => this.handleChange(e)} />
                    </div>

                    {/* Comment */}
                    <div className={"form-field"}>
                        <label htmlFor={"comment"}>Comment</label>
                        <textarea id={"comment"} name={"comment"} onChange={(e) => this.handleChange(e)}></textarea>
                    </div>

                    {/* Submit button */}
                    <div className={"form-button"}>
                        <button className={"btn btn-primary"} type={"submit"}>Submit</button>
                    </div>
                </form>
            </>
        )
    }
}