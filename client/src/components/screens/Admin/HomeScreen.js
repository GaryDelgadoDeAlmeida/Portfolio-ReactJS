import React from "react";
import Header from "../../parts/Admin/Header";

export default class HomeScreen extends React.Component {

    render() {
        return(
            <Header printFooter={true}>
                <div className={"admin-home"}>
                    <div className={"admin-cards"}>
                        <div className={"admin-card"}>
                            <h4 className="admin-card-suptitle">Visitors</h4>
                            <span>1</span>
                        </div>

                        <div className={"admin-card"}>
                            <h4 className="admin-card-suptitle">Works realised</h4>
                            <span>49</span>
                        </div>

                        <div className={"admin-card"}>
                            <h4 className="admin-card-suptitle">Professional experience</h4>
                            <span>3 years</span>
                        </div>
                    </div>

                    <div className={"admin-lasted"}>
                        <h2 className="admin-lasted-title">Lasted activity</h2>

                        <div className={"admin-tables"}>
                            <div className={"admin-table"}>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Work</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className={"f-left"}>
                                                    Portfolio (v4)
                                                </div>
                                                <div className={"f-right"}>
                                                    04/05/2022
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className={"f-left"}>
                                                    WikiEarth API
                                                </div>
                                                <div className={"f-right"}>
                                                    28/03/2022
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className={"f-left"}>
                                                    WikiEarth
                                                </div>
                                                <div className={"f-right"}>
                                                    18/01/2022
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className={"admin-table"}>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className={"f-left"}>
                                                    Garry DE ALMEIDA
                                                </div>
                                                <div className={"f-right"}>
                                                    04/05/2022
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className={"admin-lasted"}>
                        <h2 className="admin-lasted-title">Lasted work experience</h2>

                        <div className={"admin-tables"}>
                            <div className={"admin-table"}>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Experience</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className={"f-left"}>
                                                    Creano
                                                </div>
                                                <div className={"f-right"}>
                                                    today
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className={"f-left"}>
                                                    FFGolf
                                                </div>
                                                <div className={"f-right"}>
                                                    March 2019
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className={"f-left"}>
                                                    FFGolf
                                                </div>
                                                <div className={"f-right"}>
                                                    June 2018
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </Header>
        )
    }
}