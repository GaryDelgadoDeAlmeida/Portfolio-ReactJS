import React from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../parts/Admin/Header";
import PortfolioForm from "../../form/PortfolioForm";

export default function PortfolioSingleEditScreen() {
    const { portfolioID } = useParams()

    return (
        <Header printFooter={true}>
            <div className={"admin-portfolio"}>
                <div className={"portfolio-wrapper"}>
                    <Link to={"/admin/portfolio/1"}>
                        <button className={"btn btn-primary"}>Return</button>
                    </Link>

                    <div className={"portfolio-edit"}>
                        <PortfolioForm />
                    </div>
                </div>
            </div>
        </Header>
    )
}