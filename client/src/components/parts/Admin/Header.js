import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {

    const handleLogout = (e) => {
        e.preventDefault()
        console.log("Hi handleLogout")
    }

    return (
        <section className={"admin-section"}>
            <div className={"sidebar"}>
                <div className={"sidebar-header"}>
                    <div className={"sidebar-header-logo"}>
                        {/* <img src={"/content/images/logo-blue.png"} alt={""} /> */}
                        <img src={"/content/images/logo512.png"} alt={""} />
                    </div>
                </div>

                <div className={"sidebar-menu"}>
                    <div className={"sidebar-menu-wrapper"}>
                        <li className={"sidebar-menu-link"}>
                            <span><Link to={"/admin"}>Home</Link></span>
                        </li>
                        <li className={"sidebar-menu-link"}>
                            <span><Link to={"/admin/about"}>Profile</Link></span>
                        </li>
                        <li className={"sidebar-menu-link"}>
                            <span><Link to={"/admin/skills"}>Skills</Link></span>
                        </li>
                        <li className={"sidebar-menu-link"}>
                            <span><Link to={"/admin/portfolio"}>Portfolio</Link></span>
                        </li>
                        <li className={"sidebar-menu-link"}>
                            <span><Link to={"/admin/experiences"}>Experiences</Link></span>
                        </li>
                        <li className={"sidebar-menu-link"}>
                            <span><Link to={"/admin/witnesses"}>Witnesses</Link></span>
                        </li>
                        <li className={"sidebar-menu-link"}>
                            <span><Link to={"/admin/prices"}>Prices</Link></span>
                        </li>
                        <li className={"sidebar-menu-link"}>
                            <span><Link to={"/admin/email"}>Inbox</Link></span>
                        </li>
                        <li className={"sidebar-menu-link"}>
                            <span><Link to={"/logout"} onClick={(e) => handleLogout(e)}>Logout</Link></span>
                        </li>
                    </div>
                </div>
            </div>

            <div className={"admin-content"}>
                <div className={"admin-header"}>
                    <div className={"admin-horizontal-header"}>
                        <input id={"dropdown-menu-input"} type={"checkbox"} hidden />

                        <label className={"burger-menu-btn"} htmlFor={"dropdown-menu-input"}>
                            <img src={`${window.location.origin}/content/images/svg/bars.svg`} alt={""} />
                        </label>
                        
                        <div className={"horizontal-header-dropdown"}>
                            <label className={"close-menu-btn"} htmlFor={"dropdown-menu-input"}>
                                <img src={`${window.location.origin}/content/images/svg/close.svg`} alt={""} />
                            </label>

                            <ul className={"-items"}>
                                <li className={"-item"}><Link to={"/admin"}>Home</Link></li>
                                <li className={"-item"}><Link to={"/admin/about"}>About</Link></li>
                                <li className={"-item"}><Link to={"/admin/skills"}>Skills</Link></li>
                                <li className={"-item"}><Link to={"/admin/portfolio"}>Portfolio</Link></li>
                                <li className={"-item"}><Link to={"/admin/experiences"}>Experiences</Link></li>
                                <li className={"-item"}><Link to={"/admin/witnesses"}>Witnesses</Link></li>
                                <li className={"-item"}><Link to={"/admin/prices"}>Prices</Link></li>
                                <li className={"-item"}><Link to={"/admin/email"}>Inbox</Link></li>
                                <li className={"-item"}>
                                    <button className={"btn btn-red"} onClick={(e) => handleLogout(e)}>
                                        <span>Logout</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={"admin-wrapper"}>
                    <div className={"admin-body"}>
                        {props.children}
                    </div>
                </div>
                
                {props.printFooter && (
                    <div className={"admin-footer"}>
                        <div className={"footer-copyright"}>
                            <p>
                                Copyright &copy; 2019-{(new Date()).getFullYear()} &minus; <Link to={"/"} className={"bold-green"}>Garry ALMEIDA</Link><br/>
                                All Rights Reserved / Tous Droits Réservés
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}