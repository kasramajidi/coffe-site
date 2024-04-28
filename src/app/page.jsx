import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import CoffeeIcon from '@mui/icons-material/Coffee';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

const links = [
  { url: "/", title: "Home" },
  { url: "/account", title: "Account" },
  { url: "/cart", title: "Cart" },
  { url: "/shop", title: "Shop" },
  { url: "/weblog", title: "Weblog" },
  { url: "/order", title: "Order" },
  { url: "/callus", title: "Callus" },
  { url: "/aboutus", title: "Aboutus" },
]

export default function page() {
  return (
    <div>
      {/* HEADER */}
      <div>
        <Image src="./img/Logo.svg" alt='' width={30} height={30} />
        <Link href={"/"}>
           <span>صفحه اصلی </span><HomeOutlinedIcon/>
        </Link>
        <Link href={"/shop"}>
           <span>فروشگاه </span><StorefrontOutlinedIcon/>
        </Link>
        <Link href={"/order"}>
           <span>سفارش قهوه </span><CoffeeIcon/>
        </Link>
        <Link href={"/weblog"}>
           <span>وبلاگ </span><FeedOutlinedIcon/>
        </Link>
        <Link href={"/aboutus"}>
           <span>درباره ما </span><InfoOutlinedIcon/>
        </Link>
        <Link href={"/callus"}>
           <span>تماس با ما </span><ContactPhoneOutlinedIcon/>
        </Link>
      </div>
      <div>
        <SearchOutlinedIcon/> <input type="search" />
        <Link href={"/account"}>
          <PersonOutlinedIcon/>
        </Link>
        <Link href={"/cart"}>
          <ShoppingBasketOutlinedIcon/>
        </Link>
      </div>
      {/* MAIN */}
    </div> 
  )
}

