import React from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../parts/Admin/Header";

export default function PortfolioSingleScreen() {
    const { portfolioID } = useParams()

    return (
        <Header printFooter={true}>
            <div className={"admin-portfolio"}>
                <div className={"portfolio-wrapper"}>
                    <div className={"portfolio-single"}>
                        <Link to={"/admin/portfolio"}>
                            <button className={"btn btn-primary"}>
                                <span>Return</span>
                            </button>
                        </Link>

                        <div className={"single-folio"}>
                            <h2 className={"page-title"}>Folio title</h2>
                            
                            <div className={"introduction"}>
                                <div className={"hero"}>
                                    <img src={"https://static.codingame.com/assets/background_06.98565cb8.jpg"} alt={""} />
                                </div>
                                <div className={"banner"}>
                                    <div className={"project-infos"}>
                                        <h2 className={"title"}>Project information</h2>

                                        <div className={"infos"}>
                                            <ul>
                                                <li><span>Client :</span> Garry ALMEIDA</li>
                                                <li><span>Project date :</span> 10 September 2021</li>
                                                <li><span>Project url :</span> <a href="https://garry-almeida.com" target="_blank" rel="noreferrer">Portfolio</a></li>
                                                <li><span>Type :</span> Web</li>
                                                <li><span>Outils :</span> HTML, CSS/SASS, JS, JSX, ReactJS, Redux</li>
                                            </ul>
                                        </div>

                                        <div className={"actions"}>
                                            <Link to={"/admin/portfolio/1/edit"}>
                                                <button className={"btn btn-primary"}>
                                                    <img src={"/content/images/svg/pencil-white.svg"} alt={""} />
                                                </button>
                                            </Link>
                                            <Link to={"/admin/portfolio/1/remove"}>
                                                <button className={"btn btn-red"}>
                                                    <img src={"/content/images/svg/trash-white.svg"} alt={""} />
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={"details"}>
                                <h2>Description</h2>
                                <div className={""}>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                                </div>
                            </div>

                            <div className={"skills"}>
                                <h2>Compétences mises en oeuvres</h2>
                                <ul className={"badge-list"}>
                                    <li className={"badge badge-information"}>HTML / CSS</li>
                                    <li className={"badge badge-information"}>JavaScript</li>
                                    <li className={"badge badge-information"}>React / ReactJS</li>
                                    <li className={"badge badge-information"}>Redux</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Header>
    )
}