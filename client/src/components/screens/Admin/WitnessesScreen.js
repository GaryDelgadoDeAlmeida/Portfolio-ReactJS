import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../parts/Admin/Header";
import { findParent } from "../../hook/index";

export default function WitnessesScreen() {
    const [witnesses, setWitnesses] = useState([
        {
            id: 1,
            date: "06/08/2022",
            client: "Jacob",
            email: "jacob@yahoo.com",
            witness: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum"
        },
        {
            id: 2,
            date: "06/08/2022",
            client: "Jacob",
            email: "jacob@yahoo.com",
            witness: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum"
        },
        {
            id: 3,
            date: "06/08/2022",
            client: "Jacob",
            email: "jacob@yahoo.com",
            witness: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum"
        },
        {
            id: 4,
            date: "06/08/2022",
            client: "Jacob",
            email: "jacob@yahoo.com",
            witness: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum"
        },
        {
            id: 5,
            date: "06/08/2022",
            client: "Jacob",
            email: "jacob@yahoo.com",
            witness: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum"
        }
    ])

    const handleRemove = (e) => {
        let parent = findParent(e.target, "witness-item")
        if(parent !== null) {
            parent.remove()
        }
    }

    useEffect(() => {}, [])

    return (
        <Header printFooter={true}>
            <div className={"admin-witnesses"}>
                <Link to={"/admin/witnesses/add"}>
                    <button className={"btn btn-green"}>Add a witness</button>
                </Link>

                <table className={"witnesses-table"}>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Client</th>
                            <th>Email</th>
                            <th>Witness</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { witnesses !== [] ? (
                            witnesses.map((item, i) => (
                                <tr key={i} className={"witness-item"}>
                                    <td>{ item.date }</td>
                                    <td>{ item.client }</td>
                                    <td>{ item.email }</td>
                                    <td>{ item.witness }</td>
                                    <td>
                                        <button onClick={(e) => handleRemove(e)}>
                                            <img src={"/content/images/svg/close-red.svg"} alt={"close-icon"} />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={5}>There is no client witness</td>
                            </tr>
                        ) }
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