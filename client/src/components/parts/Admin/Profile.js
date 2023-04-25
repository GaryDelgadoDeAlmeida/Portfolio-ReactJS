import React from "react";
import ProfileForm from "../../form/ProfileForm";
import UpdatePasswordForm from "../../form/UpdatePasswordForm";

export default class Profile extends React.Component {

    render() {
        return (
            <div className={"profile"}>
                <div className={"profile-image"}>
                    <div className={"profile-item"}>
                        <label htmlFor={""}>
                            <img src={"/content/images/me.jpg"} alt={""} />
                        </label>
                        <p>
                            <span className={"firstname"}>Garry</span>
                            <span>&nbsp;</span>
                            <span className={"lastname"}>DE ALMEIDA</span>
                        </p>
                    </div>

                    <div className={"profile-item"}>
                        <UpdatePasswordForm />
                    </div>
                </div>

                <div className={"profile-infos"}>
                    <div className={"profile-item"}>
                        <ProfileForm identity={{
                            firstname: "Garry",
                            lastname: "DE ALMEIDA",
                            email: "gary.almeida.work@gmail.com",
                            phone: "0652073997",
                            address: "189 Rue Vercingétorix",
                            zipCode: "75014",
                            country: "Paris",
                            description: "Je suis un jeune développeur très friand de savoir et de connaissance, de nouvelle technique de developpement et de l'apprentissage des nouvelles technologies."
                        }} />
                    </div>
                </div>
            </div>
        )
    }
}