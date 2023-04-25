import React from "react";
import * as portfolio from "../../../datas/portfolio.json";
import Notification from "../Notification"
import { Link } from "react-router-dom";
import { findChildren } from "../../hook";

export default class LastProject extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            portfolioJson: []
        };
    }

    async componentDidMount() {
        const response = await portfolio.default.reverse().slice(0, 6);
        this.setState({portfolioJson: response});
    }

    handleMouseEnter(e) {
        let child = findChildren(e.target, undefined, "IMG")
        if(child) {
            child.src = `${window.location.origin}/content/images/svg/arrow-right.svg`
        }
    }

    handleMouseLeave(e) {
        let child = findChildren(e.target, undefined, "IMG")
        if(child) {
            child.src = `${window.location.origin}/content/images/svg/arrow-right-white.svg`
        }
    }

    render() {
        return (
            <div className={"page-wrapper"} id={"portfolio"}>
                <div className={"page-header"}>
                    <h3>Mes projets</h3>
                </div>

                {this.state.portfolioJson.length > 0 ? (
                    <>
                        <div className={"overlay-row"}>
                            {this.state.portfolioJson.map(function(oneElement, i) {
                                return (
                                    <div key={i} className={"overlay-card"}>
                                        <div className={"overlay-image"}>
                                            <a href={oneElement.link} target="_blank" rel="noreferrer">
                                                <img className={"image"} src={oneElement.image} alt={oneElement.title}/>
                                                <div className={"hover"}>
                                                    <div className={"text"}>
                                                        <h3 className={"project-title"}>{oneElement.title}</h3>
                                                        <span className={"project-small-text"}>{oneElement.type}</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className={"page-button"}>
                            <Link 
                                to={"/portfolio"} 
                                className={"btn -inline-flex btn-primary"} 
                                onMouseEnter={(e) => this.handleMouseEnter(e)}
                                onMouseLeave={(e) => this.handleMouseLeave(e)}
                            >
                                <span>Tout voir</span>
                                <img src={`${window.location.origin}/content/images/svg/arrow-right-white.svg`} alt={""} />
                            </Link>
                        </div>
                    </>
                ) : <Notification classname="information" message={"Cette section est pour le moment vide. Je vous invite vivement à vous dirigez vers mon espace GitHub"} />}
            </div>
        )
    }
}