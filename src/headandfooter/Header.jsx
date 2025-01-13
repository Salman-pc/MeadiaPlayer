import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar className="bg-info" style={{height:'70px'}}>
      <Container>
        <Navbar.Brand >

          <Link to={"/"} className='text-white fw-bold fs-5 text-decoration-none'>
            <i className="fa-solid fa-music"></i> &nbsp;
            Media Player
          </Link>

        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Header
