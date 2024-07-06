import React from 'react';
import Image from "next/image";
import Link from "next/link";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import localFont from "next/font/local";
const Danab = localFont({
    src: "../components/fonts/Dana/woff2/DanaFaNum-DemiBold.woff2"
})

export default function WeblogProduct({product}) {
    return (
        <div className='flex justify-between'>
            <div className={'bg-white mt-8 w-[300px] rounded-lg'}>
                <div className={'relative'}>
                    <Image className="h-56 w-[300px] rounded-t-lg" width={'500'} height={'300'}
                        src={product.src}
                        alt="c" />
                    <Link href={'/'}
                        className={'absolute text-xs bottom-3.5 right-3.5 bg-emerald-600 text-white inline-block rounded-[6px] px-[11px] py-[5px]'}>{product.art}</Link>
                </div>
                <div className={'pr-2 pt-2 text-gray-400 text-sm mr-3'}>
                    <AccessTimeOutlinedIcon className={'text-sm'} />
                    <span className={'ml-2'}>{product.time}</span>
                </div>
                <div className={'mt-2'}>
                    <Link href={'/'} className={`${Danab.className} line-clamp-1 text-base px-4`}>
                        {product.title}
                    </Link>
                    <p className={'text-xs line-clamp-3 px-4 pt-[10px]'}>{product.name}</p>
                </div>
                <div className={'flex justify-between mr-3  mt-8 mb-7'}>
                    <div className={'flex gap-x-4'}>
                        <Image src={'/img/a0513619c230370bf5ae6743a3dc3337.png'}
                            className={'w-10 h-10 rounded-full'} width={'100'}
                            height={'100'}
                            alt={'d'}></Image>
                        <div className={'flex flex-col'}>
                            <span className={'text-sm'}>طراح سایت</span>
                            <span className={'text-xs'}>2 سال قبل</span>
                        </div>
                    </div>
                    <div
                        className={'bg-gray-100 hover:bg-green-900 transition-all text-zinc-500 hover:text-white flex items-center justify-center rounded-r-lg w-[65px]'}>
                        <ArrowBackOutlinedIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}
