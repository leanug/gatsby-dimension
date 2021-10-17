import React from 'react'
import Close from './icons/Close'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Section = ({ children }) => {
    return (
        <Wrapper>
            <div className="section-header">
                <Link to="/"><Close /></Link>
            </div>
            <div className="content">
                { children }
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    background-color: var(--clr-delta);
    border-radius: var(--radius-alpha);
    max-width: 70rem;
    margin: 0 0.5rem;

    animation: fadeIn 0.5s;
    -webkit-animation: fadeIn 0.5s;
    -moz-animation: fadeIn 0.5s;
    -o-animation: fadeIn 0.5s;
    -ms-animation: fadeIn 0.5s;

    @keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
    }

    .section-header {
        align-items: center;
        display: flex;
        justify-content: flex-end;
        padding: 2rem;

        a {
            border-radius: 50%;
            border-bottom: none;
            display: flex;
            align-items: center;
            height: 39px;
            width: 39px;
            justify-content: center;
            transition: var(--transition);

            &:hover {
                background-color: rgba(255,255,255,0.1);
            }
        }
    }

    .content {
        padding: 0 4rem 4rem 4rem;

        @media screen and ( max-width: 768px ) {
            padding: 0 2rem 2rem 2rem;
        }
    }
`

export default Section
