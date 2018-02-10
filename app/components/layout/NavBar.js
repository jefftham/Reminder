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
    DropdownItem
} from 'reactstrap';

import ActiveLink from '../../hoc/ActiveLink';

export default class NavBar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    // toggle the little icon for mobile screen
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    NavbarBrandCustomStyle = { size: '26px' };

    render() {
        return (
            <div>
                <Navbar color="faded" light expand="md">
                    <NavbarBrand className="fancybtn" href="/">
                        Reminder
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mR-auto" navbar>
                            {/* <form className='form-inline'> */}
                            <NavItem>
                                <ActiveLink href="/" prefetch="true">
                                    Home
                                </ActiveLink>
                            </NavItem>
                            <NavItem>
                                <ActiveLink href="/about" prefetch="true">
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
                <style jsx global>
                    {`
                        .fancybtn {
                            display: inline-block;
                            position: relative;
                            padding: 5px 20px;
                            border: 2px solid #fda;
                            color: #fda;
                            font-family: 'Dancing Script', serif;
                            font-style: italic;
                            font-size: 20px;
                            text-decoration: blue;
                            margin: 0px 20px auto 0px;
                            transition: color 0.4s;
                            font-weight: bold;
                        }

                        .fancybtn:after {
                            content: ' ';
                            border: 2px solid rgba(0, 0, 0, 0);
                            display: inline-block;
                            width: 100%;
                            height: 100%;
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            margin: auto;
                            transition: all 0.4s;
                        }

                        .fancybtn:hover {
                            color: #eee;
                        }

                        .fancybtn:hover:after {
                            border: 2px solid #fda;
                            width: calc(100% - 10px);
                            height: calc(100% + 10px);
                        }
                    `}
                </style>
            </div>
        );
    }
}
