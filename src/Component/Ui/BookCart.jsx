import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router';

const BookCart = ({ book }) => {
    return (
        <Link to={`/bookDetails/${book.bookId}`}>
            <div className="card bg-base-100 shadow-sm">
                <figure className='p-6'>
                    <img className='rounded-xl w-[220px] max-h-[50vh]'
                        src={book.image}
                        alt="Books" />
                </figure>
                <div className="card-body">
                    <div className='flex items-center gap-2'>
                        {book.tags.map((tag, ind) => <div key={ind} className="badge bg-green-100  text-[#23BE0A] font-semibold rounded-full">{tag}</div>)}
                    </div>
                    <h2 className="card-title text-2xl">
                        {book.bookName}
                    </h2>
                    <p className='font-semibold text-lg'>{book.author}</p>
                    <div className="card-actions justify-between border-t border-dashed pt-4 border-gray-300 text-xl">
                        <div className="font-semibold">{book.category}</div>
                        <div className="flex items-center gap-2">{book.rating}<FaRegStar /></div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BookCart;