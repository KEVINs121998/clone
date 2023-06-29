import React from 'react'
import pic from '../images/1.jpg'
 
const Signup = () => {
  return (
    <div className='py-20 flex flex-column text-white'>
        <div className='w-1/2'> 
            <h1 className='text-7xl pb-3 font-bold'>Learn how to launch a</h1>
            <h1 className='text-7xl font-bold'>successful podcast</h1>
            <p className='pt-12'>Lorem Ipsum is simply dummy text of the printing</p>
             <p>and typesetting industry. Lorem Ipsum has been the </p>
             <p className='pb-20'> industry's standard dummy text ever since the 1500s</p>
             <button type="button" className="text-white bg-gradient-to-r from-blue-500 to-purple-400 hover:text-black focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-purple-500 font-medium rounded-lg text-sm px-12 py-5 text-center mr-2 mb-2">Sign up Now</button>
        </div>
        <div>
            {/* <img src={pic} className='' alt="img" /> */}
        </div>
    </div>
  )
}

export default Signup