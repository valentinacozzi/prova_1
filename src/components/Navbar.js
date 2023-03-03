import React, { useRef, useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import './Navbar.css';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
// Router-dom
import { Link } from 'react-router-dom';
//Icons
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as TfiIcons from 'react-icons/tfi';
import { IconContext } from 'react-icons/lib';
// Imgs
import logo from '../assets/imgs/logo_white.png';
// Bootstrap
import Dropdown from 'react-bootstrap/Dropdown';
// Translation
import LocaleContext from '../LocaleContext';
import i18n from '../i18n';
import { useTranslation } from "react-i18next";


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
  z-index: 8;
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
  z-index: 12;
`;

const SidebarWrap = styled.div`
  width: 100%;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 1px;
  }
  
  &::-webkit-scrollbar-track {
    background: #272626;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #272626;
    border-radius: 10px;
    height: 2px;
  }
`;



const Navbar = () => {
  const { t } = useTranslation();
  const { locale } = useContext(LocaleContext);
function changeLocale (l) {
  if (locale !== l) {
    i18n.changeLanguage(l);
  }
}
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
          <div className='language'>
          {/*Language toggle DA SISTEMARE */}
              <Dropdown className='language_option'>
                <Dropdown.Toggle className='lang_toggle' variant="dark" id="dropdown-basic">
                  <TfiIcons.TfiWorld/> &nbsp;{t('language')}
                </Dropdown.Toggle>
                <Dropdown.Menu className='lang_menu'>
                  <Dropdown.Item className='lang' href="#" onClick={() => changeLocale('it')}>{t('it')}</Dropdown.Item>
                  <Dropdown.Item className='lang' href="#" onClick={() => changeLocale('en')}>{t('en')}</Dropdown.Item>
                  <Dropdown.Item className='lang' href="#" onClick={() => changeLocale('fr')}>{t('fr')}</Dropdown.Item>
                  <Dropdown.Item className='lang' href="#" onClick={() => changeLocale('es')}>{t('es')}</Dropdown.Item>
                  <Dropdown.Item className='lang' href="#" onClick={() => changeLocale('ru')}>{t('ru')}</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
        </div>
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