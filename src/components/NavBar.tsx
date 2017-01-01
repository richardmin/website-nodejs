import * as React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export class NavBar extends React.Component<any, any> {
    render() {
        return <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">Richard Min</Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <LinkContainer to={{ pathname: '/blog'}}>
                                <NavItem eventKey={1} href="/blog">Posts</NavItem>
                            </LinkContainer>
                            <LinkContainer to={{ pathname: '/projects'}}>
                                <NavItem eventKey={2} href="/projects">Projects</NavItem>
                            </LinkContainer>
                            
                        </Nav>
                        <Nav pullRight>
                            <NavItem href="//www.github.com/richardmin97">Github</NavItem>
                            <NavItem href="mailto:richardmin97@gmail.com">Contact Me</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
    }
}