import React from "react";
import Header from "../../parts/Admin/Header";
import PriceForm from "../../form/PriceForm";
import { Link } from "react-router-dom";

export default function PriceAddScreen() {

    return (
        <Header printFooter={true}>
            <Link to={"/admin/prices"} className={"btn btn-primary"}>Return</Link>

            <div className={"card bg-white"}>
                <PriceForm />
            </div>
        </Header>
    )
}