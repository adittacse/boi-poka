import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useLoaderData } from "react-router";
import { getStoredBook, getWishlistBook } from "../../utilities/addToDB";
import HeroBook from "../../components/HeroBook/HeroBook";

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [sort, setSort] = useState("");
    const books = useLoaderData();

    useEffect(() => {
        const storedBooks = getStoredBook();
        const convertedStoredBooks = storedBooks.map(id => parseInt(id));
        const myReadList = books.filter(book => convertedStoredBooks.includes(book.bookId));
        setReadList(myReadList);
    }, [books]);

    useEffect(() => {
        const wishlistBooks = getWishlistBook();
        const convertedWishlistBooks = wishlistBooks.map(id => parseInt(id));
        const myWishList = books.filter(book => convertedWishlistBooks.includes(book.bookId));
        setWishlist(myWishList);
    }, [books]);

    const handleSort = (type) => {
        setSort(type);
        if (type === "Book Name Ascending") {
            const sortedByBookName = [...readList].sort((a, b) => a.bookName.localeCompare(b.bookName));
            setReadList(sortedByBookName);
            const sortedByBookName2 = [...wishlist].sort((a, b) => a.bookName.localeCompare(b.bookName));
            setWishlist(sortedByBookName2);
        } else if (type === "Book Name Descending") {
            const sortedByBookName = [...readList].sort((a, b) => 
                b.bookName.localeCompare(a.bookName)
            );
            setReadList(sortedByBookName);
            const sortedByBookName2 = [...wishlist].sort((a, b) => 
                b.bookName.localeCompare(a.bookName)
            );
            setWishlist(sortedByBookName2);
        } else if (type === "Author") {
            const sortedByAuthor = [...readList].sort((a, b) => 
                a.author.localeCompare(b.author)
            );
            setReadList(sortedByAuthor);
            const sortedByAuthor2 = [...wishlist].sort((a, b) => 
                a.author.localeCompare(b.author)
            );
            setWishlist(sortedByAuthor2);
        } else if (type === "Publisher") {
            const sortedByPublisher = [...readList].sort((a, b) => 
                a.publisher.localeCompare(b.publisher)
            );
            setReadList(sortedByPublisher);
            const sortedByPublisher2 = [...wishlist].sort((a, b) => 
                a.publisher.localeCompare(b.publisher)
            );
            setWishlist(sortedByPublisher2);
        } else if (type === "Pages") {
            const sortedByTotalPages = [...readList].sort((a, b) => 
                a.totalPages - b.totalPages
            );
            setReadList(sortedByTotalPages);
            const sortedByTotalPages2 = [...wishlist].sort((a, b) => 
                a.totalPages - b.totalPages
            );
            setWishlist(sortedByTotalPages2);
        } else if (type === "Ratings") {
            const sortedByRating = [...readList].sort((a, b) => 
                a.rating - b.rating
            );
            setReadList(sortedByRating);
            const sortedByRating2 = [...wishlist].sort((a, b) => 
                a.rating - b.rating
            );
            setWishlist(sortedByRating2);
        }
    }

    return (
        <div className="mb-[100px]">
            <div className="bg-base-300 rounded-2xl my-9">
                <h2 className="font-work-sans font-bold text-[28px] primary-color text-center py-[34px]">Books</h2>
            </div>

            <div className="flex justify-center mb-14">
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn-primary py-[15px] flex items-center px-5 m-1">Sort By <IoIosArrowDown className="ml-4 mr-4" /> {sort ? sort : ""}</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => handleSort("Book Name Ascending")}><a>Ascending Book Name</a></li>
                        <li onClick={() => handleSort("Book Name Descending")}><a>Descending Book Name</a></li>
                        <li onClick={() => handleSort("Author")}><a>Author</a></li>
                        <li onClick={() => handleSort("Publisher")}><a>Publisher</a></li>
                        <li onClick={() => handleSort("Pages")}><a>Pages</a></li>
                        <li onClick={() => handleSort("Ratings")}><a>Ratings</a></li>
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
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {
                        wishlist.map(book => <HeroBook key={book.bookId} book={book}></HeroBook>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;