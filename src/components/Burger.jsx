import React, {useState} from 'react';
import NavBar from './NavBar';
import styled from 'styled-components'


export default function Burger() {
  const [open, setOpen] = useState(false)

  const Burger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 55px;
  right: 40px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  cursor: pointer;
  z-index: 20;

  div {
    width: 3rem;
    height: .25rem;
    background-color: ${({open}) => open ? '#fff' : '#777'};
    border-radius: 10px;
    transform-origin: 8px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    
    &:nth-child(2) {
      transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({open}) => open ? 0 : 1}
    }
    
    &:nth-child(3) {
      transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'}
    }
  }
`;

const menuToggle = () => {
  const nav = document.getElementById('menu-overlay');
  nav.classList.toggle('active')
  setOpen(!open)
}

  return (
    <>
    <Burger open={open} onClick={menuToggle}>
      <div />
      <div />
      <div />
    </Burger>
    <NavBar />
    </>
  )
}
