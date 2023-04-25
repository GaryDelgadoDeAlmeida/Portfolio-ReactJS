import React from "react";
import { Navigate } from "react-router-dom";

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isConnected: false,
            login: {
                email: "",
                password: ""
            }
        };
    }

    handleChange(e) {
        this.setState({login: {[e.target.name]: e.target.value}});
    }

    handleSubmit(e) {
        e.preventDefault();

        if(this.state.login.email !== "" && this.state.login.password !== "") {
            this.setState({isConnected: true});
        }
    }
    
    render() {
        return (
            <>
                {this.state.isConnected && (
                    <Navigate to={"/admin"} />
                )}
                
                <form className={"login-form"} onSubmit={(e) => this.handleSubmit(e)}>
                    <div className={"form-field"}>
                        <label htmlFor={"email"}>Identifiant</label>
                        <input type="email" name="email" id="email" onChange={(e) => this.handleChange(e)} />
                    </div>
                    <div className={"form-field"}>
                        <label htmlFor={"password"}>Password</label>
                        <input type="password" name="password" id="password" onChange={(e) => this.handleChange(e)} />
                    </div>

                    <div className={"form-button"}>
                        <button className={"btn btn-outline-green"} type={"submit"}>Valider</button>
                    </div>
                </form>
            </>
        )
    }
}