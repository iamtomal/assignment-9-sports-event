import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleSignOut = () =>{
        logOut()
        .then()
        .catch()

    }

    const navLink = <>
    <div className="flex gap-2 md:gap-6 lg:gap-6 text-center ">
        <li><NavLink to='/' style={({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "",
      color: isActive ? "orange" : "",
    };
  }}
>Home</NavLink></li>

        <li><NavLink to='/services' style={({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "",
      color: isActive ? "orange" : "",
    };
  }}
>Services</NavLink></li>

        <li><NavLink to='/sponsor' style={({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "",
      color: isActive ? "orange" : "",
    };
  }}
>Sponsors</NavLink></li>

        <li><NavLink to='/contact' style={({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "",
      color: isActive ? "orange" : "",
    };
  }}
>Contact</NavLink></li>

        <li><NavLink to='/about' style={({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "",
      color: isActive ? "orange" : "",
    };
  }}
>About</NavLink></li>

    </div>
    </>
    return (
        <div className="flex flex-col-reverse justify-center lg:flex-row md:justify-between lg:justify-between items-center">

  <div className="overflow-hidden">
    
      <ul className=" font-raleway p-2 font-bold rounded-md text-sm md:text-lg lg:text-lg">
        {navLink}
      </ul>

  </div>

  <div className="flex justify-center gap-4 items-center">




      {user ? 
      <>
      <div className="">
      {
        user && user.photoURL? 
      <img className="w-9 h-9 rounded-full border border-orange-700 p-0.5" src={user.photoURL} alt=""/>:
      <img className="w-7 h-7" src="https://i.ibb.co/P5hTkcJ/1144811.png" alt=""/>
        }
      </div>

      <div className="font-raleway font-extrabold">
        <p>{user?.displayName}</p>
      </div>

       <button onClick={handleSignOut} className=" bg-orange-600 text-white p-2 rounded-md font-concert px-4 "> logOut </button>
      </>
       
       :

        <Link to='/login'>
    <button className=" bg-orange-600 text-white p-2 rounded-md font-concert px-4 "> LogIn </button>
    </Link>
      }

  </div>

</div>
    );
};

export default Navbar;