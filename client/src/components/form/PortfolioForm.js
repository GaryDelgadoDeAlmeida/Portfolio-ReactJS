import React from "react";
import Notification from "../parts/Notification";

export default class PortfolioForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            image: "",
            github: "",
            site: "",
            client: "",
            type: "",
            tools: "",
            printResponse: false,
            response: {
                class: "",
                message: "",
            }
        };

        // Instanciate the URL Regex
        this.urlPattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
            '(\\#[-a-z\\d_]*)?$','i'
        );
    }

    handleChange(e) {
        console.log("Hello handleChange");
        let val = e.target.value;
        let name = e.target.name;
        let maxLenght = e.target.maxLenght ? e.target.maxLenght : 255;

        if(name === "title") {
            this.setState({[name]: val});
        } else if(name === "img") {
            // What do we do
        } else if(name === "description") {
            this.setState({[name]: val});
        } else if(name === "github_link") {

            // Test if the string is a URL or empty string to set the state with the value
            if(this.urlPattern.test(val) === true || val === "") {
                this.setState({[name]: val});
            }
        } else if(name === "prod_link") {
            
            // Test if the string is a URL or empty string to set the state with the value
            if(this.urlPattern.test(val) === true || val === "") {
                this.setState({github: val});
            }
        } else if(name === "client") {
            if(val.lenght <= maxLenght) {
                this.setState({[name]: val});
            }
        } else if(name === "app_type") {
            this.setState({type: val});
        } else if(name === "tools") {
            this.setState({[name]: val});
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("Hello handleSubmit");
        console.log(this.state);

        // TODO : Check if all required field have a least a value

        // TODO : Send all data to the API who will save it into the database

        // TODO : Return an answer to the user
        this.setState({
            printResponse: true,
            response: {class: "success", message: "Le folio a bien été ajouté"}
        })
    }

    render() {
        return (
            <>
                {this.state.printResponse && (
                    <>
                        <Notification classname={this.state.response.class} message={this.state.response.message} />
                        <div>&nbsp;</div>
                    </>
                )}
                
                <form className={"portfolio-form"} onSubmit={(e) => this.handleSubmit(e)}>
                    <div className={"form-field"}>
                        <label htmlFor={"title"}>Title</label>
                        <input id={"title"} type={"text"} name={"title"} onChange={(e) => this.handleChange(e)} />
                    </div>

                    <div className={"form-field"}>
                        <label htmlFor={"desc"}>Description</label>
                        <textarea id={"desc"} name={"description"}></textarea>
                    </div>

                    <div className={"form-field"}>
                        <label htmlFor={"img"}>Image</label>
                        <input id={"img"} type={"file"} name={"img"} onChange={(e) => this.handleChange(e)} />
                    </div>

                    <div className={"form-field"}>
                        <label htmlFor={"github"}>GitHub</label>
                        <input id={"github"} type={"url"} name={"github_link"} onChange={(e) => this.handleChange(e)} />
                    </div>
                    
                    <div className={"form-field"}>
                        <label htmlFor={"site"}>Prod Url</label>
                        <input id={"site"} type={"url"} name={"prod_link"} onChange={(e) => this.handleChange(e)} />
                    </div>
                    
                    <div className={"form-field"}>
                        <label htmlFor={"client"}>Client name</label>
                        <input id={"client"} type={"text"} name={"client"} onChange={(e) => this.handleChange(e)} />
                    </div>
                    
                    <div className={"form-field"}>
                        <label htmlFor={"type"}>Type</label>
                        <select id={"type"} name={"app_type"} onChange={(e) => this.handleChange(e)}>
                            <option>Select an app type</option>
                            <option value={"web"}>Web</option>
                            <option value={"api"}>API</option>
                            <option value={"desktop_app"}>Desktop App</option>
                            <option value={"mobile_app"}>Mobile App</option>
                        </select>
                    </div>
                    
                    <div className={"form-field"}>
                        <label htmlFor={"tools"}>Tools</label>
                        <select id={"tools"} name={"tools"} onChange={(e) => this.handleChange(e)} multiple>
                            <option value={""}>&minus; Select a technology used in the project &minus;</option>
                            <option value={"html"}>HTML / HTML5</option>
                            <option value={"css"}>CSS / SASS</option>
                            <option value={"js"}>JS</option>
                            <option value={"php"}>PHP</option>
                            <option value={"mysql"}>SQL / MySQL</option>
                            <option value={"symfony"}>Symfony</option>
                            <option value={"react"}>React</option>
                            <option value={"wordpress"}>Wordpress</option>
                            <option value={"github"}>Git / GitHub</option>
                            <option value={"csharp"}>C#</option>
                            <option value={"net_framework"}>.Net Framework</option>
                        </select>
                    </div>

                    <div className={"form-field"}>
                        <label htmlFor={"version"}>Version</label>
                        <input id={"version"} type={"number"} name={"version"} min={"1"} onChange={(e) => this.handleChange(e)} />
                    </div>

                    <div className={"form-button"}>
                        <button className={"btn btn-primary"} type={"submit"}>Submit</button>
                    </div>
                </form>
            </>
        )
    }
}