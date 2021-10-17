import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Navbar = () => {
    return (
        <Nav>
            <ul>
                <li><Link to="/intro">Intro</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/work">Work</Link></li>
            </ul>
        </Nav>
    )
}

const Nav = styled.nav`
    border-radius: var(--radius-alpha);
    border: 1px solid var(--clr-psi);

    ul {
        list-style: none;

        @media screen and ( min-width: 768px ) {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
            width: 100%;

            li:not(:first-of-type) {
                border-left: 1px solid var(--clr-psi);
            }
        }

        @media screen and ( max-width: 768px ) {
            li:not(:last-of-type) {
                border-bottom: 1px solid var(--clr-psi);
            }
        }

        li {
            font-size: 1.2rem;
            height: 5rem;
            text-transform: uppercase;
            transition: var(--transition);

            &:hover {
                background-color: rgba(255,255,255,0.1);
            }

            a {
                align-items: center;
                display: flex;
                border: none;
                height: 100%;
                justify-content: center;
                width: 100%;
            }
        }
    }
`

export default Navbar
