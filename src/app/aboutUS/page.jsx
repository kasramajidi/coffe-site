import React from 'react';
import Image from "next/image";
import Link from "next/link";

import localFont from "next/font/local";

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

import Shop from '@mui/icons-material/StorefrontOutlined';
import Quiz from '@mui/icons-material/QuizOutlined';
import Star from '@mui/icons-material/StarBorderPurple500Outlined';
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

export default function AboutPage() {
    return (
        <div className={`${Danareg.className} mt-20`}>
            {/* section main */}
            <div className={' w-[85%] m-auto'}>
                {/* section 1 */}
                <section className={'flex'}>
                    {/* right div */}
                    <div className={'w-[50%] '}>
                        {/* log */}
                        <div className={'flex items-center gap-x-2 text-zinc-900'}>
                            <Image src={'/img/icon.svg'} alt={'dhd'} width={'38'} height={'38'}></Image>
                            <h4 className={`${Morabab.className} text-4xl`}>درباره فروشگاه ما</h4>
                            <Image className={'mt-5'} src={'/img/brag.svg'} alt={'ee'} width={'36'}
                                   height={'36'}></Image>
                        </div>
                        <p className={'mt-5 text-zinc-700 text-sm leading-7'}>لورم ایپسوم متن ساختگی با تولید سادگی
                            نامفهوم
                            از صنعت چاپ، و با
                            استفاده از طراحان گرافیک است،
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                            تکنولوژی
                            مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و
                            سه
                            درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت
                            بیشتری
                            را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در
                            این
                            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
                            رسد .
                        </p>
                        { /* buttons */}
                        <div className={'flex mt-10 gap-x-5'}>
                            <Link href={"/"}
                                  className={'bg-emerald-700 rounded-3xl flex items-center justify-center text-white w-[136px] h-[43px] text-sm'}>
                                <Shop className={''}/>
                                <span className={'mr-1'}>فروشگاه ما</span>
                            </Link>
                            <Link href={"/"}
                                  className={'bg-white rounded-3xl flex items-center justify-center text-emerald-600 w-[136px] h-[43px] text-sm'}>
                                <Shop className={''}/>
                                <span className={'mr-1'}>سوالی دارید؟!</span>
                            </Link>
                        </div>
                    </div>
                    {/* left div */}
                    <div className={'w-[50%]'}>
                        <Image className={'w-[634px] h-[400px] rounded-3xl'} width={1000} height={1000}
                               src="/img/About-us/Group-75-min.png"
                               alt="c"/>
                    </div>
                </section>
                {/* section 2 */}
                <section className={'flex'}>
                    {/* img */}
                    <div>
                        <Image className={'w-[600px] h-[500px] rounded-3xl mr-[-115px]'} width={1000} height={1000}
                               src="/img/About-us/ax3.png"
                               alt="c"/>
                    </div>
                    {/* services and logo */}
                    <div className={'mt-24'}>
                        {/* logo */}
                        <div className={'flex items-center gap-x-2 text-zinc-900'}>
                            <Image src={'/img/icon.svg'} alt={'dhd'} width={'38'} height={'38'}></Image>
                            <h4 className={`${Morabab.className} text-4xl`}>درباره فروشگاه ما</h4>
                            <Image className={'mt-5'} src={'/img/brag.svg'} alt={'ee'} width={'36'}
                                   height={'36'}></Image>
                        </div>
                        {/* services */}
                        <div className={'flex gap-x-8 mt-14'}>
                            <div className={'bg-zinc-200 rounded-2xl flex flex-col items-center w-52 h-60 px-4 py-6'}>
                                <Image className={'w-[72px] h-[72px] rounded-3xl'} width={1000} height={1000}
                                       src="/img/About-us/Frame.png"
                                       alt="c"/>
                                <div className={'mt-6 text-center'}>
                                    <h3 className={`${Danab.className} text-lg`}>بهترین نژاد های قهوه</h3>
                                    <p className={'text-sm mt-2'}>لورم ایپسوم متــن ساختگی با تولید سادگی از نامفهوم از
                                        صنعت
                                        چاپ می باشد.</p>
                                </div>
                            </div>
                            <div
                                className={'bg-zinc-200 rounded-2xl flex flex-col items-center w-52 h-60 px-4 py-6 mt-10'}>
                                <Image className={'w-[72px] h-[72px] rounded-3xl'} width={1000} height={1000}
                                       src="/img/About-us/Frame2.png"
                                       alt="c"/>
                                <div className={'mt-6 text-center'}>
                                    <h3 className={`${Danab.className} text-lg`}>ترکیب اختصاصی</h3>
                                    <p className={'text-sm mt-2'}>لورم ایپسوم متــن ساختگی با تولید سادگی از نامفهوم از
                                        صنعت
                                        چاپ می باشد.</p>
                                </div>
                            </div>
                            <div className={'bg-zinc-200 rounded-2xl flex flex-col items-center w-52 h-60 px-4 py-6'}>
                                <Image className={'w-[72px] h-[72px] rounded-3xl'} width={1000} height={1000}
                                       src="/img/About-us/Frame3.png"
                                       alt="c"/>
                                <div className={'mt-6 text-center'}>
                                    <h3 className={`${Danab.className} text-lg`}>ترکیب اختصاصی</h3>
                                    <p className={'text-sm mt-2'}>لورم ایپسوم متــن ساختگی با تولید سادگی از نامفهوم از
                                        صنعت
                                        چاپ می باشد.</p>
                                </div>
                            </div>
                            <div
                                className={'bg-zinc-200 rounded-2xl flex flex-col items-center w-52 h-60 px-4 py-6 mt-10'}>
                                <Image className={'w-[72px] h-[72px] rounded-3xl'} width={1000} height={1000}
                                       src="/img/About-us/Group.png"
                                       alt="c"/>
                                <div className={'mt-6 text-center'}>
                                    <h3 className={`${Danab.className} text-lg`}>ترکیب اختصاصی</h3>
                                    <p className={'text-sm mt-2'}>لورم ایپسوم متــن ساختگی با تولید سادگی از نامفهوم از
                                        صنعت
                                        چاپ می باشد.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
            {/* section span */}
            <section className={'w-full h-[600px] bg-zinc-900  mt-[-175px] '}>
                {/* section main */}
                <div className={' w-[85%] m-auto'}>
                    {/* section 4 */}
                    <section>
                        <div className={'flex items-center gap-x-2 text-white justify-center pt-[250px]'}>
                            <Image src={'/img/icon.svg'} alt={'dhd'} width={'38'} height={'38'}></Image>
                            <h4 className={`${Morabab.className} text-4xl`}>نظرات مشتریان ما</h4>
                            <Image className={'mt-5'} src={'/img/brag.svg'} alt={'ee'} width={'36'}
                                   height={'36'}></Image>
                        </div>
                    </section>
                    {/* section 5 */}
                    <section className={'flex justify-between mt-20'}>
                        {/* membership */}
                        <div className={'bg-white w-[412px] h-[166px] rounded-2xl px-3'}>
                            <div className={'flex justify-between items-center pt-4'}>
                                <div className={'flex items-center'}>
                                    <Image className={'w-[72px] h-[72px] rounded-full'} width={1000} height={1000}
                                           src="/img/About-us/user-avatar2-min-300x300.jpg"
                                           alt="c"/>
                                    <div className={`mx-3`}>
                                        <h4 className={`${Morabab.className} text-base`}>حمید رضا حمیدی</h4>
                                        <span className={'text-sm'}>مشتری ثابت</span>
                                    </div>
                                </div>
                                <div className={'text-gray-400'}>
                                    <Star className={'text-yellow-300 text-base'}/>
                                    <Star className={'text-yellow-300 text-base'}/>
                                    <Star className={'text-base'}/>
                                    <Star className={'text-base'}/>
                                    <Star className={'text-base'}/>
                                </div>
                            </div>
                            <p className={'text-sm text-justify mt-4 pb-3'}>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
                                است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است. </p>
                        </div>
                        <div className={'bg-white w-[412px] h-[166px rounded-2xl px-3'}>
                            <div className={'flex justify-between items-center pt-4'}>
                                <div className={'flex items-center'}>
                                    <Image className={'w-[72px] h-[72px] rounded-full'} width={1000} height={1000}
                                           src="/img/About-us/user-avatar3-min-300x300.jpg"
                                           alt="c"/>
                                    <div className={`mx-3`}>
                                        <h4 className={`${Morabab.className} text-base`}>حمید رضا حمیدی</h4>
                                        <span className={'text-sm'}>مشتری ثابت</span>
                                    </div>
                                </div>
                                <div className={'text-gray-400'}>
                                    <Star className={'text-yellow-300 text-base'}/>
                                    <Star className={'text-yellow-300 text-base'}/>
                                    <Star className={'text-base'}/>
                                    <Star className={'text-base'}/>
                                    <Star className={'text-base'}/>
                                </div>
                            </div>
                            <p className={'text-sm text-justify mt-4 pb-3'}>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
                                است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است. </p>
                        </div>
                        <div className={'bg-white w-[412px] h-[166px rounded-2xl px-3'}>
                            <div className={'flex justify-between items-center pt-4'}>
                                <div className={'flex items-center'}>
                                    <Image className={'w-[72px] h-[72px] rounded-full'} width={1000} height={1000}
                                           src="/img/About-us/user-avatar5-min-300x300.jpg"
                                           alt="c"/>
                                    <div className={`mx-3`}>
                                        <h4 className={`${Morabab.className} text-base`}>حمید رضا حمیدی</h4>
                                        <span className={'text-sm'}>مشتری ثابت</span>
                                    </div>
                                </div>
                                <div className={'text-gray-400'}>
                                    <Star className={'text-yellow-300 text-base'}/>
                                    <Star className={'text-yellow-300 text-base'}/>
                                    <Star className={'text-base'}/>
                                    <Star className={'text-base'}/>
                                    <Star className={'text-base'}/>
                                </div>
                            </div>
                            <p className={'text-sm text-justify mt-4 pb-3'}>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
                                است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است. </p>
                        </div>
                    </section>
                </div>
                {/* section span */}

                        {/* section 7 */}
            </section>
        </div>
    )
}
