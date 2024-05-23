import React from 'react'

import localFont from "next/font/local";

const Morabbalight = localFont({
  src: "../../components/fonts/Morabba/woff2/Morabba-Light.woff2"
})

const Danab = localFont({
  src: "../../components/fonts/Dana/woff2/DanaFaNum-DemiBold.woff2"
})

import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Link from 'next/link';


export default function AccountPage() {
  return (
    <div className='w-[85%] m-auto mt-20'>
      <div className='flex items-start justify-evenly'>
        {/* SECTION LOG IN */}
        <div className=' flex flex-col w-[40%]'>
          <h1 className={`${Danab.className} py-5 font-bold text-xl`}>عضویت</h1>
          <form method='get' className='flex flex-col items-start justify-center p-5 bg-gray-300 rounded-2xl'>
            <label htmlFor="firstname" className={`${Morabbalight.className} py-3`}>نام کاربری <span className='text-red-600'>*</span></label>
            <input type="text" name='firstname' className='w-full rounded-2xl py-1' />

            <label htmlFor="email" className={`${Morabbalight.className} py-3`}>آدرس ایمیل <span className='text-red-600'>*</span></label>
            <input type="email" name='email' className='w-full rounded-2xl py-1' />


            <label htmlFor="password" className={`${Morabbalight.className} py-3`}>گذرواژه <span className='text-red-600'>*</span></label>
            <div className='flex items-center w-full bg-white rounded-2xl'>
              <input type="password" name='password' className='w-full rounded-2xl py-1' /><VisibilityOutlinedIcon className='ml-5 cursor-pointer' />
            </div>


            <span className={`${Morabbalight.className} py-5 text-justify text-sm w-[80%]`}>اطلاعات شخصی شما برای پردازش سفارش شما استفاده می‌شود، و پشتیبانی از تجربه شما در این وبسایت، و برای اهداف دیگری که در سیاست حفظ حریم خصوصی توضیح داده شده است.</span>

            <input type="submit" value={'عضویت'} className={`${Danab.className} bg-green-600 text-white py-2 px-6 rounded-2xl hover:bg-amber-950 cursor-pointer duration-500`} />
          </form>
        </div>
        {/* SECTION SING IN  */}
        <div className='flex flex-col w-[40%]'>
          <h1 className={`${Danab.className} py-5 font-bold text-xl`}>ورود</h1>
          <form method='get' className='flex flex-col items-start justify-center p-5 bg-gray-300 rounded-2xl'>

            <label htmlFor="firstname" className={`${Morabbalight.className} py-3`}>نام کاربری یا آدرس ایمیل<span className='text-red-600'>*</span></label>
            <input type="text" name='firstname' className='w-full rounded-2xl py-1' />

            <label htmlFor="password" className={`${Morabbalight.className} py-3`}>گذرواژه <span className='text-red-600'>*</span></label>
            <div className='flex items-center w-full bg-white rounded-2xl'>
              <input type="password" name='password' className='w-full rounded-2xl py-1' /><VisibilityOutlinedIcon className='ml-5 cursor-pointer' />
            </div>

            <div className='flex items-center py-5'>
              <input type="submit" value={'عضویت'} className={`${Danab.className} bg-green-600 text-white py-2 px-6 rounded-2xl hover:bg-amber-950 cursor-pointer duration-500 ml-5`} />
              <div className='flex items-center justify-between'>
                <input type="checkbox" className='ml-2' />
                <span className={`${Danab.className} opacity-45`}>مرا به خاطر بسپار</span>
              </div>
            </div>

            <Link href={'/'}>
              <span className={`${Danab.className} text-sm opacity-50 hover:text-green-700 duration-300`}>گذرواژه خود را فراموش کرده اید؟</span>
            </Link>
          </form>
        </div>

      </div>
    </div>
  )
}
