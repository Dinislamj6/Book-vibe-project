import js from "@eslint/js";

const getReadListFromLocalDB = () => {
      const allReadList = localStorage.getItem('readList');
      if (allReadList) return JSON.parse(allReadList);
        return []
}


const addReadListToLocalDB = (book) => {
  const allBooks = getReadListFromLocalDB();
  const isExistBook = allBooks.find(b => b.bookId == book.bookId);
  if(!isExistBook){
    allBooks.push(book)
    localStorage.setItem('readList', JSON.stringify(allBooks))  
  }
}

export { getReadListFromLocalDB, addReadListToLocalDB }