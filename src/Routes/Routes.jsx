import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import BookDetails from '../pages/BookDetails/BookDetails';
import ListedBooks from '../pages/ListedBooks/ListedBooks';

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: "/",
                loader: () => fetch("/booksData.json").then(res => res.json()),
                element: <Home></Home>
            },
            {
                path: "about",
                element: <About></About>
            },
            {
                path: "book-details/:id",
                loader: () => fetch("/booksData.json").then(res => res.json()),
                element: <BookDetails></BookDetails>
            },
            {
                path: "listed-books",
                loader: () => fetch("/booksData.json").then(res => res.json()),
                element: <ListedBooks></ListedBooks>
            }
        ]
    }
]);

export default router;