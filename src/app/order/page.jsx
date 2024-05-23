import React from 'react'
import Image from 'next/image'
import localFont from "next/font/local";
import Link from 'next/link';


import {PhotoOne, PhotoTwo, PhotoThree} from '@/components/OrderImg';

const Morabab = localFont({
  src: "../../components/fonts/Morabba/woff2/Morabba-Bold.woff2"
})

const Danab = localFont({
  src: "../../components/fonts/Dana/woff2/DanaFaNum-DemiBold.woff2"
})

import CoffeeIcon from '@mui/icons-material/Coffee';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

export default function Order() {
  return (
    <div className=' w-[85%] m-auto mt-20'>
      {/* section 1 */}
      <section className={'flex'}>
        {/* right div */}
        <div className={'w-[50%] '}>
          {/* log */}
          <div className={'flex items-center gap-x-2 text-zinc-900'}>
            <Image src={'/img/icon.svg'} alt={'dhd'} width={'38'} height={'38'}></Image>
            <h4 className={`${Morabab.className} text-4xl`}>ترکیب سفارشی</h4>
            <Image className={'mt-5'} src={'/img/brag.svg'} alt={'ee'} width={'36'} height={'36'}></Image>
          </div>
          <p className={'mt-5 text-zinc-700 text-sm leading-7 text-justify'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
            شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد
            ، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد .
          </p>
          { /* buttons */}
          <div className={'flex mt-10 gap-x-5'}>
            <Link href={"/"}
              className={'bg-emerald-700 rounded-3xl flex items-center justify-center text-white w-[136px] h-[43px] text-sm'}>
              <CoffeeIcon className={''} />
              <span className={'mr-1 font-bold'}>بزن بریم</span>
            </Link>
            <Link href={"/"}
              className={'bg-white rounded-3xl flex items-center justify-center text-emerald-600 w-[136px] h-[43px] text-sm'}>
              <HelpOutlineOutlinedIcon className={''} />
              <span className={'mr-1'}>سوالی دارید؟!</span>
            </Link>
          </div>
        </div>
        {/* left div */}
        <div className={'w-[50%] mr-5'}>
          <Image className={'w-[634px] h-[400px] rounded-3xl'} width={1000} height={1000}
            src="/img/order/Frame-304-min.jpg"
            alt="c" />
        </div>
      </section>
      {/* SECTION TWO */}
      <section className='py-10 mt-20'>
        <div className='flex items-center justify-between'>
          <PhotoOne/>
          <span className={`font-bold ${Danab.className}`}>انتخاب نوع و نژاد قهوه</span>
          <Image src={'/img/order/Arrow_03.svg'} height={100} width={100} className='origin-top'/>
          <PhotoTwo/>
          <span className={`font-bold ${Danab.className}`}>تنظیم درصد رست و ترکیب</span>
          <Image src={'/img/order/Arrow_03 (1).svg'} height={100} width={100} className='-rotate-180 -scale-x-100'/>
          <PhotoThree/>
          <span className={`font-bold ${Danab.className}`}>ثبت سفارش و تحویل بسته</span>
        </div>
      </section>
      {/* SECTION THREE */}
      <section className='py-10 mt-20'>
        
      </section>
    </div>
  )
}
