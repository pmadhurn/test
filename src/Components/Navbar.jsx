import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <ul className="ulist">
          <NavLink to="about" className={'navtext'}>About</NavLink>
          <NavLink to="Api1" className={'navtext'}>api for user tablex</NavLink>

        </ul>
      </div>
    </>
  )
}

export default Navbar