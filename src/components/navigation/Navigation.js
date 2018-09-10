import React from 'react';
import {  Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Fa } from 'mdbreact';
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
                  <NavLink to="movies">Movies</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink to="tvseries">TV Series</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about">About</NavLink>
              </NavItem>
            </NavbarNav>
            <NavbarNav right>
              <NavItem>
                <NavLink target="_blank" to="https://github.com/easybuoy"><Fa icon="github" /></NavLink>
              </NavItem>
              <NavItem>
                <NavLink target="_blank" to="https://codepen.io/easybuoy-the-flexboxer/"><Fa icon="codepen" /></NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/www.twitter.com/easybuoy/"><Fa icon="twitter" /></NavLink>
              </NavItem>
              
            </NavbarNav>
          </Collapse>
        </Navbar>
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