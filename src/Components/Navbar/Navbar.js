import React,{useState} from 'react'
import navbarLogo from "../../images/logo-white.png"
import "./Navbar.css"
import { MenuData } from '../../constants'
import {Link} from 'react-router-dom';

function Navbar() {
    const [active,setActive] = useState("");
    const [state,setState] = useState({clicked:false});
  
    const handleClick = ()=>{
        setState((prev)=>{
            return {clicked:!prev.clicked}
    });
    }

    const handleClick2 = (url)=>{
        const element = document.getElementById(url);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      

    return (
    <nav className="NavbarItems">
        <Link to="/" onClick={()=>{
            setActive("");
            window.scrollTo(0,0);
        }} className="navbarMainLink"><h1><img alt="navbar_img" className="navbarLogo" src = {navbarLogo} />Anirudh | SDE Intern | Walmart</h1></Link>
        <div className="menuIcons" onClick={handleClick}>
            <i className={state.clicked ? "fas fa-times": "fas fa-bars"}></i>
        </div>
        <ul className={state.clicked ? "navbarMenu active" : "navbarMenu"}>
            {MenuData.map((item,index)=>{
                return (
                    <l1 className="navbarList" key={index}><Link onClick={()=>{handleClick2(item.url);}}  className={item.cName}>
                        <i className={item.icon}></i>{item.title}
                    </Link></l1>
                )
            })}
            
        </ul>
    </nav>
  )
}

export default Navbar