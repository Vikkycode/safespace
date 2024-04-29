import React from 'react'
import {useRoutes} from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import AboutPage from './pages/AboutPage'
import DonatePage from './pages/DonatePage'
import ResourcePage from './pages/ResourcePage'
import CommunityForum from './pages/CommunityPage'
import ContactUsPage from './pages/ContactUsPage'
import SafeChatPage from './pages/SafeChatPage'

const Routes = () => {
    let element = useRoutes([
        {
            path:'/',
            element:<Home />
        },
        {
            path:'*',
            element:<NotFound />
        },
        {
            path:'/about',
            element:<AboutPage />
        },
        {
            path:'/donate',
            element:<DonatePage />
        },
        {
            path:'/resources',
            element:<ResourcePage />
        },
        {
            path:'/forum',
            element:<CommunityForum />
        },
        {
            path:'/contact',
            element:<ContactUsPage />
        },
        {
            path:'/safechat',
            element:<SafeChatPage />
        },
    ])
    return element
}

export default Routes
