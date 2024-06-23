'use client';
import React, {useState} from 'react'
import Image from "next/image";
import Link from "next/link";
import Head from 'next/head';
import Script from 'next/script';


import Articles from '@/components/articles';
import Product from '@/components/Product';
import AboutTea from '@/components/AboutTea';
import CustomCombination from '@/components/CustomCombination';

import localFont from "next/font/local";
import Shop from "@mui/icons-material/StorefrontOutlined";

const MorabaLight = localFont({
    src: "../components/fonts/Morabba/woff2/Morabba-Light.woff2"
})

const Morabab = localFont({
    src: "../components/fonts/Morabba/woff2/Morabba-Bold.woff2"
})
const Danam = localFont({
    src: "../components/fonts/Dana/woff2/DanaFaNum-Medium.woff2"
})
const Danareg = localFont({
    src: "../components/fonts/Dana/woff2/DanaFaNum-Regular.woff2"
})


import Check from '@mui/icons-material/CheckBoxOutlined';



export default function page() {

    const [mainImage, setMainImage] = useState('/img/main/hero-1-min.png');

    const HandelTouchClick = (src) =>{
        setMainImage(src)
    }

    return (
        <div>
            <div className={`${Danareg.className} w-[85%] m-auto mt-12`}>
                {/* section 1 */}
                <section className={'flex items-center justify-between'}>
                    {/* heading */}
                    <div className={'w-[50%]'}>
                        <h5 className={`text-3xl  ${MorabaLight.className}`}>آنلاین شاپ تخصصی</h5>
                        <h3 className={`text-5xl my-6 ${Morabab.className}`}>انواع قـهوه و لـوازم کافـی شاپ</h3>
                        <p className={'text-base leading-7'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                            و با
                            استفاده از طراحان گرافیک است،
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                            تکنولوژی
                            مورد نیاز میباشد .</p>
                        {/* btn */}
                        <div className={'flex mt-10 gap-x-5'}>
                            <Link href={"/shop"}
                                className={'bg-emerald-700 rounded-3xl flex items-center justify-center text-white w-[136px] h-[43px] text-sm'}>
                                <Shop className={''} />
                                <span className={'mr-1'}>خرید کنید</span>
                            </Link>
                            <Link href={"/order"}
                                className={'bg-white rounded-3xl flex items-center justify-center text-emerald-600 w-[136px] h-[43px] text-sm'}>
                                <Shop className={''} />
                                <span className={'mr-1'}>ترکیب سفارشی</span>
                            </Link>
                        </div>
                        {/* imgs */}
                        <div className={'flex mt-10 items-center gap-x-4'}>
                            <Image className="h-[120px] w-[110px]  cursor-pointer" width={'10000'} height={'2000'}
                                src="/img/main/hero-3-1.png"
                                alt="c" 
                                onClick={() => HandelTouchClick("/img/main/hero-3-1.png")}/>
                            <Image className="h-[120px] w-[110px] cursor-pointer " width={'10000'} height={'2000'}
                                src="/img/main/hero-2-1.png"
                                alt="c" 
                                onClick={() => HandelTouchClick("/img/main/hero-2-1.png")}/>
                            <Image className="h-[120px] w-[110px] cursor-pointer " width={'10000'} height={'2000'}
                                src="/img/main/hero-1-min.png"
                                alt="c" 
                                onClick={() => HandelTouchClick("/img/main/hero-1-min.png")}/>
                            <Image className="h-[130px] w-[130px] cursor-pointer mr-20  " width={'10000'}
                                height={'2000'}
                                src="/img/main/test.svg"
                                alt="c" />

                        </div>
                    </div>
                    {/* baner */}
                    <div className={'w-[50%]'}>
                        <Image className="h-[550px] w-[640px] " width={'10000'} height={'2000'}
                            src={mainImage}
                            alt="c" />
                    </div>
                </section>
                {/* section 2 */}
                <section>
                    <AboutTea />
                </section>
                {/* section 3 */}
                <section>
                    <div className={'flex items-center justify-center gap-x-2 text-zinc-900'}>
                        <Image src={'/img/icon.svg'} alt={'dhd'} width={'38'} height={'38'}></Image>
                        <h4 className={`${Morabab.className} text-4xl`}>درباره فروشگاه ما</h4>
                        <Image className={'mt-5'} src={'/img/brag.svg'} alt={'ee'} width={'36'}
                            height={'36'}></Image>
                    </div>
                    {/*  Slider main container */}
                    <Product />
                </section>
            </div>
            {/* section span */}
            <div className={`${Danareg.className} w-[100%] bg-zinc-900 mt-[-200px]`}>
                <div className={`${Danareg.className} w-[85%] m-auto`}>
                    {/* section 4 */}
                    <section className={'flex items-center justify-between pt-96 text-white'}>
                        <div className={'w-[50%]'}>
                            <div className={'flex items-center justify-start gap-x-2'}>
                                <Image src={'/img/icon.svg'} alt={'dhd'} width={'38'} height={'38'}></Image>
                                <h4 className={`${Morabab.className} text-4xl`}>درباره فروشگاه ما</h4>
                                <Image className={'mt-5'} src={'/img/brag.svg'} alt={'ee'} width={'36'}
                                    height={'36'}></Image>
                            </div>
                            <p className={'mt-9 leading-7 text-sm'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                                صنعت چاپ، و با استفاده از طراحان گرافیک است،
                                چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                                تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
                                زیادی
                                در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                                افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                                زبان
                                فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها،
                                و
                                شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی
                                سوالات
                                پیوسته اهل دنیای موجود طراحی است.
                            </p>
                            {/* btn */}
                            <div className={'flex mt-8 gap-x-5'}>
                                <Link href={"/shop"}
                                    className={'bg-emerald-700 rounded-3xl flex items-center justify-center text-white w-[136px] h-[43px] text-sm'}>
                                    <Shop className={''} />
                                    <span className={'mr-1'}>فروشگاه ما</span>
                                </Link>
                                <Link href={"/callUs"}
                                    className={'bg-white rounded-3xl flex items-center justify-center text-emerald-600 w-[136px] h-[43px] text-sm'}>
                                    <Shop className={''} />
                                    <span className={'mr-1'}>سوالی دارید؟</span>
                                </Link>
                            </div>
                        </div>
                        <div className={'w-[50%]'}>
                            <Image className="h-[500px] m-auto w-[540px]" width={'10000'} height={'2000'}
                                src="/img/main/ax-min.png"
                                alt="c" />
                        </div>
                    </section>
                    {/* section 5 */}
                    <section className={'flex items-center justify-between mt-24 text-white'}>
                        <div className={'w-[50%]'}>
                            <Image className="h-[500px] m-auto w-[540px]" width={'10000'} height={'2000'}
                                src="/img/main/ax2-min.png"
                                alt="c" />
                        </div>
                        <div className={'w-[50%]'}>
                            <div className={'flex items-center justify-start gap-x-2 mb-12'}>
                                <Image src={'/img/icon.svg'} alt={'dhd'} width={'38'} height={'38'}></Image>
                                <h4 className={`${Morabab.className} text-4xl`}>درباره فروشگاه ما</h4>
                                <Image className={'mt-5'} src={'/img/brag.svg'} alt={'ee'} width={'36'}
                                    height={'36'}></Image>
                            </div>
                            {/* check */}
                            <div className={'flex items-center gap-x-3 mt-6'}>
                                <Check />
                                <p className={'text-sm'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                                    استفاده از طراحان
                                    گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                                </p>
                            </div>
                            <div className={'flex items-center gap-x-3 mt-6'}>
                                <Check className={'text-emerald-600'} />
                                <p className={'text-sm'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                                    استفاده از طراحان
                                    گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                                </p>
                            </div>
                            <div className={'flex items-center gap-x-3 mt-6'}>
                                <Check />
                                <p className={'text-sm'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                                    استفاده از طراحان
                                    گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                                </p>
                            </div>
                            <div className={'flex items-center gap-x-3 mt-6'}>
                                <Check className={'text-emerald-600'} />
                                <p className={'text-sm'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                                    استفاده از طراحان
                                    گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                                </p>
                            </div>
                        </div>
                    </section>
                    {/* section 6 */}
                    <section className={'pb-60'}>
                        <div className={'flex items-center justify-center gap-x-2 text-white mt-24'}>
                            <Image src={'/img/icon.svg'} alt={'dhd'} width={'38'} height={'38'}></Image>
                            <h4 className={`${Morabab.className} text-4xl`}>جدیدترین محصولات</h4>
                            <Image className={'mt-5'} src={'/img/brag.svg'} alt={'ee'} width={'36'}
                                height={'36'}></Image>
                        </div>
                    </section>
                </div>
            </div>
            {/* section main */}
            <div className={`${Danareg.className} w-[85%] m-auto mt-[-165px]`}>
                {/* section 7 */}
                <section>
                    <Product />
                    <Product />
                    <div className={'m-auto mt-14 flex justify-center '}>
                        <Link href={'/shop'}
                            className={'bg-gray-200 h-[39px] rounded-2xl text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all w-[137px] flex items-center justify-center'}>
                            <span>مشاهده همه</span>
                        </Link>
                    </div>
                </section>
                {/* section 8*/}
                <section className={'mt-20'}>
                    <div className={'flex items-center justify-center gap-x-2 text-zinc-900'}>
                        <Image src={'/img/icon.svg'} alt={'dhd'} width={'38'} height={'38'}></Image>
                        <h4 className={`${Morabab.className} text-4xl`}>ترکیب سفارشی</h4>
                        <Image className={'mt-5'} src={'/img/brag.svg'} alt={'ee'} width={'36'}
                            height={'36'}></Image>
                    </div>
                </section>
                {/* section 9 */}
                <section>
                    <CustomCombination />
                </section>
                {/* section 10 */}
                <section className={'m-auto mt-11 flex justify-center '}>
                    <Link href={'/order'}
                        className={'hover:bg-gray-200 h-[39px] rounded-2xl hover:text-emerald-600 bg-emerald-600 text-white transition-all w-[137px] flex items-center justify-center'}>
                        <span>سفارش دهید</span>
                    </Link>
                </section>
                {/* section 11 */}
                <section className={'mt-20 mb-12'}>
                    <div className={'flex items-center justify-center gap-x-2 text-zinc-900'}>
                        <Image src={'/img/icon.svg'} alt={'dhd'} width={'38'} height={'38'}></Image>
                        <h4 className={`${Morabab.className} text-4xl`}>آخرین مقالات وبلاگ</h4>
                        <Image className={'mt-5'} src={'/img/brag.svg'} alt={'ee'} width={'36'}
                            height={'36'}></Image>
                    </div>
                    <Articles />
                </section>
            </div>
        </div>
    )
}
