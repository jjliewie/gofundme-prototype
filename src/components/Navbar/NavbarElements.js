import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
background: #cfe2f3;
// height: 85px;
height: 80px;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
/* Third Nav */
/* justify-content: flex-start; */
`;

export const MainLink = styled(Link)`
color: #3d85c6;
font-family: 'Epilogue', sans-serif;
align-items: center;
text-decoration: none;
padding: 1rem 2rem;
padding-bottom: 1.8rem;
cursor: pointer;
display: inline-block;
position: relative;
height: 0.1em;
`;

export const NavLink = styled(Link)`
color: #3d85c6;
font-family: 'Epilogue', sans-serif;
align-items: center;
text-decoration: none;
padding: 1rem 1rem;
padding-bottom: 1.8rem;
cursor: pointer;
display: inline-block;
position: relative;
height: 0.1em;
&.active {
	color: #073763;
	height: 0.1em;
}
&::after {
    content: '';
    display: block;
    position: relative;
    width: 100%;
    height: 0.1em;
    background-color: #3d85c6;
	bottom: -8px;
    transition: opacity 300ms, transform 300ms;
    opacity: 0;
    transform: scale(0);
    transform-origin: center;
}
&:hover::after,
&:focus::after {
  height: 0.1em;
  background-color: #073763;
  opacity: 1;
  transform: scale(1);
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #f3f6f4;
font-family: 'Epilogue', sans-serif;
padding: 10px 22px;
color: #3d85c6;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #eeeeee;
	color: #073763;;
}
`;