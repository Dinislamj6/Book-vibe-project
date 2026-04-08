import React, { use } from 'react';
import { FaRegStar } from "react-icons/fa";
import BookCart from '../Ui/BookCart';

const booksPromise = fetch("/booksData.json").then(res => res.json())

const AllBooks = () => {
    const books = use(booksPromise)
    // console.log(books, "books");
    return (
        <div className='container mx-auto my-10'>
            <h2 className='font-bold text-3xl text-center mb-6'>Books</h2>

           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
             {
                books.map((book,ind) => {
                    return <BookCart key={ind} book={book}></BookCart>
                   
                })
            }
           </div>
        </div>
    );
};

export default AllBooks;