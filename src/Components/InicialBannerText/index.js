import React, { useEffect, useState } from "react";
import './InicialBannerText.css'
import db from '../../db.json'

const InicialBannerText = ({href}) => {

    const [author, setAuthor] = useState ('');
    const [quote, setQuote] = useState ('');

    useEffect(()=> {
       setQuote(db.quotesText[number].quote)
       setAuthor(db.quotesText[number].author)
    }, [])


        var number = (Math.floor(Math.random() * (db.quotesText.length - 1) ) + 1);


   
    return(
        <div className="banner-text">
            <h1>Lara's bookshelf</h1>
            <h3>{quote}</h3>
            <div className="line"></div>
            <h3 className="author-h3">{author}</h3>
            <a className="button-add" href={href}>Add new book</a>
        </div>
    )
}


export default InicialBannerText;