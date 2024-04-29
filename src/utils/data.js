import diversity from '../assets/images/Diversity.png'
import selfcare from '../assets/images/Selfcare.png'
import target from '../assets/images/Target.png'
import chat from '../assets/images/Chat.png'

import tunde from '../assets/images/tunde.png'
import mariam  from '../assets/images/Mariam Profile 1.png'
import lateefah  from '../assets/images/lateefah Image 1.png'
import muteat  from '../assets/images/Muteeat Olaide 1.png'
import salish  from '../assets/images/WhatsApp Image 2024-03-17 at 02.32 1.png'
const Navitems = [
    {
        name:'home',
        path:'/',
        target:'home'
    },
    {
        name:'resources',
        path:'/resources',
        target:'resources'
    },
    {
        name:'about us',
        path:'/about',
        target:'about us'
    },

]


const featureItems = [
    {
        image:diversity,
        name:"join forums"
    },
    {
        image:selfcare,
        name:"self care"
    },
    {
        image:target,
        name:"ways we give"
    },
    {
        image:chat,
        name:"safe chat"
    }
]

const teamsData = [
    {
        name:'Tunde-sanni Oreoluwa H.',
        role:'lead Designer',
        image:tunde
    },
    {
        name:'Ahmad mariam bolanle',
        role:' Designer',
        image:mariam
    },
    {
        name:'ettu temitope latifat',
        role:'Designer',
        image:lateefah
    },
    {
        name:'Odekunle Dorcas',
        role:'Designer',
        image:lateefah
    },
    {
        name:'Ibrahim olaide Muteeat',
        role:'lead developer',
        image:muteat
    },
    {
        name:'salihu Basirah',
        role:'developer',
        image:salish
    },
]
export  {Navitems, featureItems, teamsData}