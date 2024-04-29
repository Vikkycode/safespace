import React from 'react'
import AccordionItem from './AccordionItem'

const ResourcesAccordion = () => {
  return (
    <section class="space-y-4 py-10 sm:py-20">
    <AccordionItem 
    title="risk"
    detail=" Guidelines for Integrating Gender-Based Violence Interventions in Humanitarian Action" 
    />
    <AccordionItem 
    title="Prevention"
    detail="Inter-agency Gender-Based Violence Case Management Guidelines" 
    />
      <AccordionItem 
    title="Response"
    detail="Inter-agency Gender-Based Violence Case Management Guidelines" 
    />
    <AccordionItem 
    title="Innovation"
    detail="feminist assessment of the humanitarian aid system's support of women- and girl-led organizations" 
    />
  </section>
  )
}

export default ResourcesAccordion