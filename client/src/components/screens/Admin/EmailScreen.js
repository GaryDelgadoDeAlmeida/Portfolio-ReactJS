import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../parts/Admin/Header";
import { findParent } from "../../hook/index";

export default function EmailScreen() {
    const [emails, setEmails] = useState([
        {
            id: 1,
            subject: "Job offer",
            content: "Avec le générateur de texte online vous pouvez composer votre Lorem Ipsum personnel, en l’enrichissant...",
            isRead: true,
            date: "03/04/2023 14:20"
        },
        {
            id: 2,
            subject: "Job offer",
            content: "Avec le générateur de texte online vous pouvez composer votre Lorem Ipsum personnel, en l’enrichissant...",
            isRead: false,
            date: "03/04/2023 14:20"
        }
    ])

    const handleRemove = (e) => {
        let parent = findParent(e.target, "email-card")
        if(parent) {
            parent.remove()
        }
    }

    return (
        <Header printFooter={true}>
            <div className={"admin-email"}>
                <div className={"emails"}>
                    <table>
                        <thead>
                            <tr>
                                <th>Object</th>
                                <th>Content</th>
                                <th>Date</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {emails !== [] && emails.map((item, i) => (
                                <tr key={i} className={`email-card ${!item.isRead ? "unread" : ""}`}>
                                    <td>{item.subject}</td>
                                    <td>{item.content}</td>
                                    <td>{item.date}</td>
                                    <td>
                                        <Link to={`/admin/email/${item.id}`}>
                                            <img src={"/content/images/svg/eye.svg"} alt={"See more"} />
                                        </Link>
                                        <button onClick={(e) => handleRemove(e)}>
                                            <img src={"/content/images/svg/close-red.svg"} alt={"Remove"} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className={"pagination"}>
                    <div className={"first-page"}>
                        <a href={"#1"}><img src={"/content/images/svg/double-angle-left.svg"} alt={"double-angle-left"} /></a>
                    </div>
                    
                    <div className={"previous-page"}>
                        <a href={"#2"}><img src={"/content/images/svg/angle-left.svg"} alt={"angle-left"} /></a>
                    </div>
                    
                    <div className={"previous-page"}>
                        <a href={"#1"}>1</a>
                    </div>

                    <div className={"current-page"}>
                        <span>2</span>
                    </div>
                    
                    <div className={"next-page"}>
                        <a href={"#3"}>3</a>
                    </div>
                    
                    <div className={"next-page"}>
                        <a href={"#3"}><img src={"/content/images/svg/angle-right.svg"} alt={"angle-right"} /></a>
                    </div>
                    
                    <div className={"last-page"}>
                        <a href={"#4"}><img src={"/content/images/svg/double-angle-right.svg"} alt={"double-angle-right"} /></a>
                    </div>
                </div>
            </div>    
        </Header>
    )
}