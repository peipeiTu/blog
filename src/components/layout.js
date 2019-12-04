import React from "react"
import { Link } from "gatsby"
import { Box, Button, AppBar, Typography, Container } from '@material-ui/core'
import { Navbar, Nav, NavDropdown, } from 'react-bootstrap'

import SEO from './seo'

const Layout = ({ location, title, children }) => {
  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top" className="px-5 shadow-sm">
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
      <SEO title={title} />
      <Container maxWidth="lg" className="pt-5">
        {children}
      </Container>
    </>
  )
}

export default Layout
