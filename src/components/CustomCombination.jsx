import React from 'react'

import Image from 'next/image'

import localFont from "next/font/local";

const MorabaLight = localFont({
    src: "../components/fonts/Morabba/woff2/Morabba-Light.woff2"
})

export default function CustomCombination() {
    return (
        <div>
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
        </div>
    )
}
