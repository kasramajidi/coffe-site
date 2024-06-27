"use client";
import React, { useState } from 'react';
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

import Shop from "@mui/icons-material/StorefrontOutlined";

import Product from '@/components/Product';
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
    { id: 1, name: "Product 1", src: '/img/main/product-7-min.png' },
    { id: 2, name: "Product 2", src: '/img/main/product-3.png' },
    { id: 3, name: "Product 3", src: '/img/main/product-2-min.png' },
    { id: 4, name: "Product 4", src: '/img/main/product-1.png' },
    { id: 5, name: "Product 5", src: '/img/main/product-7-min.png' },
    { id: 6, name: "Product 6", src: '/img/main/product-3.png' },
    { id: 7, name: "Product 7", src: '/img/main/product-2-min.png' },
    { id: 8, name: "Product 8", src: '/img/main/product-1.png' },
];

export default function ShopPage() {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 3;

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 0 && pageNumber < Math.ceil(products.length / itemsPerPage)) {
            setCurrentPage(pageNumber);
        }
    };

    const currentItems = products.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    return (
        <div className={`${Danareg.className} w-[85%] m-auto mt-12`}>
            <div className={'flex gap-x-8'}>
                {/* section 1 ( side bar ) */}
                <section className={'w-[25%] h-[424px] sticky top-2'}>
                    <input type="search" placeholder={"جستجو..."}
                        className={"h-11 w-full mb-4 pr-2 rounded-xl text-black "} />
                    <Link href={"/"}
                        className={'w-full bg-emerald-700 mb-4 rounded-xl text-white block text-center py-2'}>
                        <span>جستجو کنید</span>
                    </Link>
                    <div className={'flex flex-col justify-around w-full mb-4 h-[108px] bg-white px-4 rounded-xl'}>
                        <span>فیلتر قیمت</span>
                        <input type={'range'} style={{ accentColor: '#059669' }} />
                        <span className={'text-center'}>1,000 تومان — 2,750,000 تومان</span>
                    </div>
                    <input type="search" placeholder={"دسته بندی محصولات"}
                        className={"h-11 w-full mb-4 pr-2 rounded-xl text-black "} />
                    <input type="search" placeholder={"برند محصولات"}
                        className={"h-11 w-full mb-4 pr-2 rounded-xl text-black "} />
                    <Link href={"/"}
                        className={'w-full bg-emerald-700 mb-4 rounded-xl text-white block text-center py-2'}>
                        <span>اعمال فیلتر</span>
                    </Link>
                </section>
                <div className={'flex flex-col w-[73%]'}>
                    {/* section 2 */}
                    <section className={'w-full rounded-xl px-4 flex justify-between items-center bg-white h-[62px]'}>
                        <h3 className={`text-gray-700 text-xl ${Morabab.className}`}>فروشگاه</h3>
                        <Link href={"/"}
                            className={'w-44 h-[32px] bg-emerald-700 rounded-xl text-white block text-center'}>
                            <span>اعمال فیلتر</span>
                        </Link>
                    </section>
                    {/* products */}
                    <div className='products-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {currentItems.map((product) => (
                            <Product key={product.id} product={product} />
                        ))}
                    </div>
                    {/* next-privus */}
                    <section className={'mb-20 mt-5'}>
                        <div className={'w-full h-[47px] bg-white rounded-2xl flex items-center justify-center gap-x-6'}>
                            <Pagination 
                                currentPage={currentPage}
                                totalPages={Math.ceil(products.length / itemsPerPage)}
                                onPageChange={handlePageChange}
                            />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

