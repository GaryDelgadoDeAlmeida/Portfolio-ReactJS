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
                <label>Price</label>
            </div>
            
            <div className={"form-field"}>
                <label>Currency</label>
            </div>
            
            <div className={"form-field"}>
                <label>Free Duty</label>
            </div>
            
            <div className={"form-field"}>
                <label>Description</label>
            </div>
            
            <div className={"form-button"}>
                <button type={"submit"}>Submit</button>
            </div>
        </form>
    )
}