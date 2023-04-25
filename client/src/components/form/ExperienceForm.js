import React from "react";
import Notification from "../parts/Notification";

export default class ExperienceForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type: "",
            job: "",
            organization: "",
            startDate: "",
            endDate: "",
            description: "",
            response: {
                class: "",
                message: ""
            }
        }
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        
        // Return a response to the user
        this.setState({
            response: {
                class: "danger",
                message: "All right"
            }
        })
    }

    render() {
        return (
            <>
                {this.state.response.message !== "" && (
                    <>
                        <Notification classname={this.state.response.class} message={this.state.response.message} />
                        <div>&nbsp;</div>
                    </>
                )}

                <form className={"experience-form"} onSubmit={(e) => this.handleSubmit(e)}>
                    
                    <div className={"form-field"}>
                        <label htmlFor={"type"}>Experience type</label>
                        <label>
                            <input type={"radio"} name={"type"} value={"experience"} onChange={(e) => this.handleChange(e)} />
                            <span>Experience</span>
                        </label>
                        <label>
                            <input type={"radio"} name={"type"} value={"formation"} onChange={(e) => this.handleChange(e)} />
                            <span>Formation</span>
                        </label>
                    </div>

                    {this.state.type === "experience" && (
                        <>
                            <div className={"form-field"}>
                                <label htmlFor={"organization"}>Organization</label>
                                <input id={"organization"} type={"text"} name={"organization"} />
                            </div>

                            <div className={"form-field"}>
                                <label htmlFor={"job"}>Job</label>
                                <input id={"job"} type={"text"} name={"job"} />
                            </div>
                        </>
                    )}
                    
                    {this.state.type === "formation" && (
                        <>
                            <div className={"form-field"}>
                                <label htmlFor={"organization"}>Organization</label>
                                <input id={"organization"} type={"text"} name={"organization"} />
                            </div>

                            <div className={"form-field"}>
                                <label htmlFor={"formation"}>Formation</label>
                                <input id={"formation"} type={"text"} name={"formation"} />
                            </div>
                        </>
                    )}
                    
                    <div className={"form-field"}>
                        <label htmlFor={"startDate"}>Start date</label>
                        <input id={"startDate"} type={"date"} name={"startDate"} />
                    </div>
                    
                    <div className={"form-field"}>
                        <label htmlFor={"endDate"}>End date</label>
                        <input id={"endDate"} type={"date"} name={"endDate"} />
                    </div>
                    
                    <div className={"form-field"}>
                        <label htmlFor={"description"}>Description</label>
                        <textarea id={"description"} rows="5" name={"description"} ></textarea>
                    </div>

                    <div className={"form-button"}>
                        <button className={"btn btn-primary"} type={"submit"}>Submit</button>
                    </div>
                </form>
            </>
        )
    }
}