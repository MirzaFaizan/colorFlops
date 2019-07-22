import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  } from 'reactstrap';
import { textAlign } from '@material-ui/system';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar style={{paddingTop:'1%', paddingLeft:'1%',paddingBottom:'1%',paddingRight:'1%', backgroundColor:'#3f51b5',  fontWeight: 'bold',}} light expand="md">
          <NavbarBrand  style={{ color:'white',paddingLeft:'9%',  fontFamily:'Times New Roman'}} href="/">COLORFLOPS</NavbarBrand> 
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar style={{paddingRight:'5%'}} >
            <Nav  className="ml-auto" navbar>
              <NavItem>
                <NavLink style={{color:'white', paddingRight:"20px"}} href="/">Flipflop - 01</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{color:'white' }}> | </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{color:'white', paddingRight:"20px"}} href="http://localhost:3000/flipflop2/">Flipflop - 02</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{color:'white' }}> | </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{color:'white',paddingRight:"20px"}} href="http://localhost:3000/flipflop3/">Flipflop - 03</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{color:'white' }}> | </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{color:'white',paddingRight:"20px"}} href="http://localhost:3000/sandal/">Sandal - 01</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{color:'white' }}> | </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{color:'white',paddingRight:"20px"}}href="http://localhost:3000/sandal2">Sandal - 02</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}