// import React, { useState , useEffect} from 'react'
// import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
// import logo from '../assets/logo.png'
// // import { Navbar } from 'react-bootstrap';
// import navIcon1 from '../assets/nav-icon1.svg'
// import navIcon2 from '../assets/nav-icon2.svg'
// import navIcon3 from '../assets/nav-icon3.svg'

// export const NavBar = () => {
//     const {activeLink, setActiveLink} = useState('home');
//     const {scrolled, setscrolled} = useState(false);

//     useEffect(()=> {
//         const onScroll = () => {
//             if (window.scrollY > 50) {
//                 setscrolled(true);
//             } else{
//                 setscrolled(false);
//             }
//         }

//         window.addEventListener("scroll", onScroll);
//         return () => window.removeEventListener("scroll", onScroll);
//     }, {});

//     const onUpdateActiveLnk = (value) => {
//         setActiveLink(value);
//     }

//   return (
//     <div>
//       <NavBar expand="ig" className={scrolled? "scrolled": ""}>
//         <Container>
//             <Navbar.Brand href="#home">
//                 <img src={logo} alt='Logo'/>
//             </Navbar.Brand>
//             <NavBar.Toggle aria-controls="basic-navbar-nav">
//                 <span className='navbar-toggler-icon'/>
//             </NavBar.Toggle> {/* own logo */}
//             <NavBar.Collapse id="basic-navbar-nav">
//                 <Nav className="ms-auto">
//                     <Nav.Link href="#home" className={activeLink === 'home'? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLnk('home')}>Home</Nav.Link>
//                     <Nav.Link href="#skills" className={activeLink === 'skills'? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLnk('skills')}>Skills</Nav.Link>
//                     <Nav.Link href="#projects" className={activeLink === 'project'? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLnk('projects')}>Projects</Nav.Link>
//                     <Nav.Link href="#tasks" className={activeLink === 'tasks'? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLnk('tasks')}>Tasks</Nav.Link>
//                     {/* <NavDropdown>
//                         <NavDropdown.Item></NavDropdown.Item>
//                         <NavDropdown.Item></NavDropdown.Item>
//                         <NavDropdown.Item></NavDropdown.Item>
//                         <NavDropdown.Divider/>
//                         <NavDropdown.Item> Separated Link</NavDropdown.Item>
//                     </NavDropdown> */}
//                 </Nav>
//                 <span className='navbar-text ms-auto'>
//                     <div className='social-icon'>
//                         <a href='#'><img src={navIcon1} alt=''/></a>
//                         <a href='#'><img src={navIcon2} alt=''/></a>
//                         <a href='#'><img src={navIcon3} alt=''/></a>
//                     </div>
//                     <button className='vvd' onClick={()=> console.log('connect')}><span>Let's Connect!</span></button>
//                 </span>
//             </NavBar.Collapse>
//         </Container>
//       </NavBar>
//     </div>
//   )
// }


import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/logo.png';
import navIcon1 from '../assets/nav-icon1.svg';
import navIcon2 from '../assets/nav-icon2.svg';
import navIcon3 from '../assets/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text ms-auto">
              {/* <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
              </div> */}
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}

