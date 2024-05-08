import diversity from '../assets/images/Diversity.webp'
import selfcare from '../assets/images/Selfcare.webp'
import target from '../assets/images/Target.webp'
import chat from '../assets/images/Chat.webp'
import tunde from '../assets/images/tunde.webp'
import mariam  from '../assets/images/Mariam.webp'
import lateefah  from '../assets/images/lateefah.webp'
import muteat  from '../assets/images/Muteeat.webp'
import salish  from '../assets/images/salish.webp'
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
        name:"we give ways"
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