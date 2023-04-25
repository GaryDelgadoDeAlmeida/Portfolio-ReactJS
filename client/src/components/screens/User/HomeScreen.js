import React from "react";
import Header from "../../parts/User/Header";
import LastProject from "../../parts/User/LastProject";
import { Link } from "react-router-dom";
import ContactForm from "../../form/ContactForm";

export default function HomeScreen() {

    return (
        <Header>
            <div className={"page-home"} style={{ backgroundImage: `url("/content/images/background.jpg")`}}>
                <div className={"home-content"}>
                    <h2 className={"sup-title"}>Garry ALMEIDA</h2>
                    <h1 className={"main-title txt-uppercase"}>Développeur web indépendant<br/>PHP / Symfony</h1>
                </div>
            </div>

            {/* Introduction */}
            <div className={"aboutMe-intro"}>
                <div className={"page-wrapper"}>
                    <div className={"intro"}>
                        <div className={"aboutMe-intro-img txt-center"}>
                            <img onContextMenu={(e) => {return false;}} src={"/content/images/me.jpg"} alt="" />
                        </div>
                        <div className={"aboutMe-intro-intro"}>
                            <span>Bonjour ! Je m'appelle</span>
                            <h2>Garry ALMEIDA</h2>
                            <p>Je suis un freelance spécialisé dans Symfony depuis maintenant 2 ans, geek, passionné par la nature et le ciel. Suite à mon expérience professionnelle, j'ai participé dans de nombreux projets web pour le compte de gros client (Enedis, Thello) comme pour des plus petites (Marcel, Clarins, DrTrader). Vous pouvez compter sur moi sur vos exigences de qualité de code et le travail en autonomie comme en équipe.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service */}
            <div className={"page-wrapper"} id={"services"}>
                <div className={"page-header"}>
                    <h3>Mes Services</h3>
                </div>

                <div className={"services"}>
                    <div className={"service"}>
                        <div className={"logo"}>
                            {/* list-check icon */}
                            <img src={"/content/images/svg/desktop-mobile.svg"} alt={"Gestion de projet"} />
                        </div>
                        <h3 className={"title"}>Gestion de projet</h3>
                        <p>Site vitrine, plateforme e-commerce, application mobile</p>
                    </div>
                    
                    <div className={"service"}>
                        <div className={"logo"}>
                            <img src={"/content/images/svg/code.svg"} alt={"Intégration web"} />
                        </div>
                        <h3 className={"title"}>Intégration web</h3>
                        <p>Intégration HTML / CSS respectueuses des standards du web pour un référencement naturel</p>
                    </div>
                    
                    <div className={"service"}>
                        <div className={"logo"}>
                            <img src={"/content/images/svg/code.svg"} alt={"Développements spécifiques"} />
                        </div>
                        <h3 className={"title"}>Développements spécifiques</h3>
                        <p>Des outils adaptés à vos besoins et à votre coeur de métier</p>
                    </div>

                    <div className={"service"}>
                        <div className={"logo"}>
                            <img src={"/content/images/svg/desktop-mobile.svg"} alt={"Responsive Design"} />
                        </div>
                        <h3 className={"title"}>Interface d'administration</h3>
                        <p>Système de gestion de contenu personnalisé</p>
                    </div>

                    <div className={"service"}>
                        <div className={"logo"}>
                            <img src={"/content/images/svg/desktop-mobile.svg"} alt={"Responsive Design"} />
                        </div>
                        <h3 className={"title"}>Responsive Design</h3>
                        <p>Site web compatible tous supports (desktop, tablette et mobile)</p>
                    </div>

                    <div className={"service"}>
                        <div className={"logo"}>
                            <img src={"/content/images/svg/desktop-mobile.svg"} alt={"Responsive Design"} />
                        </div>
                        <h3 className={"title"}>Référencement naturel</h3>
                        <p>Affichage sémantique des informations, des pages propres pour un référencement optimal</p>
                    </div>
                </div>
            </div>

            {/* Skills */}
            <div className={"page-wrapper"} id={"skills"}>
                <div className={"page-header"}>
                    <h3>Compétences</h3>
                </div>

                <div className={"skills-content"}>
                    
                    {/* FrontEnd Skills */}
                    <div className={"skills-card bg-white"}>
                        <div className={"logo"}>
                            <img src={"/content/images/svg/code-white.svg"} alt="" />
                        </div>

                        <div className={"skills"}>
                            <h5 className={"title txt-center"}>Frontend</h5>
                            <ul>
                                <li><i className="fas fa-check"></i><span>HTML / CSS</span></li>
                                <li><i className="fas fa-check"></i><span>JavaScript</span></li>
                                <li><i className="fas fa-check"></i><span>C# WinForm</span></li>
                            </ul>
                        </div>
                    </div>

                    {/* BackEnd Skills */}
                    <div className="skills-card bg-white">
                        <div className="logo">
                            <img src={"/content/images/svg/database.svg"} alt="" />
                        </div>

                        <div className="skills">
                            <h5 className={"title txt-center"}>Backend</h5>
                            <ul>
                                <li><i className="fas fa-check"></i><span>C#</span></li>
                                <li><i className="fas fa-check"></i><span>Java</span></li>
                                <li><i className="fas fa-check"></i><span>PHP7</span></li>
                                <li><i className="fas fa-check"></i><span>SQL / MySQL</span></li>
                                <li><i className="fas fa-check"></i><span>Python</span></li>
                            </ul>
                        </div>
                    </div>

                    {/* Other Skills */}
                    <div className="skills-card bg-white">
                        <div className="logo">
                            <img src={"/content/images/svg/tools.svg"} alt="" />
                        </div>

                        <div className="skills">
                            <h5 className={"title txt-center"}>Other</h5>
                            <ul>
                                <li><i className="fas fa-check"></i><span>Symfony 3/4</span></li>
                                <li><i className="fas fa-check"></i><span>React / React Native</span></li>
                                <li><i className="fas fa-check"></i><span>Wordpress</span></li>
                                <li><i className="fas fa-check"></i><span>.Net Framework</span></li>
                                <li><i className="fas fa-check"></i><span>Entity Framework</span></li>
                                <li><i className="fas fa-check"></i><span>Bunifu Framework</span></li>
                                <li><i className="fas fa-check"></i><span>MongoDB / Redis</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Experience */}
            <div className={"page-wrapper"} id={"formation"}>
                <div className={"page-header"}>
                    <h3>Expériences</h3>
                </div>

                {/* Experience Pro */}
                <div className={"experiences"}>

                    {/* Experience 1 */}
                    <div className={"experience-card"}>
                        <div className={"card-body"}>
                            <span className={"icon"}></span>
                            
                            <div className={"job"}>
                                Web Developer &minus; <a className={"organisation"} href={"#freelance"} target={"_blank"} rel="noreferrer">Freelance</a>
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
                    </div>

                    {/* Experience 2 */}
                    <div className={"experience-card"}>
                        <div className={"card-body"}>
                            <span className={"icon"}></span>

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
                    </div>

                    {/* Experience 3 */}
                    <div className={"experience-card"}>
                        <div className={"card-body"}>
                            <span className={"icon"}></span>

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
                    </div>

                    {/* Experience 4 */}
                    <div className={"experience-card"}>
                        <div className={"card-body"}>
                            <span className={"icon"}></span>
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
                    </div>

                    {/* Experience 5 */}
                    <div className={"experience-card"}>
                        <div className={"card-body"}>
                            <span className={"icon"}></span>
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
                </div>
            </div>

            {/* Latest Project */}
            <LastProject />

            {/* Services Price */}
            <div className={"page-wrapper"} id={"price"}>
                <div className={"page-header"}>
                    <h3>Tarifs</h3>
                </div>

                <div className={"card-list"}>
                    
                    <div className={"card-price"}>
                        <div className={"-type"}>
                            <span className={"-title txt-uppercase"}>Site vitrine personnalisé</span>
                        </div>
                        <div className={"-price"}>
                            <span className={"-small-title"}>A partir de</span>
                            <span><em className={"-title"}>4000</em> € (HT)</span>
                        </div>
                        <div className={"-description"}>
                            <ul className={"list"}>
                                <li>
                                    Développements sur-mesure
                                    <span className={"small-text"}>(entièrement fait à la main)</span>
                                </li>
                                <li>
                                    Charte graphique à partir d'une maquette
                                    <span className={"small-text"}>(Outils : <a href={"https://www.figma.com/"} target={"_blank"}>Figma</a>)</span>
                                </li>
                                <li>Palette de couleur</li>
                                <li>Interface administrateur</li>
                                <li>Site responsive</li>
                                <li>Mise en place du contenu</li>
                                <li>Formulaire de contact</li>
                                <li>Mise en ligne du site</li>
                            </ul>

                            <div className={"links"}>
                                <Link to={"/contact"} className={"btn btn-primary"}>Demander un devis</Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className={"card-price"}>
                        <div className={"-type"}>
                            <span className={"-title txt-uppercase"}>Site ecommerce personnalisé</span>
                        </div>
                        <div className={"-price"}>
                            <span className={"-small-title"}>A partir de</span>
                            <span><em className={"-title"}>5000</em> € (HT)</span>
                        </div>
                        <div className={"-description"}>
                            <ul className={"list"}>
                                <li>
                                    Développements sur-mesure
                                    <span className={"small-text"}>(entièrement fait à la main)</span>
                                </li>
                                <li>
                                    Symfony
                                    <span className={"small-text"}>(outil de développement)</span>
                                </li>
                                <li>
                                    Charte graphique à partir d'une maquette
                                    <span className={"small-text"}>(Outils : <a href={"https://www.figma.com/"} target={"_blank"}>Figma</a>)</span>
                                </li>
                                <li>Palette de couleur</li>
                                <li>Interface administrateur</li>
                                <li>Site responsive</li>
                                <li>Mise en place du contenu</li>
                                <li>Formulaire de contact</li>
                                <li>Mise en ligne du site</li>
                                <li>
                                    Statistiques
                                    <span className={"small-text"}>(visites, produits les plus achetés, etc ...)</span>
                                </li>
                            </ul>
                            
                            <div className={"links"}>
                                <Link to={"/contact"} className={"btn btn-primary"}>Demander un devis</Link>
                            </div>
                        </div>
                    </div>

                    <div className={"d-flex-col"}>
                        <div className={"card-price w-100 h-100"}>
                            <div className={"-type"}>
                                <span className={"-title txt-uppercase"}>Développements spécifiques</span>
                            </div>
                            <div className={"-price"}>
                                <span className={"-small-title txt-uppercase"}>Tarif moyen journalier</span>
                                <span><em className={"-title"}>350</em> € (HT)</span>
                            </div>
                            <div className={"-description"}>
                                <div className={"links"}>
                                    <Link to={"/contact"} className={"btn btn-primary"}>Me contacter</Link>
                                </div>
                            </div>
                        </div>

                        <div className={"card-price w-100 h-100"}>
                            <div className={"-type"}>
                                <span className={"-title txt-uppercase"}>Maintenance applicative</span>
                            </div>
                            <div className={"-price"}>
                                <span className={"-small-title txt-uppercase"}>Tarif à l'année</span>
                                <span><em className={"-title"}>500</em> € (HT)</span>
                            </div>
                            <div className={"-description"}>
                                <ul className={"list"}>
                                    <li>
                                        Mise à jour de sécurité
                                        <span className={"small-text"}>(mise à jours des dépendances techniques)</span>
                                    </li>
                                    <li>Modification du contenu textuel</li>
                                    <li>Modification graphique légère</li>
                                    <li>Correction de bugs</li>
                                </ul>
                                <div className={"links"}>
                                    <Link to={"/contact"} className={"btn btn-primary"}>Me contacter</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact me */}
            <div className={"page-wrapper"} id={"contactme"}>
                <div className={"contact"}>
                    
                    <div className={"page-header"}>
                        <h3>Contactez-moi !</h3>
                    </div>

                    <div className={"contact-info"}>

                        <div className={"contact-card"}>
                            <div className={"contact-info-email"}>
                                <img src={"/content/images/svg/enveloppe.svg"} alt="" />
                                <h3>Email</h3>
                                <p>gary.almeida.work@gmail.com</p>
                            </div>
                        </div>

                        <div className={"contact-card"}>
                            <div className={"contact-info-phone"}>
                                <img src={"/content/images/svg/phone.svg"} alt="" />
                                <h3>Télephone</h3>
                                <p>+33 6 52 07 39 97</p>
                            </div>
                        </div>

                        <div className={"contact-card"}>
                            <div className={"contact-info-addr"}>
                                <img src={"/content/images/svg/map-marker.svg"} alt="" />
                                <h3>Adresse</h3>
                                <address>189 rue vercingétorix, Paris 75014</address>
                            </div>
                        </div>
                    </div>                    

                    <div className={"contact-info-social-link"}>
                        <div className={"social-link"}>
                            <li className={"linkedIn"}>
                                <a href="https://www.linkedin.com/in/garry-almeida-7538b3175/" target="_blank" rel="noreferrer">
                                    <img src={"/content/images/svg/linkedin.svg"} alt="" />
                                </a>
                            </li>
                            <li className={"whatsApp"}>
                                <a href="whatsapp://+33678895032">
                                    <img src={"/content/images/svg/whatsapp.svg"} alt="" />
                                </a>
                            </li>
                            <li className={"gmail"}>
                                <a href="mailto:gary.almeida.work@gmail.com">
                                    <img src={"/content/images/svg/google-plus.svg"} alt="" />
                                </a>
                            </li>
                            <li className={"skype"}>
                                <a href="skype://gary.almeida.sio@gmail.com">
                                    <img src={"/content/images/svg/skype.svg"} alt="" />
                                </a>
                            </li>
                            <li className={"github"}>
                                <a href="https://github.com/GaryDelgadoDeAlmeida" target="_blank" rel="noreferrer">
                                    <img src={"/content/images/svg/github.svg"} alt="" />
                                </a>
                            </li>
                        </div>	
                    </div>

                    {/* Contact Form to send me emails */}
                    <ContactForm />
                </div>
            </div>
        </Header>
    )
}