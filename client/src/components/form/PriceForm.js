import React, { useState } from "react"

export default function PriceForm() {

    const [price, setPrice] = useState(0)
    const [currency, setCurrency] = useState("")
    const [dutyFree, setDutyFree] = useState(false)
    const [description, setDescription] = useState([])

    const handleChange = (e, fieldName) => {
        let fieldValue = e.target.value
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form className={"form"} onSubmit={(e) => handleSubmit(e)}>
            <div className={"form-field"}>
                <label htmlFor={"price"}>Price</label>
                <input id={"price"} type={"number"} min={0} onChange={(e) => handleChange(e, "price")} />
            </div>
            
            <div className={"form-field"}>
                <label htmlFor={"currency"}>Currency</label>
                <select id={"currency"} onChange={(e) => handleChange(e, "currency")}>
                    <option>Euro / €</option>
                </select>
            </div>
            
            <div className={"form-field"}>
                <label>Free Duty</label>
                <input type={""} />
            </div>
            
            <div className={"form-field"}>
                <label>Description</label>
                
                <div className={"card"}>
                    <ul className={"-description-list"}></ul>
                    
                    <div className={"form-field-inline"}>
                        <input className={"field"} type={"text"} />
                        <button className={"btn btn-primary"}>+</button>
                    </div>
                </div>
            </div>
            
            <div className={"form-button"}>
                <button className={"btn btn-primary"} type={"submit"}>Submit</button>
            </div>
        </form>
    )
}