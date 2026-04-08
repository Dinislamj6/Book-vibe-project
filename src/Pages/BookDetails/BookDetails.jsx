import { useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../context/BookProvider';



const BookDetails = () => {
    const { id } = useParams()

    const books = useLoaderData()
    const expectedBook = books.find(book => book.bookId == id)

    const { yearOfPublishing, publisher, tags, category, rating, totalPages, review, image, author, bookName } = expectedBook;

    const {handelMarkAsRead, storedBooks , handelWishList} = useContext(BookContext)
    



    return (
        <div>
            <div className="grid md:grid-cols-2 grid-cols-1 bg-base-100 shadow-sm container mx-auto my-8">
                <figure className='flex items-center justify-center bg-gray-100 rounded-lg'>
                    <img className='h-[400px]'
                        src={image}
                        alt="Books" />
                </figure>
                <div className="card-body space-y-3">
                    <h2 className="card-title text-2xl">{bookName}</h2>
                    <h2 className="card-title text-2xl">By: {author}</h2>
                    <p className='py-2 border-y'>{category}</p>
                    <p><span className='font-bold text-xl'>Review:</span> {review}</p>
                   <div>
                     <div className='flex items-center gap-2'>
                      <span className='font-bold text-xl'>Tag</span>    {tags.map((tag, ind) => <div key={ind} className="badge bg-green-100  text-[#23BE0A] font-semibold rounded-full">{tag}</div>)}
                   </div>
                        <div className="border-t space-y-3">
                             <div className='flex  items-center space-x-8'>
                               <span>Number of pages: </span> <span className='font-semibold text-xl'>{totalPages}</span>
                            </div>
                             <div className='flex  items-center space-x-20'>
                               <span>Publisher: </span> <span className='font-semibold text-xl'>{publisher}</span>
                            </div>
                             <div className='flex  items-center space-x-6'>
                               <span>Year of Publishing: </span> <span className='font-semibold text-xl'>{yearOfPublishing}</span>
                            </div>
                             <div className='flex  items-center space-x-26'>
                               <span>Rating: </span> <span className='font-semibold text-xl'>{rating}</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <button className="btn" onClick={() => handelMarkAsRead(expectedBook)}>Read</button>
                                <button className="btn bg-[#50B1C9] text-white" onClick={() => handelWishList(expectedBook)}>Wishlist</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            );
};

            export default BookDetails;