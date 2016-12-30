import * as React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export class NavBar extends React.Component<any, any> {
    render() {
        return <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/ ">Richard Min</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="/about">About</NavItem>
                            <NavItem eventKey={2} href="/blog">Posts</NavItem>
                            <NavItem eventKey={3} href="/projects">Projects</NavItem>
                        </Nav>
                        <Nav pullRight>
                            <NavItem href="//www.github.com/richardmin97">Github</NavItem>
                            <NavItem href="mailto:richardmin97@gmail.com">Contact Me</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
    }
}