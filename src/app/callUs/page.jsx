import React from 'react'

import Image from 'next/image'

export default function CallPage() {
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
      <section className='mt-10 flex justify-between items-center gap-x-8'>
        <div>
          <p className=''>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
          {/* ADDRESS */}
          <div>
              <div className='bg-gray-500'>
                <div>
                  <Image src={""} width={50} height={50} alt=''/>
                </div>
                <div>
                  <h5>ایمیل :</h5>
                  <span>Info@yoursite.com</span>
                </div>
              </div>
              <div className='bg-gray-600'>
                <h5>تلفن تماس :</h5>
                <span>12345687 - 035</span>
              </div>
          </div>
          <div>
            <div className='bg-gray-700'>
                  <h5>نشانی :</h5>
                  <span>تهران یافت اباد</span>
            </div>
            <div className='bg-gray-800'>
                  <h5>شبکه های اجتماعی:</h5>
                  <div>
                    <Image src={'./img/callus/send-2.svg'} alt='' width={50} height={50}/>
                    <Image src={'./img/callus/facebook.svg'} alt='' width={50} height={50}/>
                    <Image src={'./img/callus/whatsapp.svg'} alt='' width={50} height={50}/>
                    <Image src={'./img/callus/youtube.svg'} alt='' width={50} height={50}/>
                  </div>
            </div>
          </div>
      </div>  
      <div>
        <Image src={'/img/Blog/Group-88-min.png'} alt='' width={800} height={400}/>
      </div>
      </section>
    </div>
  )
}
