"use client";
import React, { useState, useEffect, use } from 'react';
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import Shop from "@mui/icons-material/StorefrontOutlined";
import ProductShop from '@/components/ProductShop';
import Pagination from '@/components/Pagination';

const MorabaLight = localFont({
    src: "../../components/fonts/Morabba/woff2/Morabba-Light.woff2"
});
const Morabab = localFont({
    src: "../../components/fonts/Morabba/woff2/Morabba-Bold.woff2"
});
const Danam = localFont({
    src: "../../components/fonts/Dana/woff2/DanaFaNum-Medium.woff2"
});
const Danareg = localFont({
    src: "../../components/fonts/Dana/woff2/DanaFaNum-Regular.woff2"
});
const Danab = localFont({
    src: "../../components/fonts/Dana/woff2/DanaFaNum-DemiBold.woff2"
});

const products = [
    { id: 1, name: "بسته 60 عددی شکلات تلخ قهوه ویولتا فرمند ۵۵ گرمی", src: '/img/main/product-7-min.png', price: '140,000 تومان' },
    { id: 2, name: "دانه قهوه ترکیبی FALL Blend اصل کلمبیا مقدار 250 گرم", src: '/img/main/product-3.png', price: '140,000 تومان' },
    { id: 3, name: "ماگ در دار سیلیکونی با بدنه ی سرامیکی طرح استارباکس", src: '/img/main/product-2-min.png', price: '140,000 تومان' },
    { id: 4, name: "قهوه ساز برقی سینبو مدل SCM 2928 با بدنه سرامیکی", src: '/img/main/product-1.png', price: '140,000 تومان' },
    { id: 5, name: "قهوه ساز برقی سینبو مدل SCM 2928 با بدنه سرامیکی", src: '/img/main/product-4-min.png', price: '140,000 تومان' },
    { id: 6, name: "قهوه ساز برقی سینبو مدل SCM 2928 با بدنه سرامیکی", src: '/img/main/product-5-min.png', price: '140,000 تومان' },
    { id: 7, name: "قهوه ساز برقی سینبو مدل SCM 2928 با بدنه سرامیکی", src: '/img/main/product-6-min.png', price: '140,000 تومان' },
    { id: 8, name: "قهوه ساز برقی سینبو مدل SCM 2928 با بدنه سرامیکی", src: '/img/main/product-8-min.png', price: '140,000 تومان' },
];

const shuffleArray = (array) => {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
};

const categories = ['دسته بندی محصولات...', 'بدون دسته بندی', 'چایی ساز', 'شکلات', 'قهوه', 'قهوه ساز', 'ماگ'];
const brand = ['برند محصولات', 'رویوستا', 'عربیکا'];

export default function ShopPage() {
    const [currentPage, setCurrentPage] = useState(0);
    const [shuffledProducts, setShuffledProducts] = useState([]);
    const [minPrice, setMinPrice] = useState(1000);
    const [maxprice, setMaxPrice] = useState(2_750_000);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showDropdownBrand, setShowDropdownBrand] = useState(false);
    const [selectCategories, setSelectCategories] = useState('همه محصولات');
    const [searchText, setSearchText] = useState('دسته بندی محصولات...');
    const [selectBrand, setSelectBrand] = useState('برند محصولات');
    const [searchBrand, setSearchBrand] = useState('برند محصولات');
    const itemsPerPage = 6;

    useEffect(() => {
        setShuffledProducts(shuffleArray([...products])); // Shuffle the products once on component mount
    }, []);

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 0 && pageNumber < Math.ceil(shuffledProducts.length / itemsPerPage)) {
            setCurrentPage(pageNumber);
        }
    };

    const handleRangeChange = (e) => {
        const value = e.target.value;
        if (e.target.name === 'min') {
            setMinPrice(value);
        } else {
            setMaxPrice(value);
        }
    }

    const handleCategoriesChange = (category) => {
        setSelectCategories(category);
        setShowDropdown(false);
        setSearchText(category);
    }

    const handleBrandChange = (brands) => {
        setSearchBrand(brands);
        setShowDropdownBrand(false);
        setSearchBrand(brands);
    }

    const currentItems = shuffledProducts.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );
    const formatNumber = (number) => {
        return new Intl.NumberFormat('fa-IR').format(number);
    };

    return (
        <div className={`${Danareg.className} w-[85%] m-auto mt-12`}>
            <div className={'flex gap-x-8'}>
                <section className={'w-[25%] h-[424px] sticky top-2'}>
                    <input type="search" placeholder={"جستجو..."}
                        className={"h-11 w-full mb-4 pr-2 rounded-xl text-black "} />
                    <Link href={"/"}
                        className={'w-full bg-emerald-700 mb-4 rounded-xl text-white block text-center py-2'}>
                        <span>جستجو کنید</span>
                    </Link>
                    <div className={'flex flex-col justify-around w-full mb-4 h-[108px] bg-white px-4 rounded-xl'}>
                        <span>فیلتر قیمت</span>
                        <input
                            type={'range'}
                            style={{ accentColor: '#059669' }}
                            name='min'
                            min={1_000}
                            max={2750000}
                            value={minPrice}
                            onChange={handleRangeChange}
                        />
                        <span className={'text-center'}>{formatNumber(minPrice)}تومان — 2,750,000 تومان</span>
                    </div>
                    <div className='relative'>
                        <input type="search"
                            placeholder={searchText}
                            className={"h-11 w-full mb-4 pr-2 rounded-xl text-black cursor-pointer"}
                            onFocus={() => setShowDropdown(true)}
                            readOnly
                        />
                        {showDropdown && (
                            <div className='absolute w-full bg-white border rounded-xl -mt-4 z-10'>
                                {categories.map((category, index) => (
                                    <div
                                        key={index}
                                        className={'px-4 py-2 cursor-pointer hover:bg-gray-200'}
                                        onClick={() => handleCategoriesChange(category)}
                                    >
                                        {category}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className='relative'>
                        <input
                            type="search"
                            placeholder={searchBrand}
                            className={"h-11 w-full mb-4 pr-2 rounded-xl text-black cursor-pointer"}
                            onFocus={() => setShowDropdownBrand(true)}
                            readOnly
                        />
                        {showDropdownBrand && (
                            <div className='absolute w-full bg-white border rounded-xl -mt-4'>
                                {brand.map((brands, index) => (
                                    <div
                                        key={index}
                                        className={'px-6 px-2 cursor-pointer hover:bg-gray-200'}
                                        onClick={() => handleBrandChange(brands)}
                                    >
                                        {brands}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <Link href={"/"}
                        className={'w-full bg-emerald-700 mb-4 rounded-xl text-white block text-center py-2'}>
                        <span>اعمال فیلتر</span>
                    </Link>
                </section>
                <div className={'flex flex-col w-[73%]'}>
                    <section className={'w-full rounded-xl px-4 flex justify-between items-center bg-white h-[62px]'}>
                        <h3 className={`text-gray-700 text-xl ${Morabab.className}`}>فروشگاه</h3>
                    </section>
                    <div className='products-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4'>
                        {currentItems.map((product) => (
                            <ProductShop key={product.id} product={product} />
                        ))}
                    </div>
                    <section className={'mb-20 mt-5'}>
                        <div className={'w-full h-[47px] bg-white rounded-2xl flex items-center justify-center gap-x-6'}>
                            <Pagination
                                currentPage={currentPage}
                                totalPages={Math.ceil(shuffledProducts.length / itemsPerPage)}
                                onPageChange={handlePageChange}
                            />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
