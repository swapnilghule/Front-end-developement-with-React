import React, { Component } from 'react';
import { Navbar, Nav, NavbarToggler , Collapse , NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';



class Header extends Component{

constructor(props)
{
	super(props);
	this.state={
       isNavOpen:false
     
	}

	this.toggleNav= this.toggleNav.bind(this);
 
}


toggleNav()
{
	this.setState(

        {isNavOpen : !this.state.isNavOpen }

		)
}








render()
{
return(
 <div>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
             <Nav className="ml-auto" navbar>
                <NavItem>
                  
                <i className="  fa fa-mortar-board   fa-3x"  aria-hidden="true" ></i>

                </NavItem>
              </Nav>
            <Collapse isOpen={this.state.isNavOpen} navbar>
            
              <Nav className="ml-auto" navbar>
                <NavItem >
                  <NavLink className="nav-link" to="/home">
                  <p className="nav-item"> Home </p>
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item">
                  <NavLink className="nav-link" to="/technologies">
                    <p className="nav-item"> Technology </p>
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item">
                  <NavLink className="nav-link" to="/projects">
                   <p className="nav-item"> Projects </p>
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item">
                  <NavLink className="nav-link" to="/education">
                  <p className="nav-item"> Education </p>
                  </NavLink>
                </NavItem>

              </Nav>
             
            </Collapse>
          </div>
        </Navbar>
  </div>


  );




}


}

export default Header;
