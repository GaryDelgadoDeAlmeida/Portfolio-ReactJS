import React from "react";

export default class Skills extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            printFrontend: true,
            printBackend: false,
            printTools: false,
            frontend: [
                "HTML / CSS / SASS",
                "JavaScript"
            ],
            backend: [
                "SQL / MYSQL",
                "PHP",
                "C# / CSharp",
                "Java",
                "Python"
            ],
            tools: [
                "Git / GitHub",
                "Symfony",
                "React",
                "Electron",
                "Wordpress",
                ".NET Framework",
                "Entity Framework",
                "MongoDB / Redis",
                "Postman"
            ]
        }
    }

    /**
     * Get a specific parent by the class name
     * 
     * @param {*} element 
     * @param {*} target 
     * @returns 
     */
    findSpecificParent(element, target) {
        var els = "";
        
        while (element) {
            if( [null, undefined].indexOf(element.className) === -1 ) {
                if(element.className === target) {
                    els = element;
                    break;
                }
            }

            element = element.parentNode;
        }

        return els;
    }
    
    /**
     * Remove an element from an array
     * 
     * @param {*} item 
     * @param {*} array 
     * @returns 
     */
    removeItem(item, array) {
        let index = array.indexOf(item);
        
        if(index !== -1) {
            array.splice(index, 1)
        }

        return array
    }

    handleClick(e) {
        let onglet = e.target.getAttribute("data-onglet");

        if(onglet === "frontend") {
            this.setState({
                printFrontend: true,
                printBackend: false,
                printTools: false
            })
        } else if(onglet === "backend") {
            this.setState({
                printFrontend: false,
                printBackend: true,
                printTools: false
            })
        } else if(onglet === "tools") {
            this.setState({
                printFrontend: false,
                printBackend: false,
                printTools: true
            })
        } else if(onglet === "profile") {
            this.setState({
                printFrontend: false,
                printBackend: false,
                printTools: false
            })
        }
    }

    handleDeleteClick(event, type) {
        let parent = this.findSpecificParent(event.target, "skill-item");
        let itemChild = parent.children[0].innerText;

        if(type === "frontend") {
            this.setState({
                [type]: this.removeItem(itemChild, this.state.frontend)
            })
        } else if(type === "backend") {
            this.setState({
                [type]: this.removeItem(itemChild, this.state.backend)
            })
        } else if(type === "tools") {
            this.setState({
                [type]: this.removeItem(itemChild, this.state.tools)
            })
        }
    }

    handleSubmit(e, type) {
        e.preventDefault(); 
        console.log("Hello submit frontend")
    }

    render() {
        return (
            <div className={"skills"}>
                <div className={"skills-onglet"}>
                    <ul>
                        <li className={this.state.printFrontend ? "active" : ""} data-onglet={"frontend"} onClick={(e) => this.handleClick(e)}>Frontend</li>
                        <li className={this.state.printBackend ? "active" : ""} data-onglet={"backend"} onClick={(e) => this.handleClick(e)}>Backend</li>
                        <li className={this.state.printTools ? "active" : ""} data-onglet={"tools"} onClick={(e) => this.handleClick(e)}>Tools</li>
                    </ul>
                </div>
                
                <div className={"skills-box"}>

                    {this.state.printFrontend && (
                        <div className={"skill-wrapper"}>
                            <div className={"skill-card"}>
                                {this.state.frontend.map((item, i) => (
                                    <div key={i} className={"skill-item"}>
                                        <div className={"item"}>
                                            <span>{item}</span>
                                        </div>
                                        <div className={"item-action"} onClick={(e) => this.handleDeleteClick(e, "frontend")}>
                                            <img src={"/content/images/svg/trash.svg"} alt={""} />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className={"form"}>
                                <form onSubmit={(e) => this.handleSubmit(e, "frontend")} action={"POST"}>
                                    <input type={"text"} name={"techname"} placeholder={"Insert a tech name"} onChange={(e) => console.log("Hello onChange")} />
                                    <button className={"btn btn-primary"} type={"submit"}>Submit</button>
                                </form>
                            </div>
                        </div>
                    )}
                    
                    {this.state.printBackend && (
                        <div className={"skill-wrapper"}>
                            <div className={"skill-card"}>
                                {this.state.backend.map((item, i) => (
                                    <div key={i} className={"skill-item"}>
                                        <div className={"item"}>
                                            <span>{item}</span>
                                        </div>
                                        <div className={"item-action"} onClick={(e) => this.handleDeleteClick(e, "backend")}>
                                            <img src={"/content/images/svg/trash.svg"} alt={""} onChange={(e) => console.log("Hello onChange")} />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className={"form"}>
                                <form onSubmit={(e) => this.handleSubmit(e, "frontend")} action={"POST"}>
                                    <input type={"text"} name={"techname"} placeholder={"Insert a tech name"} onChange={(e) => console.log("Hello onChange")} />
                                    <button className={"btn btn-primary"} type={"submit"}>Submit</button>
                                </form>
                            </div>
                        </div>
                    )}
                    
                    {this.state.printTools && (
                        <div className={"skill-wrapper"}>
                            <div className={"skill-card"}>
                                {this.state.tools.map((item, i) => (
                                    <div key={i} className={"skill-item"}>
                                        <div className="item">
                                            <span>{item}</span>
                                        </div>
                                        
                                        <div className={"item-action"} onClick={(e) => this.handleDeleteClick(e, "tools")}>
                                            <img src={"/content/images/svg/trash.svg"} alt={""} />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className={"form"}>
                                <form onSubmit={(e) => this.handleSubmit(e, "frontend")} action={"POST"}>
                                    <input type={"text"} name={"techname"} placeholder={"Insert a tech name"} onChange={(e) => console.log("Hello onChange")} />
                                    <button className={"btn btn-primary"} type={"submit"}>Submit</button>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}