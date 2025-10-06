import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const { id } = useParams();
    const books = useLoaderData();

    const bookDetails = books.find(book => book.bookId === parseInt(id));
    
    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = bookDetails;

    return (
        <div className="min-h-screen mt-12 mb-12">
            <div className="flex flex-col md:flex-row gap-[48px] items-center">
                <figure className="md:w-1/2 h-[711px] p-[75px] bg-base-300 rounded-2xl flex flex-col justify-center mx-auto">
                    <img className="h-[564px]" src={image} alt="Book" />
                </figure>
                <div className="md:w-1/2">
                    <h1 className="text-[40px] font-bold font-playfair-display primary-color mb-4">{bookName}</h1>
                    <p className="font-work-sans font-medium text-[20px] text-[#13131380] mb-6">By: {author}</p>
                    <hr className="text-[#13131335] mb-5" />
                    <p className="font-work-sans font-medium text-[20px] text-[#13131380] mb-4">{category}</p>
                    <hr className="text-[#13131335] mb-5" />
                    <p className="font-work-sans text-[#13131370] mb-6"><span className="font-bold primary-color">Review:</span> {review}</p>
                    <div className="flex items-center mb-6">
                        <p className="font-bold font-work-sans primary-color mr-2">Tags:</p>
                        {
                            tags.map((tag, index) => <div key={index} className="font-work-sans font-medium text-[#23BE0A] bg-[#23BE0A10] rounded-[30px] py-[7px] px-4 mr-3">#{tag}</div>)
                        }
                    </div>
                    <hr className="text-[#13131335] mb-6" />
                    <div className="overflow-x-auto mb-8">
                        <table className="table font-work-sans">
                            <tbody>
                            <tr>
                                <td className="text-[#13131370]">Number of Pages:</td>
                                <td className="font-semibold primary-color">{totalPages}</td>
                            </tr>
                            <tr>
                                <td className="text-[#13131370]">Publisher:</td>
                                <td className="font-semibold primary-color">{publisher}</td>
                            </tr>
                            <tr>
                                <td className="text-[#13131370]">Year of Publishing:</td>
                                <td className="font-semibold primary-color">{yearOfPublishing}</td>
                            </tr>
                            <tr>
                                <td className="text-[#13131370]">Rating:</td>
                                <td className="font-semibold primary-color">{rating}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex items-center font-work-sans font-semibold text-lg">
                        <button className="btn btn-outline px-7 py-[18px] mr-4">Read</button>
                        <button className="btn bg-[#50B1C9] text-white px-7 py-[18px]">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;