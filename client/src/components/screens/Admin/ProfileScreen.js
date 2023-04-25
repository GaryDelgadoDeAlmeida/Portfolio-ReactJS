import React from "react";
import Header from "../../parts/Admin/Header";
import Profile from "../../parts/Admin/Profile";

export default class ProfileScreen extends React.Component {

    render() {
        return (
            <Header printFooter={true}>
                <div className={"admin-profile"}>
                    <Profile />
                </div>
            </Header>
        )
    }
}