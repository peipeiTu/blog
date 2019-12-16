import React from "react"
import { Link } from "gatsby"
import { Container } from '@material-ui/core'
import { Navbar, Nav } from 'react-bootstrap'
import VisibilitySensor from 'react-visibility-sensor'

import SEO from './seo'

const Layout = ({ location, title, children }) => {
  const [fixed, setFixed] = React.useState(false);

  const visibilitySensorChange = val => {
    if (val) {
      setFixed(false);
    } else {
      setFixed(true);
    }
  };

  const getHeaderClass = () => {
    return fixed ? 'bg-light navbar-light px-5 shadow-sm' : 'bg-dark navbar-dark px-5';
  }

  return (
    <>
      <Navbar bg="light" id="navbar" expand="lg" sticky="top" className={getHeaderClass()}>
        <Link to="/">
          <Navbar.Brand as="span">PeipeiTu的博客</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="mx-3" to="/">
              <Nav.Link as="span">Home</Nav.Link>
            </Link>
            <Link className="mx-3" to="/notebook">
              <Nav.Link as="span">笔记</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <VisibilitySensor onChange={visibilitySensorChange}>
        <div className="sensor"></div>
      </VisibilitySensor>
      <SEO title={title} />
      <Container maxWidth="lg" className="pt-5 pb-5">
        {children}
      </Container>
    </>
  )
}

export default Layout
