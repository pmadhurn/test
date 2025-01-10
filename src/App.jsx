import './App.css';
import { NavLink } from "react-router-dom";
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Layout from './Layout'
import About from './Components/About';
import Api from './Components/Api';
import Api1 from './Components/Api1';
// import Ip from './Components/Ip';
// import geolocated from './Components/Geoloc';
import { useRef } from 'react';

const App = () => {
    const Aboutref = useRef(null)
    const Apiref = useRef(null)
    const Api1ref = useRef(null)
    
    const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    };

    // const router = createBrowserRouter([{

    //     path: '/',
    //     element: <Layout />,
    //     children : [{
    //         path: '/about',
    //         element: <About /> 
    //         },
    //         {
    //             path: '/api1',
    //             element: <Api />
    //     },{
    //         path: '/api2',
    //         element: <Api1 />
    //     }
    //     // ,{
    //     //     path:'IP',
    //     //     element: <Ip />
    //     // },
    //     // {
    //     // path: 'Geoloc',
    //     // element: <Geoloc />}
        
    // ]
    // }])

    return (
        <>
            {/* <RouterProvider router = {router} /> */}
        
            <div className="navbar">
                <nav className="navbar">
                    <ul className="ulist">

                       <li> <NavLink to="#about" onClick={() => handleScroll(Aboutref)} className="navtext">About</NavLink></li>
                       <li> <NavLink to="#api1" onClick={() => handleScroll(Apiref)} className="navtext">api for user tablex</NavLink></li>
                       <li> <NavLink to="#api2" onClick={() => handleScroll(Api1ref)} className="navtext">Todays Weather</NavLink></li>

                    </ul>
                </nav>

                <div className="content">

                    <section ref={Aboutref} id="about">
                        <About />
                    </section>

                    <section ref={Apiref} id="api1">
                        <Api />
                    </section>
                    <section ref={Api1ref} id="api2">
                        <Api1 />
                    </section>



                </div>
            </div>
        </>
  )
}

export default App