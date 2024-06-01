import React from 'react'
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";


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

import Tel from '@mui/icons-material/LocalPhoneOutlined';
import Phone from '@mui/icons-material/PhoneAndroidOutlined';
import Mail from '@mui/icons-material/EmailOutlined';
import Lock from '@mui/icons-material/FmdGoodOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
export default function test() {
    return (
        <footer className={`${Danareg.className} h-[400px] footer-back`}>
            <div className={'w-[85%] m-auto text-white '}>
                {/*
                <div className={'bg-white text-black'}>
                    <div>
                        <h4>خبرنامه قهوه شاپ</h4>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                        </p>
                    </div>
                    <div>
                        <form action="">
                            <input type="submit" placeholder={'آدرس ایمیل را وارد کنید...'}/>
                            <label htmlFor=""></label>
                        </form>
                    </div>
                </div>*/}
                <div className={'flex justify-between items-start pt-10'}>
                    {/* section 1 */}
                    <div className={'w-[325px]'}>
                        <Image src="./img/Group-796.svg" className={'w-[267px] h-[63px] mb-4'} alt="" width={1000}
                               height={1000}/>
                        <p className={'text-sm leading-7'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                            استفاده از طراحان گرافیک است،
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                            مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                        </p>
                    </div>
                    {/* section 2 */}
                    <div>
                        {/* logo and head */}
                        <div className={'flex items-center gap-x-2'}>
                            <span className={'w-3 h-3 bg-emerald-600 inline-block rounded-full pt-2'}></span>
                            <Link href={"/"} className={'text-xl'}>
                                <span>خدمات مشتریان</span>
                            </Link>
                        </div>
                        {/* links */}
                        <div className={'flex flex-col gap-y-4 mt-7 text-sm'}>
                            <Link href={'/'}>
                                <span>همکاری در فروش</span>
                            </Link>
                            <Link href={'/'}>
                                <span>تخفیف‌ها</span>
                            </Link>
                            <Link href={'/'}>
                                <span>فرصت‌های شغلی</span>
                            </Link>
                            <Link href={'/'}>
                                <span>مرجوع کالا</span>
                            </Link>
                            <Link href={'/'}>
                                <span>سوالات متداول</span>
                            </Link>
                            <Link href={'/'}>
                                <span>سوالات متداول</span>
                            </Link>
                        </div>
                    </div>
                    {/* section 3 */}
                    <div>
                        {/* logo and head */}
                        <div className={'flex items-center gap-x-2'}>
                            <span className={'w-3 h-3 bg-emerald-600 inline-block rounded-full pt-2'}></span>
                            <Link href={"/"} className={'text-xl'}>
                                <span>لینک‌های مفید</span>
                            </Link>
                        </div>
                        {/* links */}
                        <div className={'flex flex-col gap-y-4 mt-7 text-sm'}>
                            <Link href={'/'}>
                                <span>صفحه اصلی</span>
                            </Link>
                            <Link href={'/'}>
                                <span>سفارش قهوه</span>
                            </Link>
                            <Link href={'/'}>
                                <span>درباره ما</span>
                            </Link>
                            <Link href={'/'}>
                                <span>فروشگاه ما</span>
                            </Link>
                            <Link href={'/'}>
                                <span>آخرین مقالات</span>
                            </Link>
                            <Link href={'/'}>
                                <span>تماس باما</span>
                            </Link>
                        </div>
                    </div>
                    {/* section 4 */}
                    <div>
                        {/* logo and head */}
                        <div className={'flex items-center gap-x-2'}>
                            <span className={'w-3 h-3 bg-emerald-600 inline-block rounded-full pt-2'}></span>
                            <Link href={"/"} className={'text-xl'}>
                                <span>راه‌های ارتباطی</span>
                            </Link>
                        </div>
                        {/* links */}
                        <div className={'flex flex-col gap-y-10 mt-7 text-sm'}>
                            <div className={'flex items-center gap-x-3'}>
                                <Phone className={'text-lg'}/>
                                <span>09123456789</span>
                            </div>
                            <div className={'flex items-center gap-x-3'}>
                                <Mail className={'text-lg'}/>
                                <span>Info@yoursite.com</span>
                            </div>
                            <div className={'flex items-center gap-x-3'}>
                                <Tel className={'text-lg'}/>
                                <span>12345687 - 035</span>
                            </div>
                            <div className={'flex items-center gap-x-3'}>
                                <Lock className={'text-lg'}/>
                                <span className={'w-[166px]'}>یزد ، خیابان طراحان سایت کوچه خوبان پ.22</span>
                            </div>
                        </div>
                    </div>
                    {/* section 5 */}
                    <div className={'w-[262px]'}>
                        {/* logo and head */}
                        <div className={'flex items-center gap-x-2 '}>
                            <span className={'w-3 h-3 bg-emerald-600 inline-block rounded-full pt-2'}></span>
                            <Link href={"/"} className={'text-xl'}>
                                <span>نماد اعتماد</span>
                            </Link>
                        </div>
                        {/* links */}
                        <div className={'mt-5'}>
                            <p className={'text-sm leading-7'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                                با استفاده از طراحان گرافیک است،
                                چاپگرها و متون میباشد.</p>
                        </div>
                        <div className={'flex justify-between mt-5'}>
                            <Image className={'mt-5 w-[90px] h-[90px] rounded-2xl'} src={'/img/Group-42.jpg'} alt={'ee'} width={'1000'}
                                   height={'1000'}></Image>
                            <Image className={'mt-5 w-[90px] h-[90px] rounded-2xl'} src={'/img/Group-42.jpg'} alt={'ee'} width={'1000'}
                                   height={'1000'}></Image>
                        </div>
                    </div>
                </div>
                <div className={'mt-12 flex items-center justify-between'}>
                    <p className={'text-xs'}>تمامی حقوق مادی و معنوی این سایت متعلق به سایت قهوه می باشد</p>
                    <div>
                        <InstagramIcon className={'text-[22px]'}/>
                        <TelegramIcon className={'text-[22px]'}/>
                        <YouTubeIcon className={'text-[22px]'}/>
                        <WhatsAppIcon className={'text-[22px]'}/>

                    </div>
                </div>


            </div>
            <div>

            </div>
        </footer>
    )
}
