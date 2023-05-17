import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Header.css'
import { FaBars } from "react-icons/fa";
import DropdownMenu from './DropdownMenu';


function Header() {
    const [isToggle, setToggle] = useState(false);

    const handleToggle = () => {
      setToggle(!isToggle);
    }

    return (
        <div>
          <span id = "title">
          <Link to="/">
            <img id = "logo" src="../logo.png" alt="logo" />
          </Link>
          </span>
          <div onClick={handleToggle}>
            <FaBars size={30}></FaBars>
          </div>
           { isToggle && (
            <DropdownMenu handleToggle={handleToggle}/>
           )}
        </div>
    )
}

export default Header;