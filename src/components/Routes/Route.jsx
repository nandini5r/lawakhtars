import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import About from '../About/About'
import Contact  from '../Contact/Contact'
import Home from '../Home/Home'
import {RouterProvider} from 'react-router-dom'
import Content from '../Content/Content'
import Services from '../Services/Services'
import PageNotFound from '../../PageNotFound'
import Blog from '../Blog/Blog'


const Route = () => {
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
            children:[
                {
                    path:'/',
                    element:<Content/>
                },
                {
                    path: '/about',
                    element: <About />
                },
                {
                    path: '/contact',
                    element: <Contact />
                },
                {
                    path:'/services',
                    element:<Services/>
                },
                {
                    path:'/blog',
                    element:<Blog/>
                }
            ]
        },
        {
            path:'*',
            element:<PageNotFound/>
        }
       


    ])
    return (
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
}

export default Route
