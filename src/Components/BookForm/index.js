import React, { useState } from "react";
import api from "../../Services/api";
import BookInput from "../BookInput";
import BookPreview from "../BookPreview";
import './BookForm.css'
import db from '../../db.json';
import { GiSpellBook } from "react-icons/gi";

const BookForm = ({setAllBooks, allBooks, id}) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [color, setColor] = useState('#EFE9E6');
    const [fontColor, setFontColor] = useState('#6C6B6B');
    const [height, setHeight] = useState('60px');
    const [width, setWidth] = useState('415px');
    const [imagePath, setImagePath] = useState('');
    const [pages, setPages] = useState();
    const [genre, setGenre] = useState('');

    function handleBookSize(e) {

        if (e.target.value == 1) {
            setWidth('390px')
            setHeight('30px')
        }
        else if (e.target.value == 2) {
            setWidth('400px')
            setHeight('45px')
        }
        else if (e.target.value == 3) {
            setWidth('415px')
            setHeight('60px')
        }
        else if (e.target.value == 4) {
            setWidth('450px')
            setHeight('80px')
        }

    }

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await api.post('/books', {
            title,
            author,
            imagePath,
            pages,
            genre,
            color,
            fontColor,
            width,
            height
        })

        setTitle('');
        setAuthor('');
        setColor('#EFE9E6')
        setFontColor('#6C6B6B')
        setHeight('60px')
        setWidth('415px')
        setImagePath('')
        setPages('')
        setGenre('')

        setAllBooks([...allBooks, response.data])
    }


    return (
        <div className="bookform-container" id={id}>
            <GiSpellBook size="48px" color="#ADADAD"/>
            <h2>Add new book to the bookshelf</h2>
            <form onSubmit={handleSubmit} >
            <div>
                <div>
                    <BookInput type='text' className='input-text' label='Title' placeholder="Title of the book" value={title} onChange={e => setTitle(e.target.value)} />
                    <BookInput type='text' label='Author' className='input-text' placeholder="Book's writer" value={author} onChange={e => setAuthor(e.target.value)} />
                    <BookInput type='text' className='input-text' label='Image' placeholder="Paste here the book's cover image adress" 
                    value={imagePath} onChange={e => setImagePath(e.target.value)} />
                </div>
                
                <div className="inputs-row">
                    <div className="input-label">
                        <label>Genres</label>
                        <select defaultValue={'Select'} className="input-row" onChange={e => setGenre(e.target.value)} value={genre}>
                            <option>Select</option>
                            {db.booksGenres.map(genres => (
                                <option value={genres}>{genres}</option>
                            ))}

                        </select>
                    </div>
                    <BookInput type='number' label='Pages' className="input-row" value={pages} placeholder='100' onChange={e => setPages(e.target.value)} />
                    <BookInput type='color' label='Color' className="input-row" value={color} onChange={e => setColor(e.target.value)} />
                    <BookInput type='color' label='Font Color' className="input-row" value={fontColor} onChange={e => setFontColor(e.target.value)} />
                    <BookInput type='range' label="Book's size" className="input-row" id='input-range' min='1' max='4' onChange={handleBookSize} />
                </div>
                <div className="inputs-row-button">
                    <BookPreview title={title} author={author} color={color} width={width} height={height} fontColor={fontColor} />
                    <button className="btn" type='submit'>Add book</button>
                </div>

            </div>
            </form>
        </div>
    )
}


export default BookForm;