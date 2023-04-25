import React from "react";
import Header from "../../parts/Admin/Header";
import Skills from "../../parts/Admin/Skills";

export default class SkillsScreen extends React.Component {

    render() {
        return (
            <Header printFooter={true}>
                <div className={"admin-skills"}>
                    <Skills />
                </div>
            </Header>
        )
    }
}