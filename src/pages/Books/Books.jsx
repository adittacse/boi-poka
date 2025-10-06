import { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({ books }) => {
    return (
        <div className="my-[100px]">
            <h2 className="font-playfair-display font-bold text-[40px] primary-color text-center mb-9">Books</h2>
            <Suspense fallback={<p>Loading...</p>}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {
                        books.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;