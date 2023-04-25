import React from "react";
import Notification from "../parts/Notification";

export default class UpdatePasswordForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allowReset: false,
            printResponse: false,
            response: {
                class: "",
                message: ""
            },
            form: {
                oldPassword: "",
                newPassword: "",
                confirmNewPassword: ""
            }
        };
    }

    handleChange(e) {        
        let form = this.state.form;
        form[e.target.name] = e.target.value;

        this.setState({form: form});
    }

    onSubmit(e) {
        e.preventDefault();

        // Check if the new password and the confirmation have a value
        if(this.state.form.newPassword === "" || this.state.form.confirmNewPassword === "") {
            this.setState({
                printResponse: true,
                response: {class: "danger", message: "An error has been found"}
            })
            return;
        }

        // Check if the password and the confirmation is the same
        if(this.state.form.newPassword !== this.state.form.confirmNewPassword) {
            console.log([
                this.state.form.newPassword !== this.state.form.confirmNewPassword,
                this.state.form.newPassword,
                this.state.form.confirmNewPassword
            ])
            this.setState({
                printResponse: true,
                response: {class: "danger", message: "The confirmation of the new password isn't accurate"}
            })
            return;
        }

        this.setState({
            printResponse: true,
            allowReset: false,
            response: {class: "success", message: "The password has been successfully updated"},
        })
    }

    render() {
        return (
            <form className={"update-password-form"} method={"POST"} onSubmit={(e) => this.onSubmit(e)}>

                {/* Message */}
                {this.state.printResponse && (
                    <>
                        <Notification classname={this.state.response.class} message={this.state.response.message} />
                        <div>&nbsp;</div>
                    </>
                )}

                <div className={"form-field"}>
                    <label htmlFor={"currentPwd"}>Current Password :</label>
                    <input id={"currentPwd"} type={"password"} name={"oldPassword"} onChange={(e) => this.handleChange(e)} required disabled={!this.state.allowReset}/>
                </div>
                
                <div className={"form-field"}>
                    <label htmlFor={"pwd"}>Password :</label>
                    <input id={"pwd"} type={"password"} name={"newPassword"} onChange={(e) => this.handleChange(e)} required disabled={!this.state.allowReset}/>
                </div>
                
                <div className={"form-field"}>
                    <label htmlFor={"confPwd"}>Confirm password :</label>
                    <input id={"confPwd"} type={"password"} name={"confirmNewPassword"} onChange={(e) => this.handleChange(e)} required disabled={!this.state.allowReset}/>
                </div>
                
                <div className={"form-button"}>
                    {this.state.allowReset && (
                        <button type={"submit"} className={"btn btn-primary"} >Reset</button>
                    )}

                    {!this.state.allowReset && (
                        <button className={"btn btn-red"} onClick={() => this.setState({allowReset: true})}>Edit</button>
                    )}
                </div>
            </form>
        )
    }
}