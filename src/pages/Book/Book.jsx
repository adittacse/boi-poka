import { FaRegStar } from "react-icons/fa";

const Book = ({ book }) => {
    const { image, tags, bookName, yearOfPublishing, author, category, rating } = book;
    console.log(book);
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure className="w-[360px] h-[230px] px-24 mt-6 bg-base-300 rounded-2xl flex flex-col mx-auto">
                <img className="h-[150px]" src={image} alt="Book" />
            </figure>
            <div className="p-6">
                <div className="flex mb-4">
                    {
                        tags.map(tag => <div className="font-work-sans font-medium text-[#23BE0A] bg-[#23BE0A10] rounded-[30px] py-[7px] px-4 mr-3">{tag}</div>)
                    }
                </div>
                <h2 className="card-title font-playfair-display font-bold text-2xl primary-color mb-4">
                    {bookName}
                    <div className="badge badge-secondary font-work-sans font-semibold">{yearOfPublishing}</div>
                </h2>
                <p className="font-work-sans font-medium text-[#13131380] mb-5">By: {author}</p>
                <hr className="text-[#13131315] mb-5" />
                <div className="card-actions font-work-sans justify-between items-center">
                    <p className="font-medium text-[#13131380]">{category}</p>
                    <div className="flex items-center">
                        <p className="mr-2">{rating}</p>
                        <FaRegStar className="text-[#424242] w-6 h-6" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;