import React from 'react';
import {  Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink } from 'mdbreact';
import './Navigation.css';
import navigationimg from './navigationimg.JPG';

// Container,
export class Navigation extends React.Component {
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
            <strong>
              <img src={navigationimg} alt="navigationimg" style={{width:'50px', height: '50px', borderRadius: '50%'}} />
            </strong>
          </NavbarBrand>
          <NavbarToggler onClick={this.onClick} />
          <Collapse isOpen={this.state.collapse} navbar>
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
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;