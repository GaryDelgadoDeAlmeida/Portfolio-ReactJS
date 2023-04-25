import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {

    render() {
        return (
            <>
                <header className={"header-navigation bg-black"}>
                    <nav className={"header-menu"}>
                        <div className={"header-menu-brand"}>
                            <Link to={"/"}>Garry ALMEIDA</Link>
                        </div>
                        <div className={"header-menu-links"}>
                            <ul>
                                <Link to={"/"}>Accueil</Link>
                                <Link to={"/#services"}>Services</Link>
                                <Link to={"/#skills"}>Compétences</Link>
                                <Link to={"/#formation"}>Expériences</Link>
                                <Link to={"/#portfolio"}>PortFolio</Link>
                                <Link to={"/#price"}>Tarifs</Link>
                                <Link to={"/#contactme"}>Contact</Link>
                            </ul>
                        </div>

                        <div className={"header-menu-mobile"}>
                            <label htmlFor={"burger-menu"} className={"show-menu-btn"}>
                                <img src={"/content/images/svg/bars.svg"} alt={""} />
                            </label>
                            
                            <input type="checkbox" name="burger-menu" className="burger-menu" id="burger-menu" />
                            
                            <div className={"header-menu-links-mobile"}>
                                <label htmlFor={"burger-menu"} className={"hide-menu-btn"}>
                                    <img src={"/content/images/svg/close.svg"} alt="" />
                                </label>
                                
                                <div className={"links-mobile-items"}>
                                    <ul>
                                        <li><Link to={"/"}>Accueil</Link></li>
                                        <li><Link to={"/#services"}>Services</Link></li>
                                        <li><Link to={"/#skills"}>Compétences</Link></li>
                                        <li><Link to={"/#formation"}>Expériences</Link></li>
                                        <li><Link to={"/#portfolio"}>PortFolio</Link></li>
                                        <li><Link to={"/#price"}>Tarifs</Link></li>
                                        <li><Link to={"/#contactme"}>Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>

                <div className={"page-content"}>
                    {this.props.children}
                </div>

                <footer className={"footer bg-black"}>
                    <div className={"copyright"}>
                        <p>
                            Copyright &copy; 2019-{(new Date()).getFullYear()} &minus; <Link to={"/"} className={"bold-green"}>Garry ALMEIDA</Link><br/>
                            All Rights Reserved / Tous Droits Réservés
                        </p>
                    </div>
                </footer>
            </>
        )
    }
}