import React,{Suspense} from 'react'

import { Loader } from 'lucide-react'

const Hero = React.lazy(()=> import('../components/Hero'))
const Team = React.lazy(()=> import('../components/Team'))
const Impact = React.lazy(()=> import('../components/Impact'))
const Testimonials = React.lazy(()=> import('../components/Testimonials'))
const Donate = React.lazy(()=> import('../components/Donate'))


const Home = React.memo(() =>{
  
    return (
      <div className={`mx-auto max-w-screen-xl`}>
        <Suspense fallback={<Loader />}>
        <Hero />
        <Team />
        <Impact />
        <Testimonials />
        <Donate />
        </Suspense>
      </div>
    )
  }
) 
export default Home