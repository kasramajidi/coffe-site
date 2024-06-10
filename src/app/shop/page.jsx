import React from 'react'
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

import Shop from "@mui/icons-material/StorefrontOutlined";


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
export default function ShopPage() {
    return (
        <div className={`${Danareg.className} w-[85%] m-auto mt-12`}>
            <div className={'flex gap-x-8'}>
                {/* section 1 ( side bar ) */}
                <section className={'w-[25%] h-[424px] sticky top-2'}>
                    <input type="search" placeholder={"جستجو..."}
                           className={"h-11 w-full mb-4 pr-2 rounded-xl text-black "}/>
                    <Link href={"/"}
                          className={'w-full bg-emerald-700 mb-4 rounded-xl text-white block text-center py-2'}>
                        <span>جستجو کنید</span>
                    </Link>
                    <div className={'flex flex-col justify-around w-full mb-4 h-[108px] bg-white px-4 rounded-xl'}>
                        <span>فیلتر قیمت</span>
                        <input type={'range'} style={{accentColor: '#059669'}}/>
                        <span className={'text-center'}>1,000 تومان — 2,750,000 تومان</span>
                    </div>
                    <input type="search" placeholder={"دسته بندی محصولات"}
                           className={"h-11 w-full mb-4 pr-2 rounded-xl text-black "}/>
                    <input type="search" placeholder={"برند محصولات"}
                           className={"h-11 w-full mb-4 pr-2 rounded-xl text-black "}/>
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
                    <div>
                        <div className={'flex items-center justify-between mt-8 mb-3'}>
                            <div className={'bg-gray-200 w-[304px] p-3 rounded-2xl'}>
                                <div className={'relative mt-2'}>
                                    <Image className="h-[185px]  m-auto w-[220px] cursor-pointer " width={'10000'}
                                           height={'2000'}
                                           src="/img/main/product-7-min.png"
                                           alt="c"/>
                                    <Link href={'/'}
                                          className={'bg-white top-1 right-1 absolute text-emerald-600 m-auto p-2 rounded-2xl'}>
                                        <span>28%</span>
                                    </Link>
                                </div>
                                <h4 className={'mt-5 text-center'}>قهوه ساز برقی سینبو مدل SCM 2928 با بدنه سرامیکی</h4>
                                <div className={'flex justify-between items-center mt-7'}>
                                    <h4>140,000 تومان</h4>
                                    <Link href={"/"}
                                          className={'bg-emerald-700 hover:bg-white hover:text-emerald-600 transition-all rounded-3xl flex items-center justify-center text-white w-[91px] h-[31px] text-xs'}>
                                        <Shop className={'text-sm'}/>
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
                                    <Link href={'/'}
                                          className={'bg-white top-1 right-1 absolute text-emerald-600 m-auto p-2 rounded-2xl'}>
                                        <span>28%</span>
                                    </Link>
                                </div>
                                <h4 className={'mt-5 text-center'}>قهوه ساز برقی سینبو مدل SCM 2928 با بدنه سرامیکی</h4>
                                <div className={'flex justify-between items-center mt-7'}>
                                    <h4>140,000 تومان</h4>
                                    <Link href={"/"}
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
                                    <Link href={'/'}
                                          className={'bg-white top-1 right-1 absolute text-emerald-600 m-auto p-2 rounded-2xl'}>
                                        <span>28%</span>
                                    </Link>
                                </div>
                                <h4 className={'mt-5 text-center'}>قهوه ساز برقی سینبو مدل SCM 2928 با بدنه سرامیکی</h4>
                                <div className={'flex justify-between items-center mt-7'}>
                                    <h4>140,000 تومان</h4>
                                    <Link href={"/"}
                                          className={'bg-emerald-700 hover:bg-white hover:text-emerald-600 transition-all rounded-3xl flex items-center justify-center text-white w-[91px] h-[31px] text-xs'}>
                                        <Shop className={'text-sm'} />
                                        <span className={'mr-1'}>فروشگاه ما</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={'flex items-center justify-between mt-8 mb-3'}>
                            <div className={'bg-gray-200 w-[304px] p-3 rounded-2xl'}>
                                <div className={'relative mt-2'}>
                                    <Image className="h-[185px]  m-auto w-[220px] cursor-pointer " width={'10000'}
                                           height={'2000'}
                                           src="/img/main/product-7-min.png"
                                           alt="c"/>
                                    <Link href={'/'}
                                          className={'bg-white top-1 right-1 absolute text-emerald-600 m-auto p-2 rounded-2xl'}>
                                        <span>28%</span>
                                    </Link>
                                </div>
                                <h4 className={'mt-5 text-center'}>قهوه ساز برقی سینبو مدل SCM 2928 با بدنه سرامیکی</h4>
                                <div className={'flex justify-between items-center mt-7'}>
                                    <h4>140,000 تومان</h4>
                                    <Link href={"/"}
                                          className={'bg-emerald-700 hover:bg-white hover:text-emerald-600 transition-all rounded-3xl flex items-center justify-center text-white w-[91px] h-[31px] text-xs'}>
                                        <Shop className={'text-sm'}/>
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
                                    <Link href={'/'}
                                          className={'bg-white top-1 right-1 absolute text-emerald-600 m-auto p-2 rounded-2xl'}>
                                        <span>28%</span>
                                    </Link>
                                </div>
                                <h4 className={'mt-5 text-center'}>قهوه ساز برقی سینبو مدل SCM 2928 با بدنه سرامیکی</h4>
                                <div className={'flex justify-between items-center mt-7'}>
                                    <h4>140,000 تومان</h4>
                                    <Link href={"/"}
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
                                    <Link href={'/'}
                                          className={'bg-white top-1 right-1 absolute text-emerald-600 m-auto p-2 rounded-2xl'}>
                                        <span>28%</span>
                                    </Link>
                                </div>
                                <h4 className={'mt-5 text-center'}>قهوه ساز برقی سینبو مدل SCM 2928 با بدنه سرامیکی</h4>
                                <div className={'flex justify-between items-center mt-7'}>
                                    <h4>140,000 تومان</h4>
                                    <Link href={"/"}
                                          className={'bg-emerald-700 hover:bg-white hover:text-emerald-600 transition-all rounded-3xl flex items-center justify-center text-white w-[91px] h-[31px] text-xs'}>
                                        <Shop className={'text-sm'} />
                                        <span className={'mr-1'}>فروشگاه ما</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* next-privus */}
                    <section className={'mb-20 mt-5'}>
                        <div className={'w-full h-[47px] bg-white rounded-2xl flex items-center justify-center gap-x-6'}>
                            <Link href={'/'} className={'hover:text-emerald-600'}>
                                <span>1</span>
                            </Link>
                            <Link href={'/'} className={'hover:text-emerald-600'}>
                                <span>2</span>
                            </Link>
                            <Link href={'/'} className={'hover:text-emerald-600'}>
                                <span>3</span>
                            </Link>
                            <Link href={'/'} className={'hover:text-emerald-600'}>
                                <span>بعدی</span>
                            </Link>

                        </div>
                    </section>
                </div>
            </div>


        </div>
    )
}
