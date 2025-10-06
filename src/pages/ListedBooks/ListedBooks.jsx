import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useLoaderData } from "react-router";
import { getStoredBook } from "../../utilities/addToDB";
import HeroBook from "../../components/HeroBook/HeroBook";

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const books = useLoaderData();

    useEffect(() => {
        const storedBooks = getStoredBook();
        const convertedStoredBooks = storedBooks.map(id => parseInt(id));
        const myReadList = books.filter(book => convertedStoredBooks.includes(book.bookId));
        setReadList(myReadList);
    }, []);

    return (
        <div className="mb-[100px]">
            <div className="bg-base-300 rounded-2xl my-9">
                <h2 className="font-work-sans font-bold text-[28px] primary-color text-center py-[34px]">Books</h2>
            </div>

            <div className="flex justify-center mb-14">
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn-primary py-[15px] flex items-center px-5 m-1">Sort By <IoIosArrowDown className="ml-4" /></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a>Book Name</a></li>
                        <li><a>Author</a></li>
                        <li><a>Publisher</a></li>
                    </ul>
                </div>
            </div>

            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab font-work-sans" aria-label="Read Books" defaultChecked />
                <div className="tab-content bg-base-100 border-base-500 p-6">
                    {
                        readList.map(book => <HeroBook key={book.bookId} book={book}></HeroBook>)
                    }
                </div>

                <input type="radio" name="my_tabs_3" className="tab font-work-sans" aria-label="Wishlist Books" />
                <div className="tab-content bg-base-100 border-base-300 p-6">Wishlist Books</div>
            </div>
        </div>
    );
};

export default ListedBooks;