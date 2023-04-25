import React, { useState } from "react";
import Notification from "../parts/Notification";

export default function ContactForm() {

    const [notifClass, setNotifClass] = useState("")
    const [notifMessage, setNotifMessage] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [captchat, setCaptchat] = useState({
        question: "Combien fait 3 x 1.5 ?",
        answer: 4.5,
        value: ""
    })

    const setResponse = (className, message) => {
        setNotifClass(className)
        setNotifMessage(message)
    }

    const handleChange = (e, fieldName) => {
        const fieldValue = e.target.value
        setResponse("", "")

        switch(fieldName) {
            case "name":
                if(fieldValue.length <= 100) {
                    setName(fieldValue)
                }
                break
            
            case "email":
                if(fieldValue.length <= 255) {
                    setEmail(fieldValue)
                }
                break
            
            case "subject":
                if(fieldValue.length <= 100) {
                    setSubject(fieldValue)
                }
                break

            case "message":
                if(fieldValue.length <= 1000) {
                    setMessage(fieldValue)
                }
                break

            case "captchat":
                setCaptchat({...captchat, value: fieldValue})
                break

            default:
                break
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(captchat.value !== "" && !isNaN(captchat.value) && parseFloat(captchat.value) === captchat.answer) {
            setResponse("success", "Votre mail a bien été envoyé, je vous remercie d'avoir pris contact avec moi.")
        } else {
            setResponse("danger", "Votre mail n'a pas pu être envoyé pour suspission de spam. S'il s'agit d'une erreur, je vous recommande d'utiliser votre propre boîte mail.")
        }
    }

    return (
        <>
            {/*  Message d'après l'envoi */}
            {notifClass && notifMessage && (
                <>
                    <Notification classname={notifClass} message={notifMessage} />
                    <div>&nbsp;</div>
                </>
            )}

            {/* Formulaire de contact par email */}
            <form className={"form contact-form"} autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
                
                <div className={"form-text"}>
                    <input 
                        type={"text"} 
                        value={name} 
                        placeholder={"Votre Nom"} 
                        maxLength={100}
                        onChange={(event) => handleChange(event, "name")} 
                        required 
                    />
                </div>
                
                <div className={"form-text"}>
                    <input 
                        type={"email"} 
                        placeholder={"Votre Email"} 
                        value={email} 
                        maxLength={255}
                        onChange={(event) => handleChange(event, "email")} 
                        required 
                    />
                </div>					
                
                <div className={"form-text"}>
                    <input 
                        type={"text"} 
                        placeholder={"Sujet"} 
                        value={subject} 
                        maxLength={100}
                        onChange={(event) => handleChange(event, "subject")} 
                        required 
                    />
                </div>
                
                <div className={"form-text"}>
                    <textarea 
                        className={"h-180px"} 
                        placeholder={"Message"} 
                        value={message} 
                        maxLength={1000}
                        onChange={(event) => handleChange(event, "message")} 
                        required
                    />
                </div>

                <div className={"form-field"}>
                    <label htmlFor={"captchat"}>{captchat.question}</label>
                    <input 
                        id={"captchat"}
                        type={"text"} 
                        value={captchat.value}
                        onChange={(e) => handleChange(e, "captchat")} 
                        required
                    />
                </div>
                
                <div className={"form-button txt-center"}>
                    <button className={"btn btn-green"} type={"submit"}>Valider</button>
                </div>
            </form>
        </>
    )
}