import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const buttonHandler = () => {
    if (window.innerWidth >= 720) {
      setButton(false);
      setClick(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    buttonHandler();
  }, []);

  window.addEventListener('resize', buttonHandler);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo_section">
          <h2>Mikołaj Orlikowski</h2>
        </div>
        <div className="list_section">
          {button && (
            <i
              className={click ? 'fa fa-times' : 'fa fa-bars'}
              onClick={handleClick}
            />
          )}
          <ul
            className={click ? 'list_section_list_active' : 'list_section_list'}
          >
            <li>
              <Link className='link' to="/">Home</Link>
            </li>
            <li>
              <Link className='link' to="/">Produkty</Link>
            </li>
            <li>
              <Link className='link' to="/">O mnie</Link>
            </li>
            <li>
              <Link className='link' to="/">Kontakt</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
