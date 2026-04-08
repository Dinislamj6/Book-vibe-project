import React, { createContext,  useState } from 'react';
import { toast } from 'react-toastify';
import { addReadListToLocalDB, getReadListFromLocalDB } from '../utils/localDB';
export const BookContext = createContext()

const BookProvider = ({ children }) => {


    const [storedBooks, setStoredBooks] = useState(() => getReadListFromLocalDB())
    const [wishList, setWishList] = useState([])


    const handelMarkAsRead = (currentBook) => {
        //step 1 : store book id
        //step 2 : where to store
        //step 2 : format array or collection
        //step 3 : if the book is already exist then show a alert or toast
        //step 4 : if not then add the book in the array or collection
         addReadListToLocalDB(currentBook)
       
        const isExistBook = storedBooks.find(book => book.bookId == currentBook.bookId)
        if (isExistBook) {
            toast.error("The book is already exist")
        } else {
            setStoredBooks([...storedBooks, currentBook])
            toast.success(`${currentBook.bookName} is added to read list`)
        }

    }
    const handelWishList = (currentBook) => {
        //step 1 : store book id
        //step 2 : where to store
        //step 2 : format array or collection
        //step 3 : if the book is already exist then show a alert or toast
        //step 4 : if not then add the book in the array or collection
         
        const isExistReadList = storedBooks.find( 
            (book) => book.bookId === currentBook.bookId)
            
        if(isExistReadList){
            toast.error("This Book is already in read list")
            return;
        }

        const isExistBook = wishList.find(book => book.bookId == currentBook.bookId)
        if (isExistBook) {
            toast.error("The book is already exist")
        } else {
            setWishList([...wishList, currentBook])
            toast.success(`${currentBook.bookName} is added to wish list`)
        }

    }
    const data = {
          storedBooks,
          setStoredBooks,
          handelMarkAsRead,
          wishList,
          setWishList,
          handelWishList,
    }
    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;