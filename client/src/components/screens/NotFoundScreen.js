import React from "react";
import Header from "../parts/User/Header";

export default function NotFoundScreen() {

    return (
        <Header>
            <div className={"page-wrapper"}>
                <div className={"not-found"}>
                    <h2>Page not found</h2>
                    <p>An error has been found when you tried to access to an inexisting page.</p>
                </div>
            </div>
        </Header>
    )
}