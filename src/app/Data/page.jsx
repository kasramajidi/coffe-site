'use client';
import React, {useState} from 'react'
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import Product from '@/components/product';


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

import Star from '@mui/icons-material/StarBorderPurple500Outlined';
import Heart from '@mui/icons-material/FavoriteBorderOutlined';
import Random from '@mui/icons-material/ShuffleOutlined';
import Truck from '@mui/icons-material/LocalShippingOutlined';
import Check from '@mui/icons-material/CheckBoxOutlined';
import Products from '@mui/icons-material/Inventory2Outlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';

export default function Data() {
    return (
        <div className={`w-[85%] m-auto mt-12 ${Danareg.className}`}>
            {/* section nav */}
            <section className={'w-full rounded-xl px-2 py-3 bg-emerald-700 text-white '}>
                <p className={`${Danab.className} text-sm font-bold`}>خانه / قهوه / دانه قهوه ترکیبی 250 گرم HOUSE Blend
                    100% Arabica</p>
            </section>
            {/* section 2 */}
            <section className={'flex justify-between gap-x-4 mt-7'}>
                <div className={'w-[500px] h-[300px] bg-white rounded-2xl shadow-sm flex items-center justify-center'}>
                    <Image className={'w-[500px] h-[300px]'} width={1000} height={1000}
                           src="/img/order/1.png"
                           alt="c"/>
                </div>
                <div className={'flex w-full rounded-2xl bg-white h-[407px] shadow-sm px-8 py-9'}>
                    <div className={'w-[60%] '}>
                        <h3 className={`text-emerald-600 text-xl ${Danab.className}`}>دانه قهوه ترکیبی 250 گرم HOUSE
                            Blend 100% Arabica</h3>
                        <p className={'text-xs text-gray-600 mt-3'}>Mixed coffee beans 250 grams HOUSE Blend 100%
                            Arabica</p>
                        <div className={'mt-3 flex  items-center gap-x-2'}>
                            <div>
                                <Star className={'text-gray-600 text-base'}/>
                                <Star className={'text-gray-600 text-base'}/>
                                <Star className={'text-gray-600 text-base'}/>
                                <Star className={'text-gray-600 text-base'}/>
                                <Star className={'text-gray-600 text-base'}/>
                            </div>
                            <p className={'text-xs text-gray-600'}>(بدون دیدگاه)</p>
                            <Heart className={'text-base'}/>
                            <Random className={'text-base'}/>
                        </div>
                        <div className={'mt-4'}>
                            <h4 className={'text-emerald-600 mb-3'}>توضیحات محصول</h4>
                            <div className={'flex items-center gap-x-2 mb-4'}>
                                <span className={'w-1 inline-block h-1 bg-black rounded-full'}></span>
                                <p className={'text-sm'}>وزن دستگاه: ۵ کیلوگرم</p>
                            </div>
                            <div className={'flex items-center gap-x-2 mb-4'}>
                                <span className={'w-1 inline-block h-1 bg-black rounded-full'}></span>
                                <p className={'text-sm'}>ساخت: کشور سوئد</p>
                            </div>
                            <div className={'flex items-center gap-x-2 mb-4'}>
                                <span className={'w-1 inline-block h-1 bg-black rounded-full'}></span>
                                <p className={'text-sm'}>ابعاد اسپرسو ساز : عمق ۶۰ * عرض ۳۳ * ارتفاع ۷۴</p>
                            </div>
                            <div className={'flex items-center gap-x-2 mb-4'}>
                                <span className={'w-1 inline-block h-1 bg-black rounded-full'}></span>
                                <p className={'text-sm'}> کارکرد دستگاه: مناسب برای کافی شاپ و کافه ها</p>
                            </div>
                            <div className={'flex items-center gap-x-2 mb-4'}>
                                <span className={'w-1 inline-block h-1 bg-black rounded-full'}></span>
                                <p className={'text-sm'}>نوع فیلتر: دائمی</p>
                            </div>
                        </div>
                    </div>
                    <div className={'w-[40%] bg-gray-100 rounded-2xl px-6 py-3'}>
                        <div className={'flex items-center gap-x-1'}>
                            <Check className={'text-base text-emerald-600'}/>
                            <p className={`text-emerald-600 text-sm ${Danab.className}`}>طراح سایت</p>
                        </div>
                        <div className={'w-full h-[1px] mt-4 bg-white'}></div>
                        <div className={'flex items-center gap-x-3 mb-4 mt-3'}>
                            <Truck className={'text-base text-gray-500'}/>
                            <p className={'text-xs text-gray-500'}> ارسال توسط فروشگاه</p>
                        </div>
                        <div className={'flex items-center gap-x-3 mb-4 '}>
                            <Check className={'text-base text-gray-500'}/>
                            <p className={'text-xs text-gray-500'}>گارانتی اصالت و سلامت فیزیکی کالا</p>
                        </div>
                        <div className={'flex items-center gap-x-3 mb-4 '}>
                            <Products className={'text-base text-gray-500'}/>
                            <p className={'text-xs text-gray-500'}>ضمانت تعویض کالا</p>
                        </div>
                        <div className={'flex items-center gap-x-3 mb-4 '}>
                            <ProductionQuantityLimitsOutlinedIcon className={'text-base text-gray-500'}/>
                            <p className={'text-xs text-gray-500'}>هزینه حمل به عهده خریدار</p>
                        </div>
                        <div className={'flex  items-center  justify-between mt-7'}>
                            <div>
                                <h3 className={'text-sm'}>236,000</h3>
                                <span className={'text-emerald-600 text-[18px]'}>222,000</span>
                                <span className={'text-xs mr-1'}>تومان</span>
                            </div>
                            <Link className={'bg-emerald-700 text-white  rounded-md p-1 text-sm'} href='/'>
                                15%
                            </Link>
                        </div>
                        <Link href={'/'}
                              className={'w-full py-2 text-white items-center bg-emerald-700 inline-flex mt-5 justify-center rounded-xl hover:bg-emerald-600 transition-all'}>افزودن
                            به سبد خرید</Link>
                    </div>
                </div>
            </section>
            {/* section 3 */}
            <section className={'w-full bg-white mt-20 rounded-md px-8 py-5 '}>
                <div className={'flex items-center gap-x-3 border-b mb-10 border-gray-300'}>
                    <h4 className={'border-b border-emerald-700'}>توضیحات</h4>
                    <h4>نظرات</h4>
                </div>
                <p className={'text-gray-500 text-sm leading-8'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها
                    و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                    کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                    آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                    ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که
                    تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی
                    دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                <p className={'text-gray-500 text-sm leading-8'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها
                    و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                    کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                    آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                    ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که
                    تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی
                    دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
            </section>
            <section className={'mt-16 mb-16'}>
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

    )
}
