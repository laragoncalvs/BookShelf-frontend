import React, { useEffect, useState } from "react";
import api from "../../Services/api";
import BookForm from "../BookForm";
import BookPreview from "../BookPreview";
import './BookShelfBooks.css'

const BookShelfBooks = () => {

    const [allBooks, setAllBooks] = useState([])

    async function getAllBooks() {
        const response = await api.get('/books')

        setAllBooks(response.data)
    }

    useEffect(() => {

        getAllBooks();

    }, [])

   

    return (

<>
        <div className="books-text">


            {
                allBooks.map(data => (
                    <BookPreview width={data.width} height={data.height} color={data.color} fontColor={data.fontColor} title={data.title} author={data.author} />
       
                ))
            }
        </div>
        
      </>
    )

}

export default BookShelfBooks