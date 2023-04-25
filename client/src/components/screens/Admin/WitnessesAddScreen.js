import React from "react";
import { Link } from "react-router-dom";
import Header from "../../parts/Admin/Header";
import WitnessForm from "../../form/WitnessForm";

export default class WitnessesAddScreen extends React.Component {

    render() {
        return (
            <Header printFooter={true}>
                <div className={"admin-witnesses"}>
                    <Link to={"/admin/witnesses"}>
                        <button className={"btn btn-primary"}>Return</button>
                    </Link>

                    <div className={""}>
                        <WitnessForm />
                    </div>
                </div>
            </Header>
        )
    }
}