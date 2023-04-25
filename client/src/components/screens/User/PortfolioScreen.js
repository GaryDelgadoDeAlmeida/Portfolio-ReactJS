import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFetchAPI } from "../../hook";
import Notification from "../../parts/Notification";
import Header from "../../parts/User/Header";

export default function PortfolioScreen() {
    const {entities: portfolioJson, load, loading } = useFetchAPI("/api/portfolio")

    useEffect(() => {
        load()
    }, [])

    const handleClick = (e) => {
        e.preventDefault()
        let offset = [null, undefined].indexOf(e.target.offset) !== -1 ? 1 : e.target.offset

        load(offset)
    }

    return (
        <Header>
            <div className={"page-wrapper"}>
                <div className={"page-header"}>
                    <h3>Mes projets</h3>
                </div>
                    
                {!loading ? (
                    portfolioJson.length > 0 ? (
                        <>
                            <div className={"overlay-row"}>
                                {portfolioJson.map(function(oneElement, i) {
                                    return (
                                        <div className={"overlay-card"} key={i}>
                                            <div className={"overlay-image"}>
                                                <Link to={`/portfolio/${oneElement.id}`}>
                                                    <img className={"image"} src={oneElement.img_path} alt={oneElement.name}/>
                                                    <div className={"hover"}>
                                                        <div className={"text"}>
                                                            <h3 className={"project-title"}>{oneElement.name}</h3>
                                                            <span className={"project-small-text"}>{oneElement.type}</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            
                            <div className={"pagination"}>
                                <div>
                                    <Link to={"/portfolio"} onClick={(e) => handleClick(e)}>
                                        <img src={""} alt="" />
                                    </Link>
                                </div>
                                
                                <div>
                                    <Link to={"/portfolio"} offset={1} onClick={(e) => handleClick(e)}>1</Link>
                                </div>
                                
                                <div className={"current-page"}>
                                    <span>2</span>
                                </div>
                                
                                <div>
                                    <Link to={"/portfolio"} offset={3} onClick={(e) => handleClick(e)}>3</Link>
                                </div>
                                
                                <div>
                                    <Link to={"/portfolio"} offset={3} onClick={(e) => handleClick(e)}>
                                        <img src={""} alt="" />
                                    </Link>
                                </div>
                            </div>
                        </>
                    ) : (
                        <Notification classname={"information"} message={"Cette section est pour le moment vide. Je vous invite vivement à vous dirigez vers mon espace GitHub"} />
                    )
                ) : (
                    <Notification classname={"information"} message={"Loading ..."} />
                )}
            </div>
        </Header>
    )
}