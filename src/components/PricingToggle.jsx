import React from 'react'

const PricingToggle = ({toggle, setToggle}) => {

  return (
    <div>
      <h1 className='text-center text-3xl text-slate-500'>Our Pricing</h1>
      <div className='flex justify-center items-center gap-x-6 mt-10 mb-18'>
        <span className='text-gray-400'>Anually</span>
        <div className="flex items-center">
            <label className="relative inline-flex items-center cursor-pointer duration-200 hover:brightness-125">
                <input type="checkbox" onChange={() => setToggle(!toggle)} checked={toggle}  className="sr-only peer" />
                <div className="w-12 h-6.5 rounded-full dark:bg-gradient-to-r dark:from-indigo-300 dark:to-indigo-500"></div>
                <div className="absolute left-1 top-0.9 w-5 h-5 bg-white border border-gray-300 rounded-full transition-transform peer-checked:translate-x-full"></div>
            </label>
        </div>
        <span className='text-gray-400'>Montly</span>
      </div>
    </div>
  )
}

export default PricingToggle