import React from "react"
import { Link } from "gatsby"
<<<<<<< HEAD
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
=======

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
>>>>>>> parent of 140045d... Updates
