import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../parts/User/Header";
import { useFetchAPI } from "../../hook/index";

export default function SinglePortfolioScreen() {
    const { portfolioID } = useParams()
    const {entities: portfolio, load, loading } = useFetchAPI(`/api/portfolio/${portfolioID}`)

    useEffect(() => {
        load()
    }, [])

    console.log(portfolio)
    
    return (
        <Header>
            <section className={"portfolio"}>
                <div className={"wrapper"}>
                    <header className={"section-header"}>
                        <h3>{portfolio.name}</h3>
                    </header>
                    
                    <div className={"single-portfolio"}>
                        <Link className={"btn btn-primary"} to={"/portfolio"}>Return</Link>
                        <div>
                            <img width={"100%"} src={portfolio.img_path} alt={""} />
                        </div>
                        <div className={"description"}>
                            <h3>Description</h3>
                            <p>{portfolio.description}</p>
                        </div>
                        <div className={"infos"}>
                            <h3>Infos</h3>
                            <li>Symfony</li>
                        </div>
                    </div>
                </div>
            </section>
        </Header>
    )
}