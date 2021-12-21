import React from "react"
import { Link } from 'gatsby';
import { Navbar, Nav } from 'react-bootstrap'
import VisibilitySensor from 'react-visibility-sensor'

const Layout = ({ location, title, children }) => {
  const [fixed, setFixed] = React.useState(false);

  const visibilitySensorChange = val => setFixed(!val);

  const getHeaderClass = () => {
    return fixed ? 'bg-light navbar-light px-5 shadow-sm' : 'bg-dark navbar-dark px-5';
  }

  return (
    <>
      <Navbar bg="light" id="navbar" expand="lg" sticky="top" className={getHeaderClass()}>
        <Navbar.Brand href="/">PeipeiTu的博客</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/"><Nav.Link as="span">Home</Nav.Link></Link>
            <Link to="/notebook"><Nav.Link as="span">笔记</Nav.Link></Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <VisibilitySensor onChange={visibilitySensorChange}>
        <div className="sensor"></div>
      </VisibilitySensor>
      {children}
    </>
  )
}

export default Layout
