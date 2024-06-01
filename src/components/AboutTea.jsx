import React from 'react'

import Tea from '@mui/icons-material/CoffeeOutlined';
import Coffe from '@mui/icons-material/CoffeeMakerOutlined';
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import Cup from '@mui/icons-material/EmojiFoodBeverageOutlined';
import Test from '@mui/icons-material/RestartAltOutlined';

export default function AboutTea() {
    return (
        <div className={'w-full flex justify-between gap-x-4 p-4 rounded-2xl bg-zinc-900 text-white mt-20 mb-20'}>
            <div className={'flex flex-col text-center w-[200px] items-center'}>
                <Tea className={'h-[50px] w-[50px]'} />
                <h4 className={'text-2xl mt-5'}>چای ایرانی</h4>
                <p className={'text-xs mt-2'}>ما رست هفتگی قهوه و ارسال از درب کارخانه قهوه ی عمده است.</p>
            </div>
            <div className={'flex flex-col text-center w-[200px] items-center'}>
                <Coffe className={'h-[50px] w-[50px]'} />
                <h4 className={'text-2xl mt-5'}>اکسسوری ها</h4>
                <p className={'text-xs mt-2'}>ما رست هفتگی قهوه و ارسال از درب کارخانه قهوه ی عمده است.</p>
            </div>
            <div className={'flex flex-col text-center w-[200px] items-center'}>
                <LocalCafeOutlinedIcon className={'h-[50px] w-[50px]'} />
                <h4 className={'text-2xl mt-5'}>مشتقات قهوه</h4>
                <p className={'text-xs mt-2'}>ما رست هفتگی قهوه و ارسال از درب کارخانه قهوه ی عمده است.</p>
            </div>
            <div className={'flex flex-col text-center w-[200px] items-center'}>
                <Cup className={'h-[50px] w-[50px]'} />
                <h4 className={'text-2xl mt-5'}>قهوه عمده</h4>
                <p className={'text-xs mt-2'}>ما رست هفتگی قهوه و ارسال از درب کارخانه قهوه ی عمده است.</p>
            </div>
            <div className={'flex flex-col text-center w-[200px] items-center'}>
                <Test className={'h-[50px] w-[50px]'} />
                <h4 className={'text-2xl mt-5'}>قهوه اصیل
                </h4>
                <p className={'text-xs mt-2'}>ما رست هفتگی قهوه و ارسال از درب کارخانه قهوه ی عمده است.</p>
            </div>
        </div>
    )
}
