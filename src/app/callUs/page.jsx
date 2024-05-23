"use client"
import React, { useState } from 'react'
import Link from 'next/link';

import Image from 'next/image'

import localFont from "next/font/local"
import { log } from 'next/dist/server/typescript/utils';



{/* FONT */ }
const Danareg = localFont({
  src: "./../../components/fonts/Dana/woff2/DanaFaNum-Regular.woff2"
})


export default function CallPage() {
  {/* BUTTON SUBMIT */}


  return (
    <div className={"w-[85%] m-auto mt-12"}>
      {/* SECTION ONE */}
      <section className={'mt-24'}>
        <div className={'flex items-center gap-x-2'}>
          <Image src={'/img/icon.svg'} alt={'dhd'} width={'38'} height={'38'}></Image>
          <h4 className={'text-4xl'}>تماس با ما </h4>
          <Image className={'mt-5'} src={'/img/brag.svg'} alt={'ee'} width={'36'} height={'36'}></Image>
        </div>
      </section>
      {/* SECTION SENTENCE */}
      <section className='flex justify-between items-center gap-x-8'>
        <div className='w-1/2'>
          <div className={Danareg.className}>
            <p className='text-justify text-sm mb-10'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
          </div>
          {/* ADDRESS */}
          <div className='grid grid-cols-8 gap-4'>
            <div className='shadow-xl w-auto rounded-lg bg-gray-200 flex items-center p-8 col-start-1 col-end-4 h-2/3'>
              <div>
                <Image src={"./img/callus/email-svgrepo-com (1).svg"} width={50} height={50} alt='' className='p-1' />
              </div>
              <div className='p-2'>
                <div className={Danareg.className}>
                  <h5 className='font-bold'>ایمیل :</h5>
                  <span>Info@yoursite.com</span>
                </div>
              </div>
            </div>
            <div className='shadow-xl w-auto rounded-lg bg-gray-200 flex items-center p-8 col-start-4 col-end-7 h-2/3'>
              <div>
                <Image src={"./img/callus/call-ringing-svgrepo-com (2).svg"} width={60} height={60} alt='' />
              </div>
              <div className={Danareg.className}>
                <h5 className='font-bold'>تلفن تماس :</h5>
                <span>12345687 - 035</span>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-8 gap-4'>
            <div className='shadow-xl w-auto rounded-lg bg-gray-200 flex items-center p-8 col-start-2 col-end-5 h-2/3'>
              <div>
                <Image src={'./img/callus/map-marker-2-svgrepo-com.svg'} width={60} height={60} alt='' className='mr-1' />
              </div>
              <div className={Danareg.className}>
                <h5 className='font-bold'>نشانی :</h5>
                <span>تهران یافت اباد</span>
              </div>
            </div>
            <div className='shadow-xl w-auto rounded-lg bg-gray-200 flex items-center p-8 col-start-5 col-end-8 h-2/3'>
              <div>
                <Image src={'./img/callus/whatsapp-svgrepo-com.svg'} width={60} height={60} alt='' className='p-1' />
              </div>
              <div className={Danareg.className}>
                <h5 className='p-1 font-bold'>شبکه های اجتماعی: </h5>
                <div className='flex items-center justify-start p-2'>
                  <Image src={'./img/callus/send-2.svg'} alt='' width={18} height={18} className='mr-2 hover:scale-125 cursor-pointer duration-300' />
                  <Image src={'./img/callus/facebook.svg'} alt='' width={18} height={18} className='mr-2 hover:scale-125 cursor-pointer duration-300' />
                  <Image src={'./img/callus/whatsapp.svg'} alt='' width={18} height={18} className='mr-2 hover:scale-125 cursor-pointer duration-300' />
                  <Image src={'./img/callus/youtube.svg'} alt='' width={18} height={18} className='mr-2 hover:scale-125 cursor-pointer duration-300' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image src={'/img/Blog/Group-88-min.png'} alt='' width={600} height={600} />
        </div>
      </section>

      {/* SECTION MAP */}

      <section className={'m-24'}>
        <div className={Danareg.className}>
          <form method='get' className='flex items-start flex-col bg-gray-300 p-10 rounded-lg w-96 h-auto absolute z-30 forrm'>
            <span className='mb-5 text-sm font-bold'>پذیرای انتقادات و پیشنهادات شما هستیم.</span>
            <input type="text" placeholder='نام و نام خانوادگی :' className='p-2 rounded-2xl my-3 text-sm w-80 focus:outline-none' />
            <input type="email" placeholder='پست الکترونیکی :' className='p-2 rounded-2xl my-3 text-sm w-80 focus:outline-none' />
            <input type="text" placeholder='موضوع پیام :' className='p-2 rounded-2xl my-3 text-sm w-80 focus:outline-none' />
            <textarea placeholder='متن پیام: ' className='p-2 rounded-2xl my-3 text-sm w-80 focus:outline-none' />
            <input type="submit" value={'ارسال'} className='self-end bg-green-700 py-2 px-8 mt-2 text-white border-solid border-2 rounded-2xl border-black cursor-pointer'/>          </form>
        </div>
        <div className='grid grid-cols-5 grid-rows-1 gap-3'>
          <img src="./img/callus/Map-min-2.png" alt="" className='w-full h-96 col-start-2 col-end-6 row-start-1 row-end-2 mt-14 cursor-pointer' />
        </div>
      </section>

      {/* SECTION QUSETION */}

      <section>
        <section className={'mt-24'}>
          <div className={'flex items-center gap-x-2 justify-center'}>
            <Image src={'/img/icon.svg'} alt={'dhd'} width={'38'} height={'38'}></Image>
            <h4 className={'text-4xl'}>سوالات متداول</h4>
            <Image className={'mt-5'} src={'/img/brag.svg'} alt={'ee'} width={'36'} height={'36'}></Image>
          </div>
        </section>
        {/* QUSTION */}
        <section>
          <div class="max-w-screen-xl mx-auto px-5 min-h-sceen my-10">
            <div class="grid divide-y divide-neutral-200 max-w-4xl mx-auto mt-8 gap-4 cursor-pointer">
              <div class="py-5 rounded-2xl bg-gray-200">
                <details class="group">
                  <summary class="flex justify-between items-center font-medium cursor-pointer list-none px-4">
                    <span className={Danareg.className}> آیا امکان خرید به صورت حضوری وجود دارد؟</span>
                    <span class="transition group-open:rotate-180">
                      <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className={Danareg.className}>
                    <p class="text-neutral-600  text-sm text-justify px-5 mt-3 group-open:animate-fadeIn">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.
                    </p>
                  </div>
                </details>
              </div>
              <div class="py-5 rounded-2xl bg-gray-200">
                <details class="group">
                  <summary class="flex justify-between items-center font-medium cursor-pointer list-none px-4">
                    <span className={Danareg.className}> مکان تعویض یا پس دادن کالا وجود دارد؟</span>
                    <span class="transition group-open:rotate-180">
                      <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className={Danareg.className}>
                    <p class="text-neutral-600  text-sm text-justify px-5 mt-3 group-open:animate-fadeIn">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.
                    </p>
                  </div>
                </details>
              </div>
              <div class="py-5 rounded-2xl bg-gray-200">
                <details class="group">
                  <summary class="flex justify-between items-center font-medium cursor-pointer list-none px-4">
                    <span className={Danareg.className}> آیا اصالت کالا ها تضمین میشود؟</span>
                    <span class="transition group-open:rotate-180">
                      <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className={Danareg.className}>
                    <p class="text-neutral-600 text-sm text-justify px-5 mt-3 group-open:animate-fadeIn">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>
      </section>

    </div>
  )
}
