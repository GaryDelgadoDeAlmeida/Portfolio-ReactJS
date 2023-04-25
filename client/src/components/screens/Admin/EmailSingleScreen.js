import React from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../parts/Admin/Header";

export default function EmailSingleScreen() {
    const { emailID } = useParams()

    const handleRemove = (e) => {
        console.log("Hello handleRemove")
    }

    return (
        <Header printFooter={true}>
            <div className={"admin-email-single"}>
                <Link to={"/admin/email"}>
                    <button className={"btn btn-primary"}>
                        <span>Return</span>
                    </button>
                </Link>
                
                <div className={"email-single"}>
                    <div className={"sender"}>
                        <div className={"avatar"}>
                            <img src={"/content/images/avatar.png"} alt={"avatar"} />
                        </div>
                        
                        <div className={"info"}>
                            <span><b>Sender name</b> (sender@gmail.com)</span>
                            <span>01/06/2022 à 14:19</span>
                        </div>

                        <div className={"actions"}>
                            <button onClick={(e) => handleRemove(e)}>
                                <img src={"/content/images/svg/trash.svg"} alt="" />
                            </button>
                        </div>
                    </div>
                    <div className={"object"}>
                        <h3>Object : job offer</h3>
                    </div>
                    <div className={"content"}>
                        <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>
                    </div>
                </div>
            </div>
        </Header>
    )
}