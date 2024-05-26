import React from 'react'
import Image from "next/image";
import Link from "next/link";
import Head from 'next/head';
import Script from 'next/script';

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
const Danab = localFont({
    src: "../components/fonts/Dana/woff2/DanaFaNum-DemiBold.woff2"
})

import Tea from '@mui/icons-material/CoffeeOutlined';
import Coffe from '@mui/icons-material/CoffeeMakerOutlined';
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import Cup from '@mui/icons-material/EmojiFoodBeverageOutlined';
import Test from '@mui/icons-material/RestartAltOutlined';
import Check from '@mui/icons-material/CheckBoxOutlined';
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

export default function page() {
    return (
        <div>
            <div className={`${Danareg.className} w-[85%] m-auto mt-12`}>
                <Head>
                    <link rel="stylesheet" href="../components/swiper-bundle.min.css"/>
                </Head>
                <Script src="../components/swiper-bundle.min.js" strategy="beforeInteractive"/>
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
                            <Link href={"/"}
                                  className={'bg-emerald-700 rounded-3xl flex items-center justify-center text-white w-[136px] h-[43px] text-sm'}>
                                <Shop className={''}/>
                                <span className={'mr-1'}>خرید کنید</span>
                            </Link>
                            <Link href={"/"}
                                  className={'bg-white rounded-3xl flex items-center justify-center text-emerald-600 w-[136px] h-[43px] text-sm'}>
                                <Shop className={''}/>
                                <span className={'mr-1'}>ترکیب سفارشی</span>
                            </Link>
                        </div>
                        {/* imgs */}
                        <div className={'flex mt-10 items-center gap-x-4'}>
                            <Image className="h-[120px] w-[110px]  cursor-pointer" width={'10000'} height={'2000'}
                                   src="/img/main/hero-3-1.png"
                                   alt="c"/>
                            <Image className="h-[120px] w-[110px] cursor-pointer " width={'10000'} height={'2000'}
                                   src="/img/main/hero-2-1.png"
                                   alt="c"/>
                            <Image className="h-[120px] w-[110px] cursor-pointer " width={'10000'} height={'2000'}
                                   src="/img/main/hero-1-min.png"
                                   alt="c"/>
                            <Image className="h-[130px] w-[130px] cursor-pointer mr-20  " width={'10000'}
                                   height={'2000'}
                                   src="/img/main/test.svg"
                                   alt="c"/>

                        </div>
                    </div>
                    {/* baner */}
                    <div className={'w-[50%]'}>
                        <Image className="h-[550px] w-[640px] " width={'10000'} height={'2000'}
                               src="/img/main/hero-1-min.png"
                               alt="c"/>
                    </div>
                </section>
                {/* section 2 */}
                <section
                    className={'w-full flex justify-between gap-x-4 p-4 rounded-2xl bg-zinc-900 text-white mt-20 mb-20'}>
                    <div className={'flex flex-col text-center w-[200px] items-center'}>
                        <Tea className={'h-[50px] w-[50px]'}/>
                        <h4 className={'text-2xl mt-5'}>چای ایرانی</h4>
                        <p className={'text-xs mt-2'}>ما رست هفتگی قهوه و ارسال از درب کارخانه قهوه ی عمده است.</p>
                    </div>
                    <div className={'flex flex-col text-center w-[200px] items-center'}>
                        <Coffe className={'h-[50px] w-[50px]'}/>
                        <h4 className={'text-2xl mt-5'}>اکسسوری ها</h4>
                        <p className={'text-xs mt-2'}>ما رست هفتگی قهوه و ارسال از درب کارخانه قهوه ی عمده است.</p>
                    </div>
                    <div className={'flex flex-col text-center w-[200px] items-center'}>
                        <LocalCafeOutlinedIcon className={'h-[50px] w-[50px]'}/>
                        <h4 className={'text-2xl mt-5'}>مشتقات قهوه</h4>
                        <p className={'text-xs mt-2'}>ما رست هفتگی قهوه و ارسال از درب کارخانه قهوه ی عمده است.</p>
                    </div>
                    <div className={'flex flex-col text-center w-[200px] items-center'}>
                        <Cup className={'h-[50px] w-[50px]'}/>
                        <h4 className={'text-2xl mt-5'}>قهوه عمده</h4>
                        <p className={'text-xs mt-2'}>ما رست هفتگی قهوه و ارسال از درب کارخانه قهوه ی عمده است.</p>
                    </div>
                    <div className={'flex flex-col text-center w-[200px] items-center'}>
                        <Test className={'h-[50px] w-[50px]'}/>
                        <h4 className={'text-2xl mt-5'}>قهوه اصیل
                        </h4>
                        <p className={'text-xs mt-2'}>ما رست هفتگی قهوه و ارسال از درب کارخانه قهوه ی عمده است.</p>
                    </div>
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
                    <div className={'flex items-center justify-between mt-16'}>
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
                                       src="/img/main/product-3.png"
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
                                       src="/img/main/product-1.png"
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
                    </div>
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
                                <Link href={"/"}
                                      className={'bg-emerald-700 rounded-3xl flex items-center justify-center text-white w-[136px] h-[43px] text-sm'}>
                                    <Shop className={''}/>
                                    <span className={'mr-1'}>فروشگاه ما</span>
                                </Link>
                                <Link href={"/"}
                                      className={'bg-white rounded-3xl flex items-center justify-center text-emerald-600 w-[136px] h-[43px] text-sm'}>
                                    <Shop className={''}/>
                                    <span className={'mr-1'}>سوالی دارید؟</span>
                                </Link>
                            </div>
                        </div>
                        <div className={'w-[50%]'}>
                            <Image className="h-[500px] m-auto w-[540px]" width={'10000'} height={'2000'}
                                   src="/img/main/ax-min.png"
                                   alt="c"/>
                        </div>
                    </section>
                    {/* section 5 */}
                    <section className={'flex items-center justify-between mt-24 text-white'}>
                        <div className={'w-[50%]'}>
                            <Image className="h-[500px] m-auto w-[540px]" width={'10000'} height={'2000'}
                                   src="/img/main/ax2-min.png"
                                   alt="c"/>
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
                                <Check/>
                                <p className={'text-sm'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                                    استفاده از طراحان
                                    گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                                </p>
                            </div>
                            <div className={'flex items-center gap-x-3 mt-6'}>
                                <Check className={'text-emerald-600'}/>
                                <p className={'text-sm'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                                    استفاده از طراحان
                                    گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                                </p>
                            </div>
                            <div className={'flex items-center gap-x-3 mt-6'}>
                                <Check/>
                                <p className={'text-sm'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                                    استفاده از طراحان
                                    گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                                </p>
                            </div>
                            <div className={'flex items-center gap-x-3 mt-6'}>
                                <Check className={'text-emerald-600'}/>
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
                    <div className={'flex items-center justify-between '}>
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
                                       src="/img/main/product-3.png"
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
                                       src="/img/main/product-1.png"
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
                    </div>
                    <div className={'flex items-center justify-between mt-9'}>
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
                                       src="/img/main/product-3.png"
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
                                       src="/img/main/product-1.png"
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
                    </div>
                    <div className={'m-auto mt-14 flex justify-center '}>
                        <Link href={'/'}
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
                    <div className={'flex items-center justify-between'}>
                        <div className={'flex items-center justify-start gap-x-6'}>
                            <Image className={'mt-5 w-[120px] h-[120px] bg-white rounded-full'} src={'/img/sun.svg'} alt={'ee'} width={'1000'}
                                   height={'1000'}></Image>
                            <h5 className={`${MorabaLight.className} text-xl`}>انتخاب نوع و نژاد قهوه</h5>
                            <Image className={'w-[100px] h-[100px]'} src={'/img/Arrow_03.svg'} alt={'ee'} width={'1000'}
                                   height={'1000'}></Image>
                        </div>
                        <div className={'flex items-center justify-start gap-x-6'}>
                            <Image className={'mt-5 w-[120px] h-[120px] bg-white rounded-full'} src={'/img/sabt.svg'} alt={'ee'} width={'1000'}
                                   height={'1000'}></Image>
                            <h5 className={`${MorabaLight.className} text-xl`}>انتخاب نوع و نژاد قهوه</h5>
                            <Image className={'w-[100px] h-[100px]'} src={'/img/Arrow_03.svg'} alt={'ee'} width={'1000'}
                                   height={'1000'}></Image>
                        </div>
                        <div className={'flex items-center justify-start gap-x-6'}>
                            <Image className={'mt-5 w-[120px] h-[120px] bg-white rounded-full'} src={'/img/tanzim.svg'} alt={'ee'} width={'1000'}
                                   height={'1000'}></Image>
                            <h5 className={`${MorabaLight.className} text-xl`}>انتخاب نوع و نژاد قهوه</h5>
                        </div>
                    </div>
                </section>
                {/* section 10 */}
                <section className={'m-auto mt-11 flex justify-center '}>
                    <Link href={'/'}
                          className={'hover:bg-gray-200 h-[39px] rounded-2xl hover:text-emerald-600 bg-emerald-600 text-white transition-all w-[137px] flex items-center justify-center'}>
                        <span>سفارش دهید</span>
                    </Link>
                </section>
                {/* section 11 */}
                <section className={'mt-20'}>
                    <div className={'flex items-center justify-center gap-x-2 text-zinc-900'}>
                        <Image src={'/img/icon.svg'} alt={'dhd'} width={'38'} height={'38'}></Image>
                        <h4 className={`${Morabab.className} text-4xl`}>آخرین مقالات وبلاگ</h4>
                        <Image className={'mt-5'} src={'/img/brag.svg'} alt={'ee'} width={'36'}
                               height={'36'}></Image>
                    </div>
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
                                    <CalendarMonthOutlinedIcon className={'text-sm'}/>
                                    <span> 16 مهر 1403 </span>
                                </div>
                                <Link href={'/'}
                                      className={'text-xs bg-emerald-600 text-white inline-block rounded-[6px] px-[11px] py-[5px]'}>مطالعه
                                    کنید</Link>
                            </div>
                        </div>
                        <div className={'bg-white w-[301px] h-[356px] rounded-2xl p-3'}>
                            <Image className="h-[200px] w-[281px] rounded-2xl" width={'500'} height={'300'}
                                   src="/img/Blog/post-1.jpg"
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
                                    <CalendarMonthOutlinedIcon className={'text-sm'}/>
                                    <span> 16 مهر 1403 </span>
                                </div>
                                <Link href={'/'}
                                      className={'text-xs bg-emerald-600 text-white inline-block rounded-[6px] px-[11px] py-[5px]'}>مطالعه
                                    کنید</Link>
                            </div>
                        </div>
                        <div className={'bg-white w-[301px] h-[356px] rounded-2xl p-3'}>
                            <Image className="h-[200px] w-[281px] rounded-2xl" width={'500'} height={'300'}
                                   src="/img/Blog/post-2.jpg"
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
                                    <CalendarMonthOutlinedIcon className={'text-sm'}/>
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
                                    <CalendarMonthOutlinedIcon className={'text-sm'}/>
                                    <span> 16 مهر 1403 </span>
                                </div>
                                <Link href={'/'}
                                      className={'text-xs bg-emerald-600 text-white inline-block rounded-[6px] px-[11px] py-[5px]'}>مطالعه
                                    کنید</Link>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}
