import { IoLocationOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineFindInPage } from "react-icons/md";
import { Link } from "react-router";
import "./Style.css";

const HeroBook = ({ book }) => {
    const { bookId, image, bookName, author, tags, yearOfPublishing, publisher, totalPages, category, rating } = book;

    return (
        <div className="my-hero border-2 border-base-300 rounded-2xl my-8">
            <div className="isolate flex flex-col md:flex-row p-5 gap-6 w-full lg:items-stretch">
                <div className="w-full md:w-[230px] h-[230px] md:h-[230px] bg-base-300 rounded-2xl flex justify-center items-center shrink-0">
                    <img src={image} className="w-[130px] md:w-[130px] h-[172px] md:h-[172px]" />
                </div>
                <div className="flex-1 w-full min-w-0">
                    <h1 className="font-playfair-display text-2xl font-bold mb-4">{bookName}</h1>
                    <p className="mb-4">By : {author}</p>
                    <div className="flex flex-col lg:flex-row lg:items-center gap-2 mb-4">
                         <div className="flex items-center">
                            <p className="mr-2">Tag :</p>
                            {
                                tags.map((tag, index) => <div key={index} className="font-work-sans font-medium text-[#23BE0A] bg-[#23BE0A10] rounded-[30px] py-[7px] px-4 mr-3">{tag}</div>)
                            }
                         </div>
                         <div className="flex items-center">
                             <IoLocationOutline className="mr-2" />
                             <p>Year of Publishing: {yearOfPublishing}</p>
                         </div>
                     </div>
                     <div className="flex flex-col md:flex-row lg:items-center gap-3 mb-4">
                        <div className="flex items-center">
                            <IoPeopleOutline className="w-[20px] h-[18px] mr-2" />
                            <p>Publisher: {publisher}</p>
                        </div>
                        <div className="flex items-center">
                            <MdOutlineFindInPage className="w-[20px] h-[18px] mr-2" />
                            <p>Page {totalPages}</p>
                        </div>
                    </div>
                    <hr className="mb-4" />
                    <div className="flex flex-wrap items-center gap-3">
                        <button className="bg-[#328EFF15] text-[#328EFF] rounded-full px-5 py-[11px]">Category: {category}</button>
                        <button className="bg-[#FFAC3315] text-[#FFAC33] rounded-full px-5 py-[11px]">Rating: {rating}</button>
                        <Link to={`/book-details/${bookId}`}>
                            <button className="bg-[#23BE0A] text-white font-medium rounded-full cursor-pointer px-5 py-[11px]">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        // <div className="hero border-2 border-base-300 rounded-2xl my-8 justify-start">
        //     <div className="hero-content flex-col lg:flex-row gap-6">
                // <figure className="w-[230px] h-[230px] bg-base-300 rounded-2xl flex justify-center items-center">
                //     <img className="w-[130px] h-[172px]" src={image} alt="Book" />
                // </figure>
        //         <div>
        //             <h1 className="font-playfair-display text-2xl font-bold mb-4">{bookName}</h1>
        //             <p className="mb-4">By : {author}</p>
        //             <div className="flex items-center mb-4">
        //                 <p className="mr-2">Tag :</p>
        //                 {
        //                     tags.map((tag, index) => <div key={index} className="font-work-sans font-medium text-[#23BE0A] bg-[#23BE0A10] rounded-[30px] py-[7px] px-4 mr-3">{tag}</div>)
        //                 }
        //                 <div className="flex items-center ml-2">
        //                     <IoLocationOutline className="mr-2" />
        //                     <p>Year of Publishing: {yearOfPublishing}</p>
        //                 </div>
        //             </div>
        //             <div className="flex items-center mb-4">
        //                 <div className="flex items-center mr-3">
        //                     <IoPeopleOutline className="w-[20px] h-[18px] mr-2" />
        //                     <p>Publisher: {publisher}</p>
        //                 </div>
        //                 <div className="flex items-center">
        //                     <MdOutlineFindInPage className="w-[20px] h-[18px] mr-2" />
        //                     <p>Page {totalPages}</p>
        //                 </div>
        //             </div>
        //             <hr className="mb-4" />
        //             <div className="flex items-center">
        //                 <button className="bg-[#328EFF15] text-[#328EFF] rounded-full px-5 py-[11px] mr-3">Category: {category}</button>
        //                 <button className="bg-[#FFAC3315] text-[#FFAC33] rounded-full px-5 py-[11px] mr-3">Rating: {rating}</button>
        //                 <Link to={`/book-details/${bookId}`}>
        //                     <button className="bg-[#23BE0A] text-white font-medium rounded-full cursor-pointer px-5 py-[11px]">View Details</button>
        //                 </Link>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default HeroBook;