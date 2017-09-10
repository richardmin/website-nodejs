import * as React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

export class NavBar extends React.Component<any, any> {
    render() {
        return <Navbar className="navbar-custom">
                    <Navbar.Collapse>
                        <Nav>
                            <IndexLinkContainer to={{ pathname: '/' }}>
                                <NavItem eventKey={1} href="/">Home</NavItem>
                            </IndexLinkContainer>
                            <LinkContainer to={{ pathname: '/blog' }}>
                                <NavItem eventKey={2} href="/blog">Posts</NavItem>
                            </LinkContainer>
                            <LinkContainer to={{ pathname: '/projects' }}>
                                <NavItem eventKey={3} href="/projects">Projects</NavItem>
                            </LinkContainer>
                            
                        </Nav>
                        <Nav pullRight>
                            <NavItem href="//www.github.com/richardmin">Github</NavItem>
                            <NavItem href="mailto:richardmin97@gmail.com">Contact Me</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
    }
}