"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";

import localFont from "next/font/local";
import WeblogProduct from '@/components/WeblogProduct';
import Pagination from '@/components/Pagination';

const MorabaLight = localFont({
    src: "../../components/fonts/Morabba/woff2/Morabba-Light.woff2"
})
const Morabab = localFont({
    src: "../../components/fonts/Morabba/woff2/Morabba-Bold.woff2"
})
const Danam = localFont({
    src: "../../components/fonts/Dana/woff2/DanaFaNum-Medium.woff2"
})
const Danareg = localFont({
    src: "../../components/fonts/Dana/woff2/DanaFaNum-Regular.woff2"
})
const Danab = localFont({
    src: "../../components/fonts/Dana/woff2/DanaFaNum-DemiBold.woff2"
})
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import PrecisionManufacturingOutlinedIcon from '@mui/icons-material/PrecisionManufacturingOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import TheaterComedyOutlinedIcon from '@mui/icons-material/TheaterComedyOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import { log } from "next/dist/server/typescript/utils";

const products = [
    { id: 1, name: "روز گذشته شیائومی اعلام کرد که گوشی CIVI 2 را در تاریخ ۵ مهر رسما رونمایی خواهد کرد. اما حالا قبل از رونمایی این ساعت…", title: "جدیدترین رندرهای شیائومی طراحی جذاب آن", src: "/img/Blog/post-4-1.jpg", time: "6 دقیقه زمان مطالعه", art: "بازی ویدئویی", category: "بازی ویدئویی" },
    { id: 2, name: "اینطور که به نظر می‌رسد، مایکروسافت در نظر دارد رویداد مورد انتظار خود را به صورت حضوری و در تاریخ ۲۰ مهر برگزار کند…", title: "6 تا تکنولوژی که دبتر از رقبا به ایفون امده اند", src: "/img/Blog/Android-update-installing-840w-472h-768x488.jpg", time: "5 دقیقه زمان مطالعه", art: "علم تکنولوژِی", category: "علم تکنولوژِی" },
    { id: 3, name: "روز گذشته شیائومی اعلام کرد که گوشی CIVI 2 را در تاریخ ۵ مهر رسما رونمایی خواهد کرد. اما حالا قبل از رونمایی این ساعت…", title: "6 تا تکنولوژی که دبتر از رقبا به ایفون امده اند", src: "/img/Blog/blog-banner-2-1.png", time: "44 دقیقه زمان مطالعه", art: "بازی ویدئویی", category: "بازی ویدئویی" },
    { id: 4, name: "اینطور که به نظر می‌رسد، مایکروسافت در نظر دارد رویداد مورد انتظار خود را به صورت حضوری و در تاریخ ۲۰ مهر برگزار کند…", title: "6 تا تکنولوژی که دبتر از رقبا به ایفون امده اند", src: "/img/Blog/blog-new-6.jpg", time: "5 دقیقه زمان مطالعه", art: "علم تکنولوژِی", category: "علم تکنولوژِی" },
    { id: 5, name: "روز گذشته شیائومی اعلام کرد که گوشی CIVI 2 را در تاریخ ۵ مهر رسما رونمایی خواهد کرد. اما حالا قبل از رونمایی این ساعت…", title: "6 تا تکنولوژی که دبتر از رقبا به ایفون امده اند", src: "/img/Blog/blog-new-7.jpg", time: "2 دقیقه زمان مطالعه", art: "کتاب و ادبیات", category: "کتاب و ادبیات" },
    { id: 6, name: "اینطور که به نظر می‌رسد، مایکروسافت در نظر دارد رویداد مورد انتظار خود را به صورت حضوری و در تاریخ ۲۰ مهر برگزار کند…", title: "6 تا تکنولوژی که دبتر از رقبا به ایفون امده اند", src: "/img/Blog/Group-88-min.png", time: "5 دقیقه زمان مطالعه", art: "علم تکنولوژِی", category: "علم تکنولوژِی" },
    { id: 7, name: "روز گذشته شیائومی اعلام کرد که گوشی CIVI 2 را در تاریخ ۵ مهر رسما رونمایی خواهد کرد. اما حالا قبل از رونمایی این ساعت…", title: "6 تا تکنولوژی که دبتر از رقبا به ایفون امده اند", src: "/img/Blog/perfium-3.jpg", time: "9 دقیقه زمان مطالعه", art: "سبک زندگی", category: "سبک زندگی" },
    { id: 8, name: "اینطور که به نظر می‌رسد، مایکروسافت در نظر دارد رویداد مورد انتظار خود را به صورت حضوری و در تاریخ ۲۰ مهر برگزار کند…", title: "6 تا تکنولوژی که دبتر از رقبا به ایفون امده اند", src: "/img/Blog/post-1.jpg", time: "50 دقیقه زمان مطالعه", art: "علم تکنولوژِی", category: "علم تکنولوژِی" },
    { id: 9, name: "روز گذشته شیائومی اعلام کرد که گوشی CIVI 2 را در تاریخ ۵ مهر رسما رونمایی خواهد کرد. اما حالا قبل از رونمایی این ساعت…", title: "6 تا تکنولوژی که دبتر از رقبا به ایفون امده اند", src: "/img/Blog/post-2.jpg", time: "41 دقیقه زمان مطالعه", art: "علم تکنولوژِی", category: "علم تکنولوژِی" },
    { id: 10, name: "اینطور که به نظر می‌رسد، مایکروسافت در نظر دارد رویداد مورد انتظار خود را به صورت حضوری و در تاریخ ۲۰ مهر برگزار کند…", title: "6 تا تکنولوژی که دبتر از رقبا به ایفون امده اند", src: "/img/Blog/post-3-768x307.jpg", time: "25 دقیقه زمان مطالعه", art: "بازی ویدئویی", category: "بازی ویدئویی" },
    { id: 11, name: "روز گذشته شیائومی اعلام کرد که گوشی CIVI 2 را در تاریخ ۵ مهر رسما رونمایی خواهد کرد. اما حالا قبل از رونمایی این ساعت…", title: "6 تا تکنولوژی که دبتر از رقبا به ایفون امده اند", src: "/img/Blog/Android-update-installing-840w-472h-768x488.jpg", time: "15 دقیقه زمان مطالعه", art: "آنباکس محصولات" },
    { id: 12, name: "اینطور که به نظر می‌رسد، مایکروسافت در نظر دارد رویداد مورد انتظار خود را به صورت حضوری و در تاریخ ۲۰ مهر برگزار کند…", title: "6 تا تکنولوژی که دبتر از رقبا به ایفون امده اند", src: "/img/Blog/post-4-1.jpg", time: "35 دقیقه زمان مطالعه", art: "منتخب سردبیر", category: "منتخب سردبیر" },
    { id: 13, name: "اینطور که به نظر می‌رسد، مایکروسافت در نظر دارد رویداد مورد انتظار خود را به صورت حضوری و در تاریخ ۲۰ مهر برگزار کند…", title: "6 تا تکنولوژی که دبتر از رقبا به ایفون امده اند", src: "/img/Blog/post-1.jpg", time: "50 دقیقه زمان مطالعه", art: "علم تکنولوژِی", category: "هنر و سینما" },
    { id: 14, name: "روز گذشته شیائومی اعلام کرد که گوشی CIVI 2 را در تاریخ ۵ مهر رسما رونمایی خواهد کرد. اما حالا قبل از رونمایی این ساعت…", title: "6 تا تکنولوژی که دبتر از رقبا به ایفون امده اند", src: "/img/Blog/post-2.jpg", time: "41 دقیقه زمان مطالعه", art: "علم تکنولوژِی", category: "علم تکنولوژِی" },
    { id: 15, name: "اینطور که به نظر می‌رسد، مایکروسافت در نظر دارد رویداد مورد انتظار خود را به صورت حضوری و در تاریخ ۲۰ مهر برگزار کند…", title: "6 تا تکنولوژی که دبتر از رقبا به ایفون امده اند", src: "/img/Blog/post-3-768x307.jpg", time: "25 دقیقه زمان مطالعه", art: "بازی ویدئویی", category: "بازی ویدئویی" },
    { id: 16, name: "روز گذشته شیائومی اعلام کرد که گوشی CIVI 2 را در تاریخ ۵ مهر رسما رونمایی خواهد کرد. اما حالا قبل از رونمایی این ساعت…", title: "6 تا تکنولوژی که دبتر از رقبا به ایفون امده اند", src: "/img/Blog/Android-update-installing-840w-472h-768x488.jpg", time: "15 دقیقه زمان مطالعه", art: "آنباکس محصولات", category: "آنباکس محصولات" },
    { id: 17, name: "اینطور که به نظر می‌رسد، مایکروسافت در نظر دارد رویداد مورد انتظار خود را به صورت حضوری و در تاریخ ۲۰ مهر برگزار کند…", title: "6 تا تکنولوژی که دبتر از رقبا به ایفون امده اند", src: "/img/Blog/post-4-1.jpg", time: "35 دقیقه زمان مطالعه", art: "منتخب سردبیر", category: "منتخب سردبیر" },

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

export default function WeblogPage() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [shuffledProducts, setShuffledProducts] = useState([]);
    const itemsPerPagem = 8;

    useEffect(() => {
        setShuffledProducts(shuffleArray([...products]));
    }, []);

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 0 && pageNumber < Math.ceil(shuffledProducts.length / itemsPerPagem)) {
            setCurrentPage(pageNumber);
        }
    };


    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(0);
    };

    const filteredProducts = selectedCategory ? shuffledProducts.filter(product => product.category === selectedCategory) : shuffledProducts;

    const currentItems = filteredProducts.slice(
        currentPage * itemsPerPagem,
        (currentPage + 1) * itemsPerPagem
    );


    return (
        <div className={`${Danareg.className} w-[85%] m-auto mt-12`}>
            {/* section 1 */}
            <section className={'flex w-full'}>
                {/* side */}
                <div className={` ml-6 w-[20%] h-[367px] shadow-normal bg-white flex flex-col rounded-2xl p-4`}>
                    <div className={' px-[13px] py-[10px]'}>
                        <span onClick={() => handleCategoryChange("هنر و سینما")} style={{ cursor: 'pointer' }}>
                            <TheaterComedyOutlinedIcon className={'ml-2'} />
                            <span>هنر و سینما</span>
                        </span>
                    </div>
                    <div className={' px-[13px] py-[10px]'}>
                        <span onClick={() => handleCategoryChange("منتخب سردبیر")} style={{ cursor: 'pointer' }}>
                            <HomeWorkOutlinedIcon className={'ml-2'} />
                            <span>منتخب سردبیر</span>
                        </span>
                    </div>
                    <div className={' px-[13px] py-[10px]'}>
                        <span onClick={() => handleCategoryChange("کتاب و ادبیات")} style={{ cursor: 'pointer' }}>
                            <MenuBookOutlinedIcon className={'ml-2'} />
                            <span>کتاب و ادبیات</span>
                        </span>
                    </div>
                    <div className={' px-[13px] py-[10px]'}>
                        <span onClick={() => handleCategoryChange("علم تکنولوژِی")} style={{ cursor: 'pointer' }}>
                            <PrecisionManufacturingOutlinedIcon className={'ml-2'} />
                            <span>علم و تکنولوژی</span>
                        </span>
                    </div>
                    <div className={' px-[13px] py-[10px]'}>
                        <span onClick={() => handleCategoryChange("سبک زندگی")} style={{ cursor: 'pointer' }}>
                            <SpaOutlinedIcon className={'ml-2'} />
                            <span>سبک زندگی</span>
                        </span>
                    </div>
                    <div className={' px-[13px] py-[10px]'}>
                        <span onClick={() => handleCategoryChange("بازی ویدئویی")} style={{ cursor: 'pointer' }}>
                            <SportsEsportsOutlinedIcon className={'ml-2'} />
                            <span>بازی ویدئویی</span>
                        </span>
                    </div>
                    <div className={' px-[13px] py-[10px]'}>
                        <span onClick={() => handleCategoryChange("آنباکس محصولات")} style={{ cursor: 'pointer' }}>
                            <ProductionQuantityLimitsOutlinedIcon className={'ml-2'} />
                            <span>آنباکس محصولات</span>
                        </span>
                    </div>

                </div>
                {/* blog */}
                <div className={`${Danam.className} w-[80%]`}>
                    <div className={"w-full text-white"}>
                        <div className={"flex justify-around gap-x-5 mb-5"}>
                            <div
                                className={"flex flex-col justify-end items-center w-[50%] h-60 custom-css rounded-2xl"}>
                                <div className={'pb-3'}>
                                    <div className={"flex justify-center gap-x-5"}>
                                        <div className={'text-xs'}>
                                            <CalendarMonthOutlinedIcon className={'text-xs'} />
                                            <span> 16 مهر 1403 </span>
                                        </div>
                                        <div className={'text-xs'}>
                                            <SmsOutlinedIcon className={'text-xs'} />
                                            <span> 2 دیدگاه </span>
                                        </div>
                                    </div>
                                    <Link href={"/"} className={'text-base'}>
                                        جدیدترین رندرهای شیائومی طراحی جذاب آن را نشان می‌دهند
                                    </Link>
                                </div>
                            </div>
                            <div
                                className={"flex flex-col justify-end items-center w-[50%] h-60 custom-css2 rounded-2xl"}>
                                <div className={'pb-3'}>
                                    <div className={"flex justify-center gap-x-5"}>
                                        <div className={'text-xs'}>
                                            <CalendarMonthOutlinedIcon className={'text-xs'} />
                                            <span> 16 مهر 1403 </span>
                                        </div>
                                        <div className={'text-xs'}>
                                            <SmsOutlinedIcon className={'text-xs'} />
                                            <span> 2 دیدگاه </span>
                                        </div>
                                    </div>
                                    <Link href={"/"} className={'text-base'}>
                                        رویداد رونمایی از سرفیس‌ها در تاریخ ۲۰ مهر برگزار می‌شود
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={"flex justify-between gap-x-3"}>
                            <div
                                className={"flex flex-col justify-end items-center w-[360px] h-60 py-4 rounded-2xl custom-css3"}>
                                <div className={'pb-3'}>
                                    <div className={"flex justify-center gap-x-5"}>
                                        <div className={'text-xs'}>
                                            <CalendarMonthOutlinedIcon className={'text-xs'} />
                                            <span> 16 مهر 1403 </span>
                                        </div>
                                        <div className={'text-xs'}>
                                            <SmsOutlinedIcon className={'text-xs'} />
                                            <span> 2 دیدگاه </span>
                                        </div>
                                    </div>
                                    <Link href={"/"} className={'text-base'}>
                                        ۶ تکنولوژی که دیرتر از رقبا به آیفون آمده‌اند
                                    </Link>
                                </div>
                            </div>
                            <div
                                className={"flex flex-col justify-end items-center w-[360px] h-60 py-4 rounded-2xl custom-css4"}>
                                <div className={'pb-3'}>
                                    <div className={"flex justify-center gap-x-5"}>
                                        <div className={'text-xs'}>
                                            <CalendarMonthOutlinedIcon className={'text-xs'} />
                                            <span> 16 مهر 1403 </span>
                                        </div>
                                        <div className={'text-xs'}>
                                            <SmsOutlinedIcon className={'text-xs'} />
                                            <span> 2 دیدگاه </span>
                                        </div>
                                    </div>
                                    <Link href={"/"} className={'text-base'}>
                                        ۶ تکنولوژی که دیرتر از رقبا به آیفون آمده‌اند
                                    </Link>
                                </div>
                            </div>
                            <div
                                className={"flex flex-col justify-end items-center w-[360px] h-60 py-4 rounded-2xl custom-css5"}>
                                <div className={'pb-3'}>
                                    <div className={"flex justify-center gap-x-5"}>
                                        <div className={'text-xs'}>
                                            <CalendarMonthOutlinedIcon className={'text-xs'} />
                                            <span> 16 مهر 1403 </span>
                                        </div>
                                        <div className={'text-xs'}>
                                            <SmsOutlinedIcon className={'text-xs'} />
                                            <span> 2 دیدگاه </span>
                                        </div>
                                    </div>
                                    <Link href={"/"} className={'text-base'}>
                                        ۶ تکنولوژی که دیرتر از رقبا به آیفون آمده‌اند
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            { /* section 2 */}
            <section className={'mt-24'}>
                <div className={'flex items-center gap-x-2'}>
                    <Image src={'/img/icon.svg'} alt={'dhd'} width={'38'} height={'38'}></Image>
                    <h4 className={`${Morabab.className} text-4xl`}>مطالب وبلاگ</h4>
                    <Image className={'mt-5'} src={'/img/brag.svg'} alt={'ee'} width={'36'} height={'36'}></Image>
                </div>
            </section>
            { /* section 3 */}
            <section className={'mt-8 mb-10'}>
                <div className={'products-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'}>
                    {currentItems.map((product) => (
                        <WeblogProduct key={product.id} product={product} />
                    ))}
                </div>
            </section>
            { /* section 4 */}
            <section>
                <div className={'w-full h-[47px] bg-white rounded-2xl flex items-center justify-center gap-x-6'}>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={Math.ceil(shuffledProducts.length / itemsPerPagem)}
                        onPageChange={handlePageChange}
                    />
                </div>
            </section>
            { /* section 5 */}
            <section className={'mt-24 mb-10'}>
                <div className={'w-full'}>
                    <Image className="w-full" width={'10000'} height={'10000'}
                        src="/img/Blog/blog-banner-2-1.png"
                        alt="c" />
                </div>
            </section>
        </div>
    )
}