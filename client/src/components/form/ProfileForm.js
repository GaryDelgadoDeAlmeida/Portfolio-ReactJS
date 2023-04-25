import React from "react";
import Notification from "../parts/Notification";

export default class ProfileForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: props.identity.firstname,
            lastname: props.identity.lastname,
            email: props.identity.email,
            phone: props.identity.phone,
            address: props.identity.address,
            zipCode: props.identity.zipCode,
            country: props.identity.country,
            description: props.identity.description,
            isDisabled: true,
            printResponse: false,
            response: {
                class: "",
                message: ""
            }
        }
    }

    handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;

        console.log(e.target.type)

        this.setState({[name]: value});
    }

    handleEdit(e) {
        this.setState({
            isDisabled: false,
            printResponse: false
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            isDisabled: true, 
            printResponse: true,
            response: {class: "success", message: "La mise à jour a bien été prise en compte"}
        })
    }
    
    render() {
        return (
            <>
                {this.state.printResponse && (
                    <>
                        <Notification classname={this.state.response.class} message={this.state.response.message} />
                        <div>&nbsp;</div>
                    </>
                )}

                <form className={"profile-form"} onSubmit={(e) => this.handleSubmit(e)}>
                    <div className={"form-field"}>
                        <label htmlFor="firstname">Firstname</label>
                        <input type={"text"} name={"firstname"} maxLength="100" value={this.state.firstname} disabled={this.state.isDisabled} onChange={(e) => this.handleChange(e)}/>
                    </div>
                    
                    <div className={"form-field"}>
                        <label htmlFor="lastname">Lastname</label>
                        <input type={"text"} name={"lastname"} maxLength="100" value={this.state.lastname} disabled={this.state.isDisabled} onChange={(e) => this.handleChange(e)}/>
                    </div>
                    
                    <div className={"form-field"}>
                        <label htmlFor={"email"}>Email</label>
                        <input type={"email"} name={"email"} maxLength="255" value={this.state.email} disabled={this.state.isDisabled} onChange={(e) => this.handleChange(e)}/>
                    </div>
                    
                    <div className={"form-field"}>
                        <label htmlFor={"phone"}>Phone number</label>
                        <input type={"tel"} name={"phone"} value={this.state.phone} disabled={this.state.isDisabled} onChange={(e) => this.handleChange(e)}/>
                    </div>
                    
                    <div className={"form-field"}>
                        <label htmlFor={"address"}>Address</label>
                        <input type={"text"} name={"address"} maxLength="255" value={this.state.address} disabled={this.state.isDisabled} onChange={(e) => this.handleChange(e)}/>
                    </div>
                    
                    <div className={"form-field"}>
                        <label htmlFor={"zipCode"}>Zip code</label>
                        <input type={"number"} name={"zipCode"} value={this.state.zipCode} disabled={this.state.isDisabled} onChange={(e) => this.handleChange(e)}/>
                    </div>
                    
                    <div className={"form-field"}>
                        <label htmlFor={"country"}>Country</label>
                        <input type={"text"} name={"country"} value={this.state.country} disabled={this.state.isDisabled} onChange={(e) => this.handleChange(e)}/>
                    </div>
                    
                    <div className={"form-field"}>
                        <label htmlFor="description">Description</label>
                        <textarea name={"description"} value={this.state.description} disabled={this.state.isDisabled} onChange={(e) => this.handleChange(e)}></textarea>
                    </div>

                    <div className={"info-edit"}>
                        {!this.state.isDisabled && (
                            <button type={"submit"} className={"btn btn-primary"}>Submit</button>
                        )}

                        {this.state.isDisabled && (
                            <button className={"btn btn-red"} onClick={(e) => {
                                if(window.confirm("Are you sure you want to edit your profile ?") === true) {
                                    this.handleEdit(e)
                                }
                            }}>Edit</button>
                        )}
                    </div>
                </form>
            </>
        )
    }
}