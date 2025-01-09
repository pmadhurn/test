import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'

const App = () => {
    
    const router = createBrowserRouter([{

        path: '/',
        element: <Layout />,
        children=[{
            
        }]

    }])

    return (
        <>
        <RouterProvider router = {router} />
        </>
  )
}

export default App