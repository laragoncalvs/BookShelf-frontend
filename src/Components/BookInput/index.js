import React from "react";
import './BookInput.css'

const BookInput = ({className, label, type, onChange, min, max, placeholder, id, value}) => {
    return (
        <div className="input-label">
            <label >{label}</label>
            <input id={id} className={className} placeholder={placeholder} type= {type} onChange= {onChange}  min={min} max ={max}  value={value}/>
        </div>
    )
}


export default BookInput;