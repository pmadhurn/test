import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar"


const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet/>
      {/* Your application content */}
    </div>
  

)
}

export default Layout