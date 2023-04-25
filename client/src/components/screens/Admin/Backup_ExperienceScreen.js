import React from "react";
import Header from "../../parts/Admin/Header";
import Formation from "../../parts/Admin/Formation";
import Experience from "../../parts/Admin/Experience";

export default class AdminExperienceScreen extends React.Component {

    render() {
        return (
            <Header printFooter={true}>
                
                {/* Formation */}
                <div className={"admin-experience"}>
                    <h1>Formation</h1>
                    <Formation />
                </div>

                {/* Experiences */}
                <div className={"admin-experience"}>
                    <h1>Experiences</h1>
                    <Experience />
                </div>
            </Header>
        )
    }
}