import React from 'react';
import BannerBook from "../../assets/banner-book.png";

const Banner = () => {

    return (
        <div className="flex items-center justify-center gap-[86px] bg-[#13131310] rounded-3xl px-[120px] py-20 mt-12">
            <div className="w-[526px] h-[281px]">
                <h1 className="font-playfair-display font-bold text-[56px] primary-color mb-12">Books to freshen up <br />your bookshelf</h1>
                <button className="font-work-sans font-bold text-[20px] text-white btn-primary px-7 py-[21px]">View The List</button>
            </div>
            <div>
                <img src={BannerBook} alt="banner image" />
            </div>
        </div>
    );
};

export default Banner;