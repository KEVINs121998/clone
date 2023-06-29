import React from 'react'
import Card from './Card'

const Plan = () => {
  return (
    <div className='text-center items-center my-20'>
        <h1 className='text-4xl font-bold'>Choose your plan</h1>
        <div className='py-10'>
        <p>Lorem Ipsum is simply dummy text of the printing and</p>
        <p>typesetting industry. Lorem Ipsum has been the industry's</p>
        </div>
        <div className='pb-16'>
        <label for="themeSwitcherOne" class=" themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-xl shadow-2xl bg-white p-1">
   <input type="checkbox" name="themeSwitcherOne" id="themeSwitcherOne" class="sr-only"/>
   <span className="hover:bg-purple-300 hover:text-white light text-primary bg-gray flex items-center space-x-[6px] rounded-xl py-2 px-[18px] text-sm font-medium">
      Monthly
   </span>
   <span className="hover:bg-purple-300 hover:text-white dark text-body-color flex items-center space-x-[6px] py-2 px-[18px] text-sm font-medium rounded-xl ">
    Yearly
   </span>
</label>
        </div>
        <div className='flex flex-column justify-between px-28'>
    <Card/>
    <Card/>
    <Card/>
        </div>
    </div>
  )
}

export default Plan