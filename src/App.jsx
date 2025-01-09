import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import About from './Components/About';
import Api from './Components/Api';

const App = () => {
    
    const router = createBrowserRouter([{

        path: '/',
        element: <Layout />,
        children : [{
            path: '/about',
            element: <About /> 
            },
            {
                path: '/api1',
                element: <Api />
    
        },
    
    ]

    }])

    return (
        <>
        <RouterProvider router = {router} />
        </>
  )
}

export default App