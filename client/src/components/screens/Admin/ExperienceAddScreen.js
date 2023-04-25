import React from "react";
import { Link } from "react-router-dom";
import Header from "../../parts/Admin/Header";
import ExperienceForm from "../../form/ExperienceForm";

export default function ExperienceAddScreen() {

    return (
        <Header printFooter={true}>
            <div className={"admin-experience"}>
                <div className={"experience-wrapper"}>
                    <Link to={"/admin/experiences"}>
                        <button className={"btn btn-primary"}>Return</button>
                    </Link>

                    <div className={"experience-add"}>
                        <ExperienceForm />
                    </div>
                </div>
            </div>
        </Header>
    )
}