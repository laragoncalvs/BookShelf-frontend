import React from "react";
import './BookPreview.css'

const BookPreview = ({title, author, color, height, width, fontColor}) => {
    return (
        <div className="book-preview" style={{backgroundColor: color, color: fontColor, height: height, width: width, border: 0}}> 
        <span className="author-span">{author}</span>
            <span className="title-span">{title}</span>
            
        </div>
    )
}

export default BookPreview;