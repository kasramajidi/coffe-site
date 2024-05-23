import React from 'react'
import Image from 'next/image'
import localFont from "next/font/local";
import Link from 'next/link';


import { PhotoOne, PhotoTwo, PhotoThree } from '@/components/OrderImg';

const Morabab = localFont({
  src: "../../components/fonts/Morabba/woff2/Morabba-Bold.woff2"
})

const Danab = localFont({
  src: "../../components/fonts/Dana/woff2/DanaFaNum-DemiBold.woff2"
})

const Morabbalight = localFont({
  src: "../../components/fonts/Morabba/woff2/Morabba-Light.woff2"
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
          <PhotoOne />
          <span className={`font-bold ${Danab.className}`}>انتخاب نوع و نژاد قهوه</span>
          <Image src={'/img/order/Arrow_03.svg'} height={100} width={100} className='origin-top' />
          <PhotoTwo />
          <span className={`font-bold ${Danab.className}`}>تنظیم درصد رست و ترکیب</span>
          <Image src={'/img/order/Arrow_03 (1).svg'} height={100} width={100} className='-rotate-180 -scale-x-100' />
          <PhotoThree />
          <span className={`font-bold ${Danab.className}`}>ثبت سفارش و تحویل بسته</span>
        </div>
      </section>
      {/* SECTION THREE */}
      <section className='py-10 mt-20 bg-white rounded-2xl'>
        <div className='flex items-center justify-evenly p-10'>
          <div className='flex flex-col'>
            <span className={`font-bold text-green-600 text-3xl ${Morabab.className}`}>نژاد عربیکـــــا :</span>
            <span className={`text-justify w-64 mt-4 text-sm ${Danab.className}`}>در اینجا میبایست نژاد قهوه عربیکا خود را در بین گزینه های مقابل انتخاب نمایید.</span>
          </div>
          <div className='flex items-center bg-gray-200 p-5 rounded-3xl'>
            <div>
              <Image src={'/img/order/Mask-group.png'} width={100} height={100} alt='' />
            </div>
            <div className='flex flex-col mr-4'>
              <span className={Danab.className}>Kenya</span>
              <span className={Morabbalight.className}>خواستگاه: کنیــا</span>
              <span className={Morabbalight.className}>رست : مدیوم</span>
            </div>
          </div>
          <div className='flex items-center bg-gray-200 p-5 rounded-3xl'>
            <div>
              <Image src={'/img/order/Mask-group-1.png'} width={100} height={100} alt='' />
            </div>
            <div className='flex flex-col mr-4'>
              <span className={Danab.className}>Colombia</span>
              <span className={Morabbalight.className}>خواستگاه: کلمبیـــــا</span>
              <span className={Morabbalight.className}>رست : مدیوم</span>
            </div>
          </div>
          <div className='flex items-center bg-gray-200 p-5 rounded-3xl'>
            <div>
              <Image src={'/img/order/Mask-group-2.png'} width={100} height={100} alt='' />
            </div>
            <div className='flex flex-col mr-4'>
              <span className={Danab.className}>Peru</span>
              <span className={Morabbalight.className}>خواستگاه: پـــرو</span>
              <span className={Morabbalight.className}>رست : مدیوم</span>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-evenly p-10'>
          <div className='flex flex-col'>
            <span className={`font-bold text-green-600 text-3xl ${Morabab.className}`}>نژاد روبوســـتا :</span>
            <span className={`text-justify w-64 mt-4 text-sm ${Danab.className}`}>در اینجا میبایست نژاد قهوه عربیکا خود را در بین گزینه های مقابل انتخاب نمایید.</span>
          </div>
          <div className='flex items-center bg-gray-200 p-5 rounded-3xl'>
            <div>
              <Image src={'/img/order/Mask-group-3.png'} width={100} height={100} alt='' />
            </div>
            <div className='flex flex-col mr-4'>
              <span className={Danab.className}>Indonesia</span>
              <span className={Morabbalight.className}>خواستگاه: اندونــزی</span>
              <span className={Morabbalight.className}>رست : مدیوم</span>
            </div>
          </div>
          <div className='flex items-center bg-gray-200 p-5 rounded-3xl'>
            <div>
              <Image src={'/img/order/Mask-group-4.png'} width={100} height={100} alt='' />
            </div>
            <div className='flex flex-col mr-4'>
              <span className={Danab.className}>Vietnam</span>
              <span className={Morabbalight.className}>خواستگاه: ویتنـــام</span>
              <span className={Morabbalight.className}>رست : مدیوم</span>
            </div>
          </div>
          <div className='flex items-center bg-gray-200 p-5 rounded-3xl'>
            <div>
              <Image src={'/img/order/Mask-group-5.png'} width={100} height={100} alt='' />
            </div>
            <div className='flex flex-col mr-4'>
              <span className={Danab.className}>India</span>
              <span className={Morabbalight.className}>خواستگاه: هنـــد</span>
              <span className={Morabbalight.className}>رست : مدیوم</span>
            </div>
          </div>
        </div>
        {/* SECTION THREE */}
        <div className={'flex items-center gap-x-2 text-zinc-900 justify-center py-10'}>
          <Image src={'/img/icon.svg'} alt={'dhd'} width={'38'} height={'38'}></Image>
          <h4 className={`${Morabab.className} text-4xl`}>تنظیم ترکیبات قهوه</h4>
          <Image className={'mt-5'} src={'/img/brag.svg'} alt={'ee'} width={'36'} height={'36'}></Image>
        </div>
        {/* SECTION FOURE */}
        <div className='flex items-center justify-evenly p-10'>
          <div className='flex flex-col'>
            <span className={`font-bold text-green-600 text-3xl ${Morabab.className}`}>درصد ترکیب عربیکا :</span>
            <span className={`text-justify w-64 mt-4 text-sm ${Danab.className}`}>میزان قهوه عربیکا در ترکیب سفارشی خود را به درصد انتخاب نمایید .</span>
          </div>
          <div>
          </div>

        </div>
      </section>
    </div>
  )
}
