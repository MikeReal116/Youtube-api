import React, { useState } from "react";
import "./Search.css";

const Search = ({text}) =>{
    const [term, setTerm] = useState("");

    const onInputChange = (event) =>{
        setTerm(event.target.value);
    }
    const onFormSubmit =(event) =>{
        event.preventDefault();
         text(term);
    }
    return(
        <form onSubmit={onFormSubmit} className="form">
             <input type ="text" id="text" value={term} onChange={onInputChange} className="form__input"/>
              <label htmlFor="text" className="form__label">Search Video</label> 
         </form>
    )
}

export default Search;