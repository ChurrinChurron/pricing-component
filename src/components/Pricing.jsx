import PricingToggle from './PricingToggle'
import PricingPlans from './PricingPlans'
import { useState } from 'react'

const Pricing = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <section>
      <PricingToggle toggle={toggle} setToggle={setToggle} />
      <PricingPlans anually={toggle}/>
    </section>
  )
}

export default Pricing