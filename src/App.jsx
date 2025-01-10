import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import About from './Components/About';
import Api from './Components/Api';
import Api1 from './Components/Api1';
import Ip from './Components/Ip';
import geolocated from './Components/Geoloc';

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
        },{
            path: '/api2',
            element: <Api1 />
        },{
            path:'IP',
            element: <Ip />
        },{
    path: 'Geoloc',
    element: <Geoloc />}
    ]
    }])

    return (
        <>
        <RouterProvider router = {router} />
        </>
  )
}

export default App