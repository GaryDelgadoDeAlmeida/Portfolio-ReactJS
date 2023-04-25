import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../parts/Admin/Header";
import { findParent } from "../../hook";

export default function ExperienceScreen() {
    const [experience, setExperience] = useState([
        {
            id: 1,
            start: "21/08/2022",
            end: "",
            type: "Formation",
            society: "3W Academie"
        },
        {
            id: 2,
            start: "01/07/2022",
            end: "30/07/2023",
            type: "Experience",
            society: "Creano"
        }
    ])

    const handleRemove = (e) => {
        let parent = findParent(e.target, "experience-row")
        if(parent !== null) {
            parent.remove()
        }
    }

    return (
        <Header printFooter={true}>
            <div className={"admin-experience"}>
                <Link to={"/admin/experiences/add"}>
                    <button className={"btn btn-primary"}>Add an experience</button>
                </Link>

                {/* Formation / Experience */}
                <table className={"experience-table"}>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Type</th>
                            <th>Structure</th>
                            <th></th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {experience !== [] ? (
                            experience.map((item, i) => (
                                <tr key={item.id} className={"experience-row"}>
                                    <td>{item.start} &minus; {item.end}</td>
                                    <td>{item.type}</td>
                                    <td>{item.society}</td>
                                    <td>
                                        <Link to={`/admin/experiences/${item.id}`}>
                                            <img src={"/content/images/svg/eye.svg"} alt={""} />
                                        </Link>
    
                                        <button onClick={(e) => handleRemove(e)}>
                                            <img src={"/content/images/svg/close-red.svg"} alt={""} />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4}>There is no experience</td>
                            </tr>
                        )}
                    </tbody>
                </table>

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