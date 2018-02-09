// import Link from 'next/link';
import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import ActiveLink from '../../hoc/ActiveLink';
import './NavBar.css';

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  // toggle the little icon for mobile screen
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  NavbarBrandCustomStyle = { size: '26px' };

  render() {
    return (
      <div>
        <Navbar color='faded' light expand='md'>
          <NavbarBrand className='fancyBtn' href='/'>
            Reminder
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='mR-auto' navbar>
              {/* <form className='form-inline'> */}
              <NavItem>
                <ActiveLink href='/' prefetch='true'>
                  Home
                </ActiveLink>
              </NavItem>
              <NavItem>
                <ActiveLink href='/about' prefetch='true'>
                  About
                </ActiveLink>
              </NavItem>
              {/* </form> */}

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
