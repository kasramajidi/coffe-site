import React from 'react';


import Image from 'next/image';

import localFont from "next/font/local";
const Danab = localFont({
    src: "../components/fonts/Dana/woff2/DanaFaNum-DemiBold.woff2"
})

import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Link from 'next/link';

export default function Articles() {
    return (
        <div>
            <div className={'flex justify-between mt-10'}>
                <div className={'bg-white w-[301px] h-[356px] rounded-2xl p-3'}>
                    <Image className="h-[200px] w-[281px] rounded-2xl" width={'500'} height={'300'}
                        src="/img/Blog/post-3-768x307.jpg"
                        alt="c"/>
                    <Link href={'/'} className={`${Danab.className} line-clamp-1 text-base mt-4`}>
                        جدیدترین رندرهای شیائومی طراحی جذاب آن
                    </Link>
                    <p className={'text-xs line-clamp-2 pt-[10px]'}>روز گذشته شیائومی اعلام کرد که گوشی
                        CIVI 2
                        را در
                        تاریخ ۵ مهر رسما رونمایی خواهد کرد. اما حالا قبل
                        از رونمایی این ساعت…</p>
                    <div className={'flex justify-between items-center mt-5'}>
                        <div className={'text-sm'}>
                            <CalendarMonthOutlinedIcon className={'text-sm'} />
                            <span> 16 مهر 1403 </span>
                        </div>
                        <Link href={'/'}
                            className={'text-xs bg-emerald-600 text-white inline-block rounded-[6px] px-[11px] py-[5px]'}>مطالعه
                            کنید
                        </Link>
                    </div>
                </div>
                <div className={'bg-white w-[301px] h-[356px] rounded-2xl p-3'}>
                    <Image className="h-[200px] w-[281px] rounded-2xl" width={'500'} height={'300'}
                        src="/img/Blog/post-1.jpg"
                        alt="c" />
                    <Link href={'/'} className={`${Danab.className} line-clamp-1 text-base mt-4`}>
                        جدیدترین رندرهای شیائومی طراحی جذاب آن
                    </Link>
                    <p className={'text-xs line-clamp-2 pt-[10px]'}>روز گذشته شیائومی اعلام کرد که گوشی
                        CIVI 2
                        را در
                        تاریخ ۵ مهر رسما رونمایی خواهد کرد. اما حالا قبل
                        از رونمایی این ساعت…</p>
                    <div className={'flex justify-between items-center mt-5'}>
                        <div className={'text-sm'}>
                            <CalendarMonthOutlinedIcon className={'text-sm'} />
                            <span> 16 مهر 1403 </span>
                        </div>
                        <Link href={'/'}
                            className={'text-xs bg-emerald-600 text-white inline-block rounded-[6px] px-[11px] py-[5px]'}>مطالعه
                            کنید
                        </Link>
                    </div>
                </div>
                <div className={'bg-white w-[301px] h-[356px] rounded-2xl p-3'}>
                    <Image className="h-[200px] w-[281px] rounded-2xl" width={'500'} height={'300'}
                        src="/img/Blog/post-2.jpg"
                        alt="c" />
                    <Link href={'/'} className={`${Danab.className} line-clamp-1 text-base mt-4`}>
                        جدیدترین رندرهای شیائومی طراحی جذاب آن
                    </Link>
                    <p className={'text-xs line-clamp-2 pt-[10px]'}>روز گذشته شیائومی اعلام کرد که گوشی
                        CIVI 2
                        را در
                        تاریخ ۵ مهر رسما رونمایی خواهد کرد. اما حالا قبل
                        از رونمایی این ساعت…</p>
                    <div className={'flex justify-between items-center mt-5'}>
                        <div className={'text-sm'}>
                            <CalendarMonthOutlinedIcon className={'text-sm'} />
                            <span> 16 مهر 1403 </span>
                        </div>
                        <Link href={'/'}
                            className={'text-xs bg-emerald-600 text-white inline-block rounded-[6px] px-[11px] py-[5px]'}>مطالعه
                            کنید</Link>
                    </div>
                </div>
                <div className={'bg-white w-[301px] h-[356px] rounded-2xl p-3'}>
                    <Image className="h-[200px] w-[281px] rounded-2xl" width={'500'} height={'300'}
                        src="/img/Blog/post-4-1.jpg"
                        alt="c" />
                    <Link href={'/'} className={`${Danab.className} line-clamp-1 text-base mt-4`}>
                        جدیدترین رندرهای شیائومی طراحی جذاب آن
                    </Link>
                    <p className={'text-xs line-clamp-2 pt-[10px]'}>روز گذشته شیائومی اعلام کرد که گوشی
                        CIVI 2
                        را در
                        تاریخ ۵ مهر رسما رونمایی خواهد کرد. اما حالا قبل
                        از رونمایی این ساعت…</p>
                    <div className={'flex justify-between items-center mt-5'}>
                        <div className={'text-sm'}>
                            <CalendarMonthOutlinedIcon className={'text-sm'} />
                            <span> 16 مهر 1403 </span>
                        </div>
                        <Link href={'/'}
                            className={'text-xs bg-emerald-600 text-white inline-block rounded-[6px] px-[11px] py-[5px]'}>مطالعه
                            کنید
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
