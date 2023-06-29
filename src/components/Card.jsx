import React from 'react'

const Card = () => {
  return (
    <div>
        <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 hover:bg-purple-800 hover:text-white  dark:border-gray-700 text-black">
        <h5 className="flex justify-start mb-2 text-xl font-medium">Standard plan</h5>
        <div className="text-left py-4">
        <p>Lorem Ipsum is simply dummy text of the</p>
        <p>printing and typesetting</p>
        </div>
        <div class="flex items-baseline ">
            <span class="text-3xl font-semibold">$</span>
            <span class="text-5xl font-extrabold tracking-tight">49</span>
            <span class="ml-1 text-xl font-normal">/month</span>
        </div>
        <ul role="list" className="space-y-5 my-7 list-disc list-inside">
            <li class="text-start">
                <span class="text-base font-normal leading-tight">2 team members</span>
            </li>
            <li class="text-start">
                <span class="text-base font-normal leading-tight">20GB Cloud storage</span>
            </li>
            <li class="text-start">
                <span class="text-base font-normal leading-tight text-gblack">Integration help</span>
            </li>
        </ul>
        <button type="button" className="flex justify-start border-2 border-purple-500 hover:border-blue-500 bg-white text-black  focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5   ">Start Free Trial</button>
    </div>

    </div>
  )
}

export default Card