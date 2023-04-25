import React from "react";

export default class Experience extends React.Component {

    render() {
        return (   
            <div className={"experiences"}>
                
                {/* Experience 1 */}
                <div className={"experience-card"}>
                    <div className={"job"}>
                        Web Developer &minus; <a className={"organisation"} href={"#"} target={"_blank"} rel="noreferrer">Freelance</a>
                    </div>
                    <div className={"date"}>
                        June 2022 to today
                    </div>
                    
                    <div className={"desc"}>
                        {/*  */}
                    </div>
                    
                    <div className={"tools"}>
                        <h3>Outils utilisés :</h3>
                        
                        <div>
                            {/*  */}
                        </div>
                    </div>
                    <div className={"projects"}>
                        <h3>Projets participés :</h3>
                        
                        <div>
                            {/*  */}
                        </div>
                    </div>
                </div>

                {/* Experience 2 */}
                <div className={"experience-card"}>
                    <div className={"job"}>
                        Web Developer &minus; <a className={"organisation"} href="https://creano.paris/" target={"_blank"} rel="noreferrer">Creano</a>
                    </div>
                    <div className={"date"}>
                        July 2021 to today &minus; <span className={"contract-type"}>CDD</span>
                    </div>
                    <div>
                        <ul>
                            <li>Développement d'un script Bash de sauvegarde du répertoire du projet et de sa base de données</li>
                            <li>Développement front end en SASS</li>
                            <li>Blocage Htaccess par adresse IP et redirection forcé vers la page de maintenance (nginx, apache)</li>
                        </ul>
                    </div>
                    <div className={"tools"}>
                        <h3>Outils utilisés :</h3>
                        
                        <div>
                            <span>HTML / CSS / SASS / JS</span>
                            &nbsp;|&nbsp;
                            <span>JQuery</span>
                            &nbsp;|&nbsp;
                            <span>PHP 7 / MYSQL</span>
                            &nbsp;|&nbsp;
                            <span>Wordpress</span>
                            &nbsp;|&nbsp;
                            <span>Bash Linux</span>
                            &nbsp;|&nbsp;
                            <span>Apache Htaccess</span>
                        </div>
                    </div>
                    <div className={"projects"}>
                        <h3>Projets participés :</h3>
                        
                        <div>
                            <a href="#" target={"_blank"} rel="noreferrer">Plugin WP de gestion des entités (Enedis)</a>
                            &nbsp;|&nbsp;
                            <a href="https://datahub-enedis.fr/" target={"_blank"} rel="noreferrer">Datahub (Enedis)</a>
                            &nbsp;|&nbsp;
                            <a href="https://notreaccord.com/" target={"_blank"} rel="noreferrer">Notre Accord</a>
                            &nbsp;|&nbsp;
                            <a href="http://hauteecoledejoaillerie.com/" target={"_blank"} rel="noreferrer">Haute Ecole de Joaillerie</a>
                            &nbsp;|&nbsp;
                            <a href="https://www.diptyqueparis.com/en_eu/c/impossible-bouquets.html" target={"_blank"} rel="noreferrer">Impossible bouquet (Diptyque)</a>
                            &nbsp;|&nbsp;
                            <a href="#" target={"_blank"} rel="noreferrer">Vizio Group</a>
                            &nbsp;|&nbsp;
                            <a href="https://client.creano.paris/marcel" target={"_blank"} rel="noreferrer">Marcel</a>
                        </div>
                    </div>
                </div>

                {/* Experience 3 */}
                <div className={"experience-card"}>
                    <div className={"job"}>
                        App Developer &minus; <a className={"organisation"} href="https://creano.paris/" target={"_blank"} rel="noreferrer">Creano</a>
                    </div>
                    <div className={"date"}>
                        September 2019 to June 2021 &minus; <span className={"contract-type"}>Contrat alternance de professionnalisation</span>
                    </div>
                    <div className={"description"}>
                        <ul>
                            <li>Installation et mise en place du CMS Wordpress</li>
                            <li>Installation et mise en place de projets Symfony</li>
                            <li>Conception d'un plugin Wordpress exclusive pour le backoffice</li>
                            <li>Conception du modèle de données</li>
                            <li>Mise en place du modèle relationnel</li>
                        </ul>
                    </div>
                    <div className={"tools"}>
                        <h3>Outils utilisés :</h3>
                        
                        <div>
                            <span>Apache Htaccess</span>
                            &nbsp;|&nbsp;
                            <span>HTML / CSS / SASS / JS</span>
                            &nbsp;|&nbsp;
                            <span>JQuery</span>
                            &nbsp;|&nbsp;
                            <span>PHP 7 / MYSQL</span>
                            &nbsp;|&nbsp;
                            <span>Symfony</span>
                            &nbsp;|&nbsp;
                            <span>Wordpress</span>
                        </div>
                    </div>
                    <div className={"projects"}>
                        <h3>Projets participés :</h3>
                        
                        <div>
                            <a href="#" target={"_blank"} rel="noreferrer">Plugin WP de gestion des entités (Enedis)</a>
                            &nbsp;|&nbsp;
                            <a href="https://datahub-enedis.fr/" target={"_blank"} rel="noreferrer">Datahub (Enedis)</a>
                            &nbsp;|&nbsp;
                            <a href="https://datahub-enedis.fr/lieux-de-service/" target={"_blank"} rel="noreferrer">Lieux de service (Enedis)</a>
                            &nbsp;|&nbsp;
                            <a href="https://www.thello.com/" target={"_blank"} rel="noreferrer">Thello</a>
                            &nbsp;|&nbsp;
                            <a href="https://hoteldigitallab.com/" target={"_blank"} rel="noreferrer">Hotel Digital Lab</a>
                            &nbsp;|&nbsp;
                            <a href="https://app.manzagol.fr/" target={"_blank"} rel="noreferrer">Manzagol App</a>
                            &nbsp;|&nbsp;
                            <a href="http://hauteecoledejoaillerie.com/" target={"_blank"} rel="noreferrer">Haute Ecole de Joaillerie</a>
                            &nbsp;|&nbsp;
                            <a href="https://www.envol-immo.com/" target={"_blank"} rel="noreferrer">Envol Immobilier</a>
                            &nbsp;|&nbsp;
                            <a href="https://www.atome.fr/" target={"_blank"} rel="noreferrer">Atome</a>
                            &nbsp;|&nbsp;
                            <a href="https://www.diptyqueparis.com/en_eu/c/impossible-bouquets.html" target={"_blank"} rel="noreferrer">Impossible bouquet (Diptyque)</a>
                            &nbsp;|&nbsp;
                            <a href="http://www.coditrans.ci/" target={"_blank"} rel="noreferrer">Coditrans</a>
                        </div>
                    </div>
                </div>

                {/* Experience 4 */}
                <div className={"experience-card"}>
                    <div className={"job"}>
                        Web Developer &minus; <a className={"organisation"} href="https://www.ffgolf.org/" target={"_blank"} rel="noreferrer">Fédération Française de Golf (FFGolf)</a>
                    </div>
                    <div className={"date"}>
                        January 2019 to March 2019 &minus; <span className={"contract-type"}>Stage</span>
                    </div>
                    <div className={"description"}>
                        <span>Développement d'une API JSON sous le framework Symfony 3.4. L'API avait pour but une utilisation interne aux applications de l'entreprise et à terme, une disponibilisation aux clients de l'entreprise</span>
                        <ul>
                            <li>Conception et mise en place du modèle relationnel de la base de données</li>
                            <li>Développement de l'API REST</li>
                            <li>Scrapping d'une API international de golf</li>
                        </ul>
                    </div>
                    <div className={"tools"}>
                        <h3>Outils utilisés :</h3>
                        
                        <div>
                            <span>JSON</span>
                            &nbsp;|&nbsp;
                            <span>PHP 7 / MYSQL</span>
                            &nbsp;|&nbsp;
                            <span>Symfony</span>
                            &nbsp;|&nbsp;
                            <span>Docker</span>
                        </div>
                    </div>
                </div>

                {/* Experience 5 */}
                <div className={"experience-card"}>
                    <div className={"job"}>
                        Web Developer &minus; <a className={"organisation"} href="https://www.ffgolf.org/" target={"_blank"} rel="noreferrer">Fédération Française de Golf (FFGolf)</a>
                    </div>
                    <div className={"date"}>
                        June 2018 to June 2018 &minus; <span className={"contract-type"}>Stage</span>
                    </div>
                    <div className={"description"}>
                        <ul>
                            <li>Installation de l'OS Linux Mint sur son poste de travail</li>
                            <li>Mise en place du poste de travail</li>
                            <li>Installation et configuration des différents outils nécessaires pour dévelepper</li>
                            <li>Installation et configuration du projet Symfony</li>
                            <li>Installation de Docker</li>
                            <li>Développement front et back de fonctionnalités</li>
                        </ul>
                    </div>
                    <div className={"tools"}>
                        <h3>Outils utilisés :</h3>
                        
                        <div>
                            <span>HTML / CSS / JS</span>
                            &nbsp;|&nbsp;
                            <span>PHP 7 / MYSQL</span>
                            &nbsp;|&nbsp;
                            <span>JQuery</span>
                            &nbsp;|&nbsp;
                            <span>Bootstrap</span>
                            &nbsp;|&nbsp;
                            <span>Symfony</span>
                            &nbsp;|&nbsp;
                            <span>Docker</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}