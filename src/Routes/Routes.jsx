import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import BooksPage from "../Pages/BooksPage/BooksPage";
import HomePage from "../Pages/HomePage/HomePage";
import Error from "../Pages/ErrorPage/Error";
import BookDetails from "../Pages/BookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>
      },
      {
        path: "/books",
        element: <BooksPage></BooksPage>
      },
      {
        path: "/bookDetails/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("/booksData.json")
      }
    ],
    errorElement: <Error></Error>
  },
  {
    path: "/books",
    element: "books"
  }
])