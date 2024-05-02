import React from 'react'
import AccordionItem from './AccordionItem'

const FAQAccordion =React.memo(() => {
    return (
      <div class="space-y-4 py-10 sm:py-20">
      <AccordionItem 
      title="How can I donate to SafeSpace?"
      detail="Yes, SafeSpace is a registered nonprofit organization, and donations made to us are typically tax-deductible. After making a donation, you will receive a receipt or confirmation email that you can use for tax purposes." 
      />
      <AccordionItem 
      title="Is my donation to SafeSpace tax-deductible?"
      detail=" Yes, SafeSpace is a registered nonprofit organization, and donations made to us are typically tax-deductible. After making a donation, you will receive a receipt or confirmation email that you can use for tax purposes." 
      />
        <AccordionItem 
      title="Where does my donation to SafeSpace go?"
      detail="Your donation to SafeSpace goes towards supporting our mission of providing a safe and supportive platform for survivors of sexual and gender-based violence. This includes funding our support services, maintaining our website, and expanding our reach to support more survivors." 
      />
      <AccordionItem 
      title="Where does my donation to SafeSpace go?"
      detail="Your donation to SafeSpace goes towards supporting our mission of providing a safe and supportive platform for survivors of sexual and gender-based violence. This includes funding our support services, maintaining our website, and expanding our reach to support more survivors." 
      />
     <AccordionItem 
      title="Can I make a recurring donation to SafeSpace?"
      detail=" Yes, you have the option to make a one-time donation or set up a recurring donation to SafeSpace. Recurring donations help provide stable funding for our ongoing programs and services." 
      />
       <AccordionItem 
      title="Is my donation to SafeSpace secure??"
      detail="  Yes, SafeSpace takes the security of your donation seriously. We use secure payment processing systems to ensure that your personal and financial information is protected." 
      />
    </div>
    )
  }
)
export default FAQAccordion