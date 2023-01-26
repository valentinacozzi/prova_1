import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import logo from '../assets/imgs/logo_white.png';
import './Navbar.css';
import { useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const Nav = styled.div`
  background: #272626;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #272626;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  let menuRef = useRef();

  useEffect(()=> {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setSidebar(false);
      }
    }
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler)
    }
  });

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <div className='logo_space'>
            <Link to='/'>
          <img className='logo' src={logo}></img>
          </Link>
          </div>
          {/*Language toggle DA SISTEMARE */}
              <Dropdown className='language_option'>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  Language
                </Dropdown.Toggle>
                <Dropdown.Menu className='lang_menu'>
                  <Dropdown.Item className='lang' href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item className='lang' href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item className='lang' href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
        </Dropdown>
        </Nav>
        <SidebarNav sidebar={sidebar} ref={menuRef}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;