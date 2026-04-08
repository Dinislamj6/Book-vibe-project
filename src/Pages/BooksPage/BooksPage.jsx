import React, { useContext, useState } from 'react';
import Banner from '../../Component/HomePage/Banner';
import { BookContext } from '../../context/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../Component/listedbooks/ListedReadList';
import ListedWishList from '../../Component/listedbooks/ListedWishList';

const BooksPage = () => {
    const { storedBooks, wishList } = useContext(BookContext)
    console.log(storedBooks);

    const [sortingType, setShortingType] = useState("")

    return (
        <div className='container mx-auto my-3'>

            <div className='flex justify-center my-3'>
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn m-1">Sort by: {sortingType} ⬇️</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={()=> setShortingType("pages")}><a>Pages</a></li>
                        <li onClick={() =>  setShortingType("rating")}><a>Rating</a></li>
                    </ul>
                </div>

            </div>

            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <ListedReadList sortingType={sortingType}></ListedReadList>
                </TabPanel>
                <TabPanel>
                    <ListedWishList sortingType={sortingType}></ListedWishList>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default BooksPage;