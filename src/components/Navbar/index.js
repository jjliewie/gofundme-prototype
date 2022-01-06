import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  MainLink
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <MainLink to='/' activeStyle>
            GoFundMe
          </MainLink>
          <NavLink to='/post' activeStyle>
            Explore
          </NavLink>
          <NavLink to='/events' activeStyle>
            Post
          </NavLink>
          <NavLink to='/annual' activeStyle>
            Search
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;