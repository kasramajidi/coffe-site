import React from "react";
import Image from "next/image";
import Link from "next/link";
{/* FONT */}

import localFont from "next/font/local"

const testFont = localFont({
    src: "./fonts/Dana/woff2/DanaFaNum-Medium.woff2"
})

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import CoffeeIcon from "@mui/icons-material/Coffee";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";

const links = [
    {url: "/", title: "Home"},
    {url: "./account", title: "Account"},
    {url: "./cart", title: "Cart"},
    {url: "./shop", title: "Shop"},
    {url: "./weblog", title: "Weblog"},
    {url: "./order", title: "Order"},
    {url: "./callUs", title: "CallUs"},
    {url: "./aboutUS", title: "AboutUS"},
];

export default function navbar() {
    return (
        <div>
            {/* HEADER */}
            <div className=" rounded-[50px] bg-zinc-200 flex justify-around items-center  w-[85%] h-20 m-auto mt-4">
                {/* nav and logo */}
                <div className="flex items-center  group-hover:bg-sky-400">
                    <Image src="./img/Logo.svg" alt="" width={50} height={50}/>
                    <Link className={"px-4 transition-all hover:text-emerald-600"} href={"/"}>
                        <HomeOutlinedIcon className={"text-emerald-600"}/>
                        <span className={testFont.className}> صفحه اصلی </span>
                    </Link>
                    <Link className={"px-4 transition-all hover:text-emerald-600"} href={"/shop"}>
                        <StorefrontOutlinedIcon className={"text-emerald-600"}/>
                        <span className={testFont.className}> فروشگاه </span>
                    </Link>
                    <Link className={"px-4 transition-all hover:text-emerald-600"} href={"/order"}>
                        <CoffeeIcon className={"text-emerald-600"}/>
                        <span className={testFont.className}> سفارش قهوه </span>
                    </Link>
                    <Link className={"px-4 transition-all hover:text-emerald-600"} href={"/weblog"}>
                        <FeedOutlinedIcon className={"text-emerald-600"}/>
                        <span className={testFont.className}> وبلاگ </span>
                    </Link>
                    <Link className={"px-4 transition-all hover:text-emerald-600"} href={"/aboutUS"}>
                        <InfoOutlinedIcon className={"text-emerald-600"}/>
                        <span className={testFont.className}> درباره ما </span>
                    </Link>
                    <Link className={"px-4 transition-all hover:text-emerald-600"} href={"/callUs"}>
                        <ContactPhoneOutlinedIcon className={"text-emerald-600"}/>
                        <span className={testFont.className}> تماس با ما </span>
                    </Link>
                </div>

                {/* search and btn */}
                <div className=" flex items-center gap-5">
                    <div className={"relative flex items-center"}>
                        <SearchOutlinedIcon className={"absolute top-[11px] bottom-0 left-0 right-[90%]"}/>
                        <input type="search" placeholder={"جستجو..."}
                               className={"h-11 w-80 gap-y-2 pr-2 rounded-[20px]"}/>
                    </div>
                    <Link className={"text-white bg-yellow-950 p-2 rounded-full"} href={"/account"}>
                        <PersonOutlinedIcon/>
                    </Link>
                    <Link className={"text-white bg-yellow-950 p-2 rounded-full"} href={"/cart"}>
                        <ShoppingBasketOutlinedIcon/>
                    </Link>
                </div>
            </div>
            {/* MAIN */}
        </div>
    );
}
