import React from "react";
import { Link } from "react-router-dom";
import * as portfolio from "../../../datas/portfolio.json";
import Header from "../../parts/Admin/Header";

export default class PortfolioScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            portfolioJson: portfolio.default.reverse(),
        };
    }

    // async componentDidMount() {
    //     this.setState({portfolioJson: await portfolio.default.reverse()});
    // }

    render() {
        return (
            <Header printFooter={true}>
                <div className={"admin-portfolio"}>
                    <Link to={"/admin/portfolio/add"}>
                        <button className={"btn btn-green"}>Add a work</button>
                    </Link>

                    <h1>Portfolio</h1>
                    
                    <div className={"portfolio-wrapper"}>
                        {this.state.portfolioJson.length > 0 && (
                            <div className={"overlay-row"}>
                                {this.state.portfolioJson.map((element, i) => {
                                    return (
                                        <div className={"overlay-card"} key={i}>
                                            <div className={"overlay-image"}>
                                                <Link to={`/admin/portfolio/${i + 1}`}>
                                                    <img className={"image"} src={element.image} alt={element.title}/>
                                                    <div className={"hover"}>
                                                        <div className={"text"}>
                                                            <h3 className={"project-title"}>{element.title}</h3>
                                                            <span className={"project-small-text"}>{element.type}</span>
                                                        </div>
                                                        {/* <div className={"tools"}>
                                                            {element.tech.map((tool, j) => {
                                                                return (
                                                                    <span key={j}>{tool}</span>
                                                                )
                                                            })}
                                                        </div> */}
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        )}

                        <div className={"pagination"}>
                            <div>
                                <Link to={"/"}>&laquo;</Link>
                            </div>

                            <div>
                                <Link to={"/"}>&lt;</Link>
                            </div>

                            <div>
                                <Link to={"/"}>1</Link>
                            </div>
                            
                            <div className={"current-page"}>
                                <Link to={"/"}>2</Link>
                            </div>
                            
                            <div>
                                <Link to={"/"}>3</Link>
                            </div>
                            
                            <div>
                                <Link to={"/"}>&gt;</Link>
                            </div>
                            
                            <div>
                                <Link to={"/"}>&raquo;</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Header>
        )
    }
}