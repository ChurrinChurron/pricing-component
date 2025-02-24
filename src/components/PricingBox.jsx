import plans from "../data.json"

const PricingBox = ({planType}) => {
  return (
    <div className="relative max-w-96 mx-auto grid grid-cols-1 gap-y-8 shadow-gray-300 lg:grid-cols-3 lg:gap-x-16 lg:max-w-4xl lg:right-10">
      {plans.map(plan =>     
      <div key={plan.name} className={`relative px-8 py-7 text-center rounded-lg ${plan.name !== "Professional" ? 'bg-white text-gray-600 lg:h-[27em] lg:w-[21em] lg:top-3' : 'bg-gradient-to-r from-indigo-300 to-indigo-400 text-white lg:z-10 lg:left-2 lg:py-8 lg:w-[20em] lg:h-[28.5em] lg:place-content-center'}`}>
        <h2>{plan.name}</h2>
        {planType ? <h3 className='flex justify-center items-center my-6.5 text-6xl'><span className='text-3xl'>$</span>{plan.monthly_price}</h3> : <h3 className='flex justify-center items-center my-6.5 text-6xl'><span className='text-3xl'>$</span>{plan.annual_price}</h3>}
        <hr className='border-gray-300'/>
        <h4 className='my-4 text-sm'>{plan.storage} Storage</h4>
        <hr className='border-gray-300'/>
        <h4 className='my-4 text-sm'>{plan.users_allowed} Users Allowed</h4>
        <hr className='border-gray-300'/>
        <h4 className='my-4 text-sm'>Send up to {plan.send_limit}</h4>
        <hr className='border-gray-300'/>
        <a href='' className={`group block mt-8 py-3 rounded-md text-sm tracking-widest border-1 border-transparent duration-200 ${plan.name !== "Professional" ? 'bg-gradient-to-r from-indigo-300 to-indigo-400 hover:from-white hover:to-white hover:border-purple-900' : 'bg-white hover:bg-transparent hover:border-white'}`}>
          <span className={`duration-200 ${plan.name !== "Professional" ? 'text-white group-hover:text-indigo-300' : 'bg-gradient-to-r from-indigo-300 to-indigo-400 bg-clip-text text-transparent group-hover:from-white group-hover:to-white'}`}>LEARN MORE</span>
        </a>
      </div>
      )}
    </div>
  )
}

export default PricingBox