import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Shop from "@mui/icons-material/StorefrontOutlined";

export default function Product() {
    return (
        <div>
            <div className={'flex items-center justify-between mt-8 mb-3'}>
                <div className={'bg-gray-200 w-[304px] p-3 rounded-2xl'}>
                    <div className={'relative mt-2'}>
                        <Image className="h-[185px]  m-auto w-[220px] cursor-pointer " width={'10000'}
                            height={'2000'}
                            src="/img/main/product-7-min.png"
                            alt="c" />
                        <Link href={'/shop'}
                            className={'bg-white top-1 right-1 absolute text-emerald-600 m-auto p-2 rounded-2xl'}>
                            <span>28%</span>
                        </Link>
                    </div>
                    <h4 className={'mt-5 text-center'}>قهوه ساز برقی سینبو مدل SCM 2928 با بدنه سرامیکی</h4>
                    <div className={'flex justify-between items-center mt-7'}>
                        <h4>140,000 تومان</h4>
                        <Link href={"/shop"}
                            className={'bg-emerald-700 hover:bg-white hover:text-emerald-600 transition-all rounded-3xl flex items-center justify-center text-white w-[91px] h-[31px] text-xs'}>
                            <Shop className={'text-sm'} />
                            <span className={'mr-1'}>فروشگاه ما</span>
                        </Link>
                    </div>
                </div>
                <div className={'bg-gray-200 w-[304px] p-3 rounded-2xl'}>
                    <div className={'relative mt-2'}>
                        <Image className="h-[185px]  m-auto w-[220px] cursor-pointer " width={'10000'}
                            height={'2000'}
                            src="/img/main/product-7-min.png"
                            alt="c" />
                        <Link href={'/shop'}
                            className={'bg-white top-1 right-1 absolute text-emerald-600 m-auto p-2 rounded-2xl'}>
                            <span>28%</span>
                        </Link>
                    </div>
                    <h4 className={'mt-5 text-center'}>قهوه ساز برقی سینبو مدل SCM 2928 با بدنه سرامیکی</h4>
                    <div className={'flex justify-between items-center mt-7'}>
                        <h4>140,000 تومان</h4>
                        <Link href={"/shop"}
                            className={'bg-emerald-700 hover:bg-white hover:text-emerald-600 transition-all rounded-3xl flex items-center justify-center text-white w-[91px] h-[31px] text-xs'}>
                            <Shop className={'text-sm'} />
                            <span className={'mr-1'}>فروشگاه ما</span>
                        </Link>
                    </div>
                </div>
                <div className={'bg-gray-200 w-[304px] p-3 rounded-2xl'}>
                    <div className={'relative mt-2'}>
                        <Image className="h-[185px]  m-auto w-[220px] cursor-pointer " width={'10000'}
                            height={'2000'}
                            src="/img/main/product-2-min.png"
                            alt="c" />
                        <Link href={'/shop'}
                            className={'bg-white top-1 right-1 absolute text-emerald-600 m-auto p-2 rounded-2xl'}>
                            <span>28%</span>
                        </Link>
                    </div>
                    <h4 className={'mt-5 text-center'}>قهوه ساز برقی سینبو مدل SCM 2928 با بدنه سرامیکی</h4>
                    <div className={'flex justify-between items-center mt-7'}>
                        <h4>140,000 تومان</h4>
                        <Link href={"/shop"}
                            className={'bg-emerald-700 hover:bg-white hover:text-emerald-600 transition-all rounded-3xl flex items-center justify-center text-white w-[91px] h-[31px] text-xs'}>
                            <Shop className={'text-sm'} />
                            <span className={'mr-1'}>فروشگاه ما</span>
                        </Link>
                    </div>
                </div>
                <div className={'bg-gray-200 w-[304px] p-3 rounded-2xl'}>
                    <div className={'relative mt-2'}>
                        <Image className="h-[185px]  m-auto w-[220px] cursor-pointer " width={'10000'}
                            height={'2000'}
                            src="/img/main/product-2-min.png"
                            alt="c" />
                        <Link href={'/shop'}
                            className={'bg-white top-1 right-1 absolute text-emerald-600 m-auto p-2 rounded-2xl'}>
                            <span>28%</span>
                        </Link>
                    </div>
                    <h4 className={'mt-5 text-center'}>قهوه ساز برقی سینبو مدل SCM 2928 با بدنه سرامیکی</h4>
                    <div className={'flex justify-between items-center mt-7'}>
                        <h4>140,000 تومان</h4>
                        <Link href={"/shop"}
                            className={'bg-emerald-700 hover:bg-white hover:text-emerald-600 transition-all rounded-3xl flex items-center justify-center text-white w-[91px] h-[31px] text-xs'}>
                            <Shop className={'text-sm'} />
                            <span className={'mr-1'}>فروشگاه ما</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
