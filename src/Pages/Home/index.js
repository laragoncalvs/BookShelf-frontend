import React, { useState, useEffect } from "react";
import api from '../../Services/api'
import BookForm from "../../Components/BookForm";
import BookPreview from "../../Components/BookPreview";
import BookShelf from '../../Components/BookShelf';
import InicialBannerText from '../../Components/InicialBannerText';
import Nav from '../../Components/Nav'
import './Home.css'
import '../../global.css'

const Home = () => {

    console.log('rendeirizou')

    const [allBooks, setAllBooks] = useState([])

    async function handleRemove(id) {

        const deletedBook = await api.delete(`/books/${id}`);


        if (deletedBook) {
            setAllBooks(allBooks.filter(b => b._id !== id));
        }
    }

    async function getAllBooks() {
        const response = await api.get('/books')

        setAllBooks(response.data)
    }

    useEffect(() => {

        getAllBooks();

    }, [])

    return (
        <main>
            <div className="container-main">
                <Nav href="#form" />
                <div className="book-shelf">
                    <BookShelf />
                </div>
                <div className="container-banner">
                    <div>
                        <InicialBannerText href="#form" />
                    </div>

                    <div className="books-container">
                        <div className="ghost-book"></div>
                        <div className="books-rotate">
                            {allBooks.map(data => (
                                <button onDoubleClick={() => handleRemove(data._id)}>
                                    <BookPreview width={data.width} height={data.height} color={data.color} fontColor={data.fontColor} title={data.title} author={data.author} key={data._id} />
                                </button>))}
                        </div>
                    </div>
                </div>

                <BookForm allBooks={allBooks} setAllBooks={setAllBooks} id="form" />
            </div>
        </main>



    )
}


export default Home;