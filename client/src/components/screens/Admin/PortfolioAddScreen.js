import React from "react";
import { Link } from "react-router-dom";
import Header from "../../parts/Admin/Header";
import PortfolioForm from "../../form/PortfolioForm";

export default class PortfolioAddScreen extends React.Component {

    render() {
        return (
            <Header printFooter={true}>
                <div className={"admin-portfolio"}>
                    <Link to={"/admin/portfolio"}>
                        <button className={"btn btn-primary"}>Return</button>
                    </Link>
                    
                    <h1>Add a folio</h1>

                    <div className={"portfolio-add"}>
                        <PortfolioForm />
                    </div>
                </div>
            </Header>
        )
    }
}