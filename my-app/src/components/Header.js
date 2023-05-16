import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Header() {
    // const state = useSelctor(state => state.item)
    const [isOpen, setLink] = useState(false);

    const toggleLink = () => {
      setLink(isOpen => !isOpen);
    }

    return (
        <header>
          <span id = "title">
          <Link to="/">
            <img id = "logo" src="../logo.png" alt="logo" />
          </Link>
          </span>
          <span id = "HamButton" onClick={()=> toggleLink()}> //아이콘 생성
            <ul className={isOpen ? "show-link" : "hide-link"}>
              <li><Link to="/">Main Pages</Link></li>
              <li><Link to="/product/list"> Product List Page</Link></li>
              <li><Link to="/bookmark">Bookmark Page</Link></li>
            </ul>

          </span>
        </header>
    )
}