import React from "react";
import LoginForm from "../form/LoginForm";

export default function LoginScreen() {
    
    return (
        <div className={"page-content"}>
            <div className={"page-wrapper"} style={{ "height": "100vh", "display": "flex", "padding": "0" }}>
                <div className={"card"} style={{ "width": "100%" }}>
                    <div className={"card-header"}>
                        <h2 className={"card-title"}>Login</h2>
                    </div>

                    <div className={"card-content"}>
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    )
}