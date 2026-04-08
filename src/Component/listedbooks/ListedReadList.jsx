import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookProvider';
import BookCart from '../Ui/BookCart';

const ListedReadList = ({sortingType}) => {
    const { storedBooks } = useContext(BookContext)
    console.log(storedBooks);

    const [filteredReadList,setFilteredReadList] = useState(storedBooks)

    useEffect(() => {
        if(sortingType){
            if(sortingType === "pages"){
                const sortedData = [...storedBooks].sort((a,b) => a.totalPages - b.totalPages)
                console.log(sortedData);
                setFilteredReadList(sortedData)
            }else if(sortingType === "rating"){
                 const sortedData = [...storedBooks].sort((a,b) => a.rating - b.rating)
                console.log(sortedData);
                setFilteredReadList(sortedData)
            }
        }

    },[sortingType,storedBooks])

        if(filteredReadList.length === 0){
            return <div className='h-[50vh] bg-gray-100 flex items-center justify-center'>
                <h2 className='text-3xl font-bold'>No read list data found</h2>
            </div>
        }
    return (
        <div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>

                {
                   filteredReadList.map((book, ind) =>
                    <BookCart key={ind} book={book}></BookCart>)
                }
            </div>
        </div>
    );
};

export default ListedReadList;