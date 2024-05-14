import React from 'react';
import Image from "next/image";
import Link from "next/link";

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
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

export default function WeblogPage() {
    return (
        <div className={"w-[85%] m-auto mt-12"}>
            <section>
                {/* side */}
                <div className={" w-72 h-[367px] shadow-normal bg-white flex flex-col rounded-2xl p-4"}>
                    <div className={' px-[13px] py-[10px]'}>
                        <Link  href={"/"}>
                            <TheaterComedyOutlinedIcon className={'ml-2'}/>
                            <span>هنر و سینما</span>
                        </Link>
                    </div>
                    <div className={' px-[13px] py-[10px]'}>
                        <Link href={"/"}>
                            <HomeWorkOutlinedIcon className={'ml-2'}/>
                            <span>منتخب سردبیر</span>
                        </Link>
                    </div>
                    <div  className={' px-[13px] py-[10px]'} >
                        <Link href={"/"}>
                            <MenuBookOutlinedIcon className={'ml-2'}/>
                            <span>کتاب و ادبیات</span>
                        </Link>
                    </div>
                    <div className={' px-[13px] py-[10px]'} >
                        <Link href={"/"}>
                            <PrecisionManufacturingOutlinedIcon className={'ml-2'}/>
                            <span>علم و تکنولوژی</span>
                        </Link>
                    </div>
                    <div className={' px-[13px] py-[10px]'}>
                        <Link  href={"/"}>
                            <SpaOutlinedIcon className={'ml-2'}/>
                            <span>سبک زندگی</span>
                        </Link>
                    </div>
                    <div className={' px-[13px] py-[10px]'} >
                        <Link href={"/"}>
                            <SportsEsportsOutlinedIcon className={'ml-2'}/>
                            <span>بازی ویدئویی</span>
                        </Link>
                    </div>
                    <div className={' px-[13px] py-[10px]'}>
                        <Link href={"/"}>
                            <ProductionQuantityLimitsOutlinedIcon className={'ml-2'}/>
                            <span>آنباکس محصولات</span>
                        </Link>
                    </div>
                </div>
                {/* blog */}
                <div className={''}>
                    <div>
                        <Image src={'../../../public/img/Blog/blog-new-7.jpg'} alt={"s"}
                    </div>
                </div>
            </section>
        </div>
    )
}
