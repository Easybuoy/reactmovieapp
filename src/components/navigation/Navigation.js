import React from 'react';
import {  Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Fa } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import './Navigation.css';
// Container,
class Navigation extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
      };
      this.onClick = this.onClick.bind(this);
  }

onClick(){
  this.setState({
      collapse: !this.state.collapse,
    });
}

render() {
  const bgBlue = {backgroundColor: '#007bff'}
//   const container = {margin: 50}
    return(
      <div className="navbar">
        <Router>
        <Navbar style={bgBlue} dark expand="md" scrolling fixed="top">
          <NavbarBrand href="/">
              <strong>Izzy</strong>
          </NavbarBrand>
          <NavbarToggler onClick={ this.onClick } />
          <Collapse isOpen = { this.state.collapse } navbar>
            <NavbarNav left>
              <NavItem active>
                  <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink to="#">Movies</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink to="#">TV Series</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about">About</NavLink>
              </NavItem>
            </NavbarNav>
            <NavbarNav right>
              <NavItem>
                <NavLink to="#"><Fa icon="facebook" /></NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#"><Fa icon="twitter" /></NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#"><Fa icon="instagram" /></NavLink>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>
        </Router>
        {/* <Container style={container} className="text-center mt-5">
          <h2>This Navbar is fixed</h2>
          <h5>It will always stay visible on the top, even when you scroll do </h5>
          <br/>
          <p>Full page intro with background image will be always displayfull screen mode, regardless of device </p>
        </Container> */}
      </div>
    );
  }
}

export default Navigation;