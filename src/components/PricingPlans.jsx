import React from 'react'
import PricingBox from './PricingBox'

const PricingPlans = ({anually}) => {
  return (
      <PricingBox planType={anually} />
  )
}

export default PricingPlans