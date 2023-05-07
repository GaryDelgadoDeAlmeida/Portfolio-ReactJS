import React, { useState } from "react";
import Header from "../../parts/Admin/Header";
import { Link } from "react-router-dom";

export default function PriceScreen() {
    const [verticalTabs, setVerticalTabs] = useState({
        showcase: true,
        ecommerce: false,
        tjm: false,
        maintenance: false
    })
    
    const verticalTabsContent = {
        showcase: {
            price: 4000,
            dutyfree: true,
            currency: "EUR",
            description: [
                "Développements sur-mesure (entièrement fait à la main)",
                "Charte graphique à partir d'une maquette (Outils : Figma)",
                "Palette de couleur",
                "Interface administrateur",
                "Site responsive",
                "Mise en place du contenu",
                "Formulaire de contact",
                "Mise en ligne du site"
            ]
        },
        ecommerce: {
            price: 5000,
            dutyfree: true,
            currency: "EUR",
            description: [
                "Développements sur-mesure (entièrement fait à la main)",
                "Symfony (outil de développement)",
                "Charte graphique à partir d'une maquette (Outils : Figma)",
                "Palette de couleur",
                "Interface administrateur",
                "Site responsive",
                "Mise en place du contenu",
                "Formulaire de contact",
                "Mise en ligne du site",
                "Statistiques (visites, produits les plus achetés, etc ...)"
            ]
        },
        tjm: {
            price: 350,
            dutyfree: true,
            currency: "EUR",
            description: []
        },
        maintenance: {
            price: 500,
            dutyfree: true,
            currency: "EUR",
            description: [
                "Mise à jour de sécurité (mise à jours des dépendances techniques)",
                "Modification du contenu textuel",
                "Modification graphique légère",
                "Correction de bugs"
            ]
        }
    }

    const handleOngletChange = (e, type) => {
        Object.keys(verticalTabs).map((item) => {
            if(item === type) {
                verticalTabs[item] = true
            } else {
                verticalTabs[item] = false
            }
        })

        setVerticalTabs({...verticalTabs})
    }

    return (
        <Header printFooter={true}>
            <div className={"admin-price"}>
                <Link to={"/admin/prices/add"} className={"btn btn-primary"}>
                    <span>+ Add service</span>
                </Link>

                <h2 className={"page-title"}>Services</h2>

                <div className={"vertical-tabs"}>
                    <div className={"-header"}>
                        <button className={`tab ${verticalTabs.showcase ? "active" : ""}`} onClick={(e) => handleOngletChange(e, "showcase")}>
                            Site vitrine
                            {verticalTabs.showcase ? <div className={"icon"}></div> : null}
                        </button>
                        <button className={`tab ${verticalTabs.ecommerce ? "active" : ""}`} onClick={(e) => handleOngletChange(e, "ecommerce")}>
                            Site e-commerce
                            {verticalTabs.ecommerce ? <div className={"icon"}></div> : null}
                        </button>
                        <button className={`tab ${verticalTabs.tjm ? "active" : ""}`} onClick={(e) => handleOngletChange(e, "tjm")}>
                            TJM
                            {verticalTabs.tjm ? <div className={"icon"}></div> : null}
                        </button>
                        <button className={`tab ${verticalTabs.maintenance ? "active" : ""}`} onClick={(e) => handleOngletChange(e, "maintenance")}>
                            Forfait maintenance
                            {verticalTabs.maintenance ? <div className={"icon"}></div> : null}
                        </button>
                    </div>
                    <div className={"-content"}>
                        
                        {/* {Object.entries(verticalTabsContent).map((item, key) => (
                            <div className={`-tab-content ${verticalTabs[key] ? "show" : ""}`}>
                                {item.description !== [] ? (
                                    item.description.map((row, i) => (
                                        <ul>
                                            <li>{row}</li>
                                        </ul>
                                    ))
                                ) : ""}
                            </div>
                        ))} */}
                        
                        {/* showcase */}
                        <div className={`-tab-content ${verticalTabs.showcase ? "show" : ""}`}>
                            <ul>
                                <li>
                                    <span>Développements sur-mesure (entièrement fait à la main)</span>
                                </li>
                                <li>
                                    <span>Charte graphique à partir d'une maquette (Outils : Figma)</span>
                                </li>
                                <li>
                                    <span>Palette de couleur</span>
                                </li>
                                <li>
                                    <span>Interface administrateur</span>
                                </li>
                                <li>
                                    <span>Site responsive</span>
                                </li>
                                <li>
                                    <span>Mise en place du contenu</span>
                                </li>
                                <li>
                                    <span>Formulaire de contact</span>
                                </li>
                                <li>
                                    <span>Mise en ligne du site</span>
                                </li>
                            </ul>

                            <form className={"form"}>
                                <div className={"form-field-inline"}>
                                    <input className={"field"} type={"text"} name={"techname"} placeholder={"Insert a tech name"} onChange={(e) => console.log("Hello onChange")} />
                                    <button className={"btn btn-primary"} type={"submit"}>Submit</button>
                                </div>
                            </form>
                        </div>

                        {/* ecommerce */}
                        <div className={`-tab-content ${verticalTabs.ecommerce ? "show" : ""}`}>
                            <ul>
                                <li>
                                    <span>Développements sur-mesure (entièrement fait à la main)</span>
                                </li>
                                <li>
                                    <span>Symfony (outil de développement)</span>
                                </li>
                                <li>
                                    <span>Charte graphique à partir d'une maquette (Outils : Figma)</span>
                                </li>
                                <li>
                                    <span>Palette de couleur</span>
                                </li>
                                <li>
                                    <span>Interface administrateur</span>
                                </li>
                                <li>
                                    <span>Site responsive</span>
                                </li>
                                <li>
                                    <span>Mise en place du contenu</span>
                                </li>
                                <li>
                                    <span>Formulaire de contact</span>
                                </li>
                                <li>
                                    <span>Mise en ligne du site</span>
                                </li>
                                <li>
                                    <span>Statistiques (visites, produits les plus achetés, etc ...)</span>
                                </li>
                            </ul>
                        </div>
                        
                        {/* tjm */}
                        <div className={`-tab-content ${verticalTabs.tjm ? "show" : ""}`}></div>
                        
                        {/* maintenance */}
                        <div className={`-tab-content ${verticalTabs.maintenance ? "show" : ""}`}>
                            <ul>
                                <li>
                                    <span>Mise à jour de sécurité (mise à jours des dépendances techniques)</span>
                                </li>
                                <li>
                                    <span>Modification du contenu textuel</span>
                                </li>
                                <li>
                                    <span>Modification graphique légère</span>
                                </li>
                                <li>
                                    <span>Correction de bugs</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Header>
    )
}