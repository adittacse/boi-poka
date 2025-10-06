import BannerBook from "../../assets/banner-book.png";

const Banner = () => {

    return (
        <div className="hero bg-base-300 min-h-screen rounded-xl md:px-[120px] py-20 mt-12">
            <div className="hero-content flex-col lg:flex-row-reverse gap-[86px]">
                <img className="max-w-sm rounded-lg" src={BannerBook} alt="Banner image" />
                <div>
                    <h1 className="font-playfair-display font-bold text-[56px] primary-color mb-12">Books to freshen up <br />your bookshelf</h1>
                    <button className="font-work-sans font-bold text-[20px] text-white btn-primary px-7 py-[21px]">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;