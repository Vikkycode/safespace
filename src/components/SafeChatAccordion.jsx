import React from 'react'
const AccordionItem = React.lazy(()=> import('../components/AccordionItem'))
const SafeChatAccordion = () => {
  return (
    <div class="space-y-4 py-10 sm:py-20">
    <AccordionItem 
    title="What is safeSpace?"
    detail="SafeSpace is a safe and anonymous platform dedicated to supporting survivors of sexual and gender-based violence. We provide a supportive community, resources, and tools for survivors to connect, access help, and share their experiences." 
    />
    <AccordionItem 
    title="Is SafeSpace anonymous?"
    detail=" Yes, SafeSpace prioritizes anonymity and confidentiality. Users have the option to remain anonymous when accessing support services or participating in community discussions." 
    />
      <AccordionItem 
    title="What support services does SafeSpace offer?"
    detail="SafeSpace offers various support services, including chat support with trained professionals, access to emergency contacts, a resources directory, self-care tools, and community forums for peer support." 
    />
    <AccordionItem 
    title="How can I access support on SafeSpace?"
    detail="You can access support on SafeSpace by visiting our website and navigating to the support section. From there, you can access chat support, browse our resources directory, or participate in community forums." 
    />
   <AccordionItem 
    title="Are the resources on SafeSpace free?"
    detail="Yes, all resources and support services provided by SafeSpace are free of charge for users." 
    />
     <AccordionItem 
    title="Is SafeSpace a confidential platform?"
    detail="There are several ways to contribute to SafeSpace, including volunteering, donating, or spreading awareness about our platform and mission." 
    />
      <AccordionItem 
    title="How can I contribute to SafeSpace?"
    detail="Yes, SafeSpace respects user privacy and confidentiality. Information shared on the platform is kept confidential, and users have the option to remain anonymous." 
    />
      <AccordionItem 
    title="Is SafeSpace accessible to everyone?"
    detail="Yes, SafeSpace is committed to accessibility and inclusion. Our platform is designed to be user-friendly and accessible to individuals of all backgrounds, identities, and abilities." 
    />
  </div>
  )
}

export default SafeChatAccordion