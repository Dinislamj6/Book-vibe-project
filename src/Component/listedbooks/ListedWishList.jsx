import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookProvider';
import BookCart from '../Ui/BookCart';

const ListedWishList = ({sortingType}) => {
       const { wishList } = useContext(BookContext)
        const [filteredWishList,setFilteredWishList] = useState(wishList)
       
           useEffect(() => {
               if(wishList){
                   if(sortingType === "pages"){
                       const sortedData = [...wishList].sort((a,b) => a.totalPages - b.totalPages)
                       setFilteredWishList(sortedData)
                   }else if(sortingType === "rating"){
                        const sortedData = [...wishList].sort((a,b) => a.rating - b.rating)
                       console.log(sortedData);
                       setFilteredWishList(sortedData)
                   }else{
                       setFilteredWishList(wishList)
                   }
               }
       
           },[sortingType,wishList])

        if(filteredWishList.length === 0){
            return <div className='h-[50vh] bg-gray-100 flex items-center justify-center'>
                <h2 className='text-3xl font-bold'>No wish list data found</h2>
            </div>
        }
       return (
           <div>
   
               <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
   
                   {
                       filteredWishList.map((book, ind) =>
                       <BookCart key={ind} book={book}></BookCart>)
                   }
               </div>
           </div>
       );
};

export default ListedWishList;