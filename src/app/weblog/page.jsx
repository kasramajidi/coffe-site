import React from 'react';
import Image from "next/image";
import Link from "next/link";

import localFont from "next/font/local";

const Media = localFont({
    src: "../../components/fonts/Morabba/woff2/Morabba-Light.woff2"
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
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import {log} from "next/dist/server/typescript/utils";

export default function WeblogPage() {
    return (
        <div className={"w-[85%] m-auto mt-12"}>
            {/* section 1 */}
            <section className={'flex w-full'}>
                {/* side */}
                <div className={`${Media.className} ml-6 w-[20%] h-[367px] shadow-normal bg-white flex flex-col rounded-2xl p-4`}>
                    <div className={' px-[13px] py-[10px]'}>
                        <Link href={"/"}>
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
                    <div className={' px-[13px] py-[10px]'}>
                        <Link href={"/"}>
                            <MenuBookOutlinedIcon className={'ml-2'}/>
                            <span>کتاب و ادبیات</span>
                        </Link>
                    </div>
                    <div className={' px-[13px] py-[10px]'}>
                        <Link href={"/"}>
                            <PrecisionManufacturingOutlinedIcon className={'ml-2'}/>
                            <span>علم و تکنولوژی</span>
                        </Link>
                    </div>
                    <div className={' px-[13px] py-[10px]'}>
                        <Link href={"/"}>
                            <SpaOutlinedIcon className={'ml-2'}/>
                            <span>سبک زندگی</span>
                        </Link>
                    </div>
                    <div className={' px-[13px] py-[10px]'}>
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
                <div className={'w-[80%]'}>
                    <div className={"w-full text-white"}>
                        <div className={"flex justify-around gap-x-5 mb-5"}>
                            <div
                                className={"flex flex-col justify-end items-center w-[50%] h-60 custom-css rounded-2xl"}>
                                <div className={'pb-3'}>
                                    <div className={"flex justify-center gap-x-5"}>
                                        <div className={'text-xs'}>
                                            <CalendarMonthOutlinedIcon className={'text-xs'}/>
                                            <span> 16 مهر 1403 </span>
                                        </div>
                                        <div className={'text-xs'}>
                                            <SmsOutlinedIcon className={'text-xs'}/>
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
                                            <CalendarMonthOutlinedIcon className={'text-xs'}/>
                                            <span> 16 مهر 1403 </span>
                                        </div>
                                        <div className={'text-xs'}>
                                            <SmsOutlinedIcon className={'text-xs'}/>
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
                                            <CalendarMonthOutlinedIcon className={'text-xs'}/>
                                            <span> 16 مهر 1403 </span>
                                        </div>
                                        <div className={'text-xs'}>
                                            <SmsOutlinedIcon className={'text-xs'}/>
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
                                            <CalendarMonthOutlinedIcon className={'text-xs'}/>
                                            <span> 16 مهر 1403 </span>
                                        </div>
                                        <div className={'text-xs'}>
                                            <SmsOutlinedIcon className={'text-xs'}/>
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
                                            <CalendarMonthOutlinedIcon className={'text-xs'}/>
                                            <span> 16 مهر 1403 </span>
                                        </div>
                                        <div className={'text-xs'}>
                                            <SmsOutlinedIcon className={'text-xs'}/>
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
                    <h4 className={'text-4xl'}>مطالب وبلاگ</h4>
                    <Image className={'mt-5'} src={'/img/brag.svg'} alt={'ee'} width={'36'} height={'36'}></Image>
                </div>
            </section>
            { /* section 3 */}
            <section className={'grid grid-cols-4 mt-8 mb-10'}>
                <div className={'bg-white mt-8 w-[300px] rounded-lg'}>
                    <div className={'relative'}>
                        <Image className="h-56 w-[300px] rounded-t-lg" width={'300'} height={'200'}
                               src="/img/Blog/post-4-1.jpg"
                               alt="c"/>
                        <Link href={'/'}
                              className={'absolute bottom-3.5 right-3.5 bg-emerald-600 text-white inline-block rounded-[6px] px-[11px] py-[3px]'}>بازی
                            ویدئویی </Link>
                    </div>
                    <div className={'pr-2 pt-2 text-gray-400 text-sm mr-3'}>
                        <AccessTimeOutlinedIcon className={'text-sm'}/>
                        <span className={'ml-2'}>6 دقیقه زمان مطالعه</span>
                    </div>
                    <div className={'mt-2'}>
                        <Link href={'/'} className={'text-base'}>
                            جدیدترین رندرهای شیائومی طراحی جذاب آن
                        </Link>
                        <p className={'line-clamp-2 px-4 pt-[10px]'}>روز گذشته شیائومی اعلام کرد که گوشی CIVI 2 را در
                            تاریخ ۵ مهر رسما رونمایی خواهد کرد. اما حالا قبل
                            از رونمایی این ساعت…</p>
                    </div>
                    <div className={'flex justify-between mr-3  mt-8 mb-7'}>
                        <Image src={'/img/a0513619c230370bf5ae6743a3dc3337.png'} className={'rounded-full'} width={'40'}
                               height={'40'}
                               alt={'d'}></Image>
                        <div className={'flex flex-col'}>
                            <span>طراح سایت</span>
                            <span>2 سال قبل</span>
                        </div>
                        <div
                            className={'bg-sky-100 hover:bg-green-900 transition-all text-zinc-500 hover:text-white flex items-center justify-center rounded-r-lg w-[65px]'}>
                            <ArrowBackOutlinedIcon/>
                        </div>
                    </div>
                </div>
                <div className={'bg-white mt-8 w-[300px] rounded-lg'}>
                    <div className={'relative'}>
                        <Image className="h-56 w-[300px] rounded-t-lg" width={'300'} height={'200'}
                               src="/img/Blog/post-4-1.jpg"
                               alt="c"/>
                        <Link href={'/'}
                              className={'absolute bottom-3.5 right-3.5 bg-emerald-600 text-white inline-block rounded-[6px] px-[11px] py-[3px]'}>بازی
                            ویدئویی </Link>
                    </div>
                    <div className={'pr-2 pt-2 text-gray-400 text-sm mr-3'}>
                        <AccessTimeOutlinedIcon className={'text-sm'}/>
                        <span className={'ml-2'}>6 دقیقه زمان مطالعه</span>
                    </div>
                    <div className={'mt-2'}>
                        <Link href={'/'} className={'text-base'}>
                            جدیدترین رندرهای شیائومی طراحی جذاب آن
                        </Link>
                        <p className={'line-clamp-2 px-4 pt-[10px]'}>روز گذشته شیائومی اعلام کرد که گوشی CIVI 2 را در
                            تاریخ ۵ مهر رسما رونمایی خواهد کرد. اما حالا قبل
                            از رونمایی این ساعت…</p>
                    </div>
                    <div className={'flex justify-between mr-3  mt-8 mb-7'}>
                        <Image src={'/img/a0513619c230370bf5ae6743a3dc3337.png'} className={'rounded-full'} width={'40'}
                               height={'40'}
                               alt={'d'}></Image>
                        <div className={'flex flex-col'}>
                            <span>طراح سایت</span>
                            <span>2 سال قبل</span>
                        </div>
                        <div
                            className={'bg-sky-100 hover:bg-green-900 transition-all text-zinc-500 hover:text-white flex items-center justify-center rounded-r-lg w-[65px]'}>
                            <ArrowBackOutlinedIcon/>
                        </div>
                    </div>
                </div>
                <div className={'bg-white mt-8 w-[300px] rounded-lg'}>
                    <div className={'relative'}>
                        <Image className="h-56 w-[300px] rounded-t-lg" width={'300'} height={'200'}
                               src="/img/Blog/post-4-1.jpg"
                               alt="c"/>
                        <Link href={'/'}
                              className={'absolute bottom-3.5 right-3.5 bg-emerald-600 text-white inline-block rounded-[6px] px-[11px] py-[3px]'}>بازی
                            ویدئویی </Link>
                    </div>
                    <div className={'pr-2 pt-2 text-gray-400 text-sm mr-3'}>
                        <AccessTimeOutlinedIcon className={'text-sm'}/>
                        <span className={'ml-2'}>6 دقیقه زمان مطالعه</span>
                    </div>
                    <div className={'mt-2'}>
                        <Link href={'/'} className={'text-base'}>
                            جدیدترین رندرهای شیائومی طراحی جذاب آن
                        </Link>
                        <p className={'line-clamp-2 px-4 pt-[10px]'}>روز گذشته شیائومی اعلام کرد که گوشی CIVI 2 را در
                            تاریخ ۵ مهر رسما رونمایی خواهد کرد. اما حالا قبل
                            از رونمایی این ساعت…</p>
                    </div>
                    <div className={'flex justify-between mr-3  mt-8 mb-7'}>
                        <Image src={'/img/a0513619c230370bf5ae6743a3dc3337.png'} className={'rounded-full'} width={'40'}
                               height={'40'}
                               alt={'d'}></Image>
                        <div className={'flex flex-col'}>
                            <span>طراح سایت</span>
                            <span>2 سال قبل</span>
                        </div>
                        <div
                            className={'bg-sky-100 hover:bg-green-900 transition-all text-zinc-500 hover:text-white flex items-center justify-center rounded-r-lg w-[65px]'}>
                            <ArrowBackOutlinedIcon/>
                        </div>
                    </div>
                </div>
                <div className={'bg-white mt-8 w-[300px] rounded-lg'}>
                    <div className={'relative'}>
                        <Image className="h-56 w-[300px] rounded-t-lg" width={'300'} height={'200'}
                               src="/img/Blog/post-4-1.jpg"
                               alt="c"/>
                        <Link href={'/'}
                              className={'absolute bottom-3.5 right-3.5 bg-emerald-600 text-white inline-block rounded-[6px] px-[11px] py-[3px]'}>بازی
                            ویدئویی </Link>
                    </div>
                    <div className={'pr-2 pt-2 text-gray-400 text-sm mr-3'}>
                        <AccessTimeOutlinedIcon className={'text-sm'}/>
                        <span className={'ml-2'}>6 دقیقه زمان مطالعه</span>
                    </div>
                    <div className={'mt-2'}>
                        <Link href={'/'} className={'text-base'}>
                            جدیدترین رندرهای شیائومی طراحی جذاب آن
                        </Link>
                        <p className={'line-clamp-2 px-4 pt-[10px]'}>روز گذشته شیائومی اعلام کرد که گوشی CIVI 2 را در
                            تاریخ ۵ مهر رسما رونمایی خواهد کرد. اما حالا قبل
                            از رونمایی این ساعت…</p>
                    </div>
                    <div className={'flex justify-between mr-3  mt-8 mb-7'}>
                        <Image src={'/img/a0513619c230370bf5ae6743a3dc3337.png'} className={'rounded-full'} width={'40'}
                               height={'40'}
                               alt={'d'}></Image>
                        <div className={'flex flex-col'}>
                            <span>طراح سایت</span>
                            <span>2 سال قبل</span>
                        </div>
                        <div
                            className={'bg-sky-100 hover:bg-green-900 transition-all text-zinc-500 hover:text-white flex items-center justify-center rounded-r-lg w-[65px]'}>
                            <ArrowBackOutlinedIcon/>
                        </div>
                    </div>
                </div>
                <div className={'bg-white mt-8 w-[300px] rounded-lg'}>
                    <div className={'relative'}>
                        <Image className="h-56 w-[300px] rounded-t-lg" width={'300'} height={'200'}
                               src="/img/Blog/post-4-1.jpg"
                               alt="c"/>
                        <Link href={'/'}
                              className={'absolute bottom-3.5 right-3.5 bg-emerald-600 text-white inline-block rounded-[6px] px-[11px] py-[3px]'}>بازی
                            ویدئویی </Link>
                    </div>
                    <div className={'pr-2 pt-2 text-gray-400 text-sm mr-3'}>
                        <AccessTimeOutlinedIcon className={'text-sm'}/>
                        <span className={'ml-2'}>6 دقیقه زمان مطالعه</span>
                    </div>
                    <div className={'mt-2'}>
                        <Link href={'/'} className={'text-base'}>
                            جدیدترین رندرهای شیائومی طراحی جذاب آن
                        </Link>
                        <p className={'line-clamp-2 px-4 pt-[10px]'}>روز گذشته شیائومی اعلام کرد که گوشی CIVI 2 را در
                            تاریخ ۵ مهر رسما رونمایی خواهد کرد. اما حالا قبل
                            از رونمایی این ساعت…</p>
                    </div>
                    <div className={'flex justify-between mr-3  mt-8 mb-7'}>
                        <Image src={'/img/a0513619c230370bf5ae6743a3dc3337.png'} className={'rounded-full'} width={'40'}
                               height={'40'}
                               alt={'d'}></Image>
                        <div className={'flex flex-col'}>
                            <span>طراح سایت</span>
                            <span>2 سال قبل</span>
                        </div>
                        <div
                            className={'bg-sky-100 hover:bg-green-900 transition-all text-zinc-500 hover:text-white flex items-center justify-center rounded-r-lg w-[65px]'}>
                            <ArrowBackOutlinedIcon/>
                        </div>
                    </div>
                </div>
                <div className={'bg-white mt-8 w-[300px] rounded-lg'}>
                    <div className={'relative'}>
                        <Image className="h-56 w-[300px] rounded-t-lg" width={'300'} height={'200'}
                               src="/img/Blog/post-4-1.jpg"
                               alt="c"/>
                        <Link href={'/'}
                              className={'absolute bottom-3.5 right-3.5 bg-emerald-600 text-white inline-block rounded-[6px] px-[11px] py-[3px]'}>بازی
                            ویدئویی </Link>
                    </div>
                    <div className={'pr-2 pt-2 text-gray-400 text-sm mr-3'}>
                        <AccessTimeOutlinedIcon className={'text-sm'}/>
                        <span className={'ml-2'}>6 دقیقه زمان مطالعه</span>
                    </div>
                    <div className={'mt-2'}>
                        <Link href={'/'} className={'text-base'}>
                            جدیدترین رندرهای شیائومی طراحی جذاب آن
                        </Link>
                        <p className={'line-clamp-2 px-4 pt-[10px]'}>روز گذشته شیائومی اعلام کرد که گوشی CIVI 2 را در
                            تاریخ ۵ مهر رسما رونمایی خواهد کرد. اما حالا قبل
                            از رونمایی این ساعت…</p>
                    </div>
                    <div className={'flex justify-between mr-3  mt-8 mb-7'}>
                        <Image src={'/img/a0513619c230370bf5ae6743a3dc3337.png'} className={'rounded-full'} width={'40'}
                               height={'40'}
                               alt={'d'}></Image>
                        <div className={'flex flex-col'}>
                            <span>طراح سایت</span>
                            <span>2 سال قبل</span>
                        </div>
                        <div
                            className={'bg-sky-100 hover:bg-green-900 transition-all text-zinc-500 hover:text-white flex items-center justify-center rounded-r-lg w-[65px]'}>
                            <ArrowBackOutlinedIcon/>
                        </div>
                    </div>
                </div>
                <div className={'bg-white mt-8 w-[300px] rounded-lg'}>
                    <div className={'relative'}>
                        <Image className="h-56 w-[300px] rounded-t-lg" width={'300'} height={'200'}
                               src="/img/Blog/post-4-1.jpg"
                               alt="c"/>
                        <Link href={'/'}
                              className={'absolute bottom-3.5 right-3.5 bg-emerald-600 text-white inline-block rounded-[6px] px-[11px] py-[3px]'}>بازی
                            ویدئویی </Link>
                    </div>
                    <div className={'pr-2 pt-2 text-gray-400 text-sm mr-3'}>
                        <AccessTimeOutlinedIcon className={'text-sm'}/>
                        <span className={'ml-2'}>6 دقیقه زمان مطالعه</span>
                    </div>
                    <div className={'mt-2'}>
                        <Link href={'/'} className={'text-base'}>
                            جدیدترین رندرهای شیائومی طراحی جذاب آن
                        </Link>
                        <p className={'line-clamp-2 px-4 pt-[10px]'}>روز گذشته شیائومی اعلام کرد که گوشی CIVI 2 را در
                            تاریخ ۵ مهر رسما رونمایی خواهد کرد. اما حالا قبل
                            از رونمایی این ساعت…</p>
                    </div>
                    <div className={'flex justify-between mr-3  mt-8 mb-7'}>
                        <Image src={'/img/a0513619c230370bf5ae6743a3dc3337.png'} className={'rounded-full'} width={'40'}
                               height={'40'}
                               alt={'d'}></Image>
                        <div className={'flex flex-col'}>
                            <span>طراح سایت</span>
                            <span>2 سال قبل</span>
                        </div>
                        <div
                            className={'bg-sky-100 hover:bg-green-900 transition-all text-zinc-500 hover:text-white flex items-center justify-center rounded-r-lg w-[65px]'}>
                            <ArrowBackOutlinedIcon/>
                        </div>
                    </div>
                </div>
                <div className={'bg-white mt-8 w-[300px] rounded-lg'}>
                    <div className={'relative'}>
                        <Image className="h-56 w-[300px] rounded-t-lg" width={'300'} height={'200'}
                               src="/img/Blog/post-4-1.jpg"
                               alt="c"/>
                        <Link href={'/'}
                              className={'absolute bottom-3.5 right-3.5 bg-emerald-600 text-white inline-block rounded-[6px] px-[11px] py-[3px]'}>بازی
                            ویدئویی </Link>
                    </div>
                    <div className={'pr-2 pt-2 text-gray-400 text-sm mr-3'}>
                        <AccessTimeOutlinedIcon className={'text-sm'}/>
                        <span className={'ml-2'}>6 دقیقه زمان مطالعه</span>
                    </div>
                    <div className={'mt-2'}>
                        <Link href={'/'} className={'text-base'}>
                            جدیدترین رندرهای شیائومی طراحی جذاب آن
                        </Link>
                        <p className={'line-clamp-2 px-4 pt-[10px]'}>روز گذشته شیائومی اعلام کرد که گوشی CIVI 2 را در
                            تاریخ ۵ مهر رسما رونمایی خواهد کرد. اما حالا قبل
                            از رونمایی این ساعت…</p>
                    </div>
                    <div className={'flex justify-between mr-3  mt-8 mb-7'}>
                        <Image src={'/img/a0513619c230370bf5ae6743a3dc3337.png'} className={'rounded-full'} width={'40'}
                               height={'40'}
                               alt={'d'}></Image>
                        <div className={'flex flex-col'}>
                            <span>طراح سایت</span>
                            <span>2 سال قبل</span>
                        </div>
                        <div
                            className={'bg-sky-100 hover:bg-green-900 transition-all text-zinc-500 hover:text-white flex items-center justify-center rounded-r-lg w-[65px]'}>
                            <ArrowBackOutlinedIcon/>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

