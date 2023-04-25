import React from "react";

export default class Formation extends React.Component {

    render() {
        return (
            <div className={"experiences"}>
                
                {/* Formation 1 */}
                <div className={"experience-card"}>
                    <div className={"degree"}>
                        Developpeur fullstack (Bac +4) &minus; <a className={"school"} href="https://3wa.fr/" target={"_blank"} rel={"noreferrer"}>3W Academy</a>
                    </div>
                    <div className={"date"}>
                        September 2019 to June 2021
                    </div>
                </div>

                {/* Formation 2 */}
                <div className={"experience-card"}>
                    <div className={"degree"}>
                        BTS Services informatiques aux Organisations spécilité SLAM (Bac +2) &minus; <a className={"school"} href="https://www.lyceevoillaume.fr/" target={"_blank"} rel={"noreferrer"}>Lycée Voillaume</a>
                    </div>
                    <div className={"date"}>
                        September 2017 to July 2019
                    </div>
                </div>

                {/* Formation 3 */}
                <div className={"experience-card"}>
                    <div className={"degree"}>
                        Bac Sciences et Technologies de l'Industrie et du Développement Durable spécilité SIN &minus; <a className={"school"} href="https://www.ldmraspail.fr/" target={"_blank"} rel={"noreferrer"}>Lycée Raspail</a>
                    </div>
                    <div className={"date"}>
                        September 2015 to July 2017
                    </div>
                </div>
            </div>
        )
    }
}