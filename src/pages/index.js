import React from 'react'
import Seo from '../components/SEO'
import styled from 'styled-components'
import Diamond from '../components/icons/Diamond'
import Navbar from '../components/Navbar'

const IndexPage = () => {
    return (
        <>
            <Seo />
            <Wrapper>
                <div className="icon-wrapper">
                    <Diamond />
                </div>
                <Line />
                <div style={{ padding: '2rem 2rem 5.2rem 2rem' }}>
                    <h1 style={{ marginBottom: 0 }}>Dimension</h1>
                    <p style={{ marginTop: '2rem' }}>
                        A fully responsive site template designed by HTML5 UP and released
                        for free under the Creative Commons license.
                    </p>
                </div>
                <Line />
                <Navbar />
            </Wrapper>
            <footer style={{ position: 'absolute', bottom: '3rem' }}>
                <span>
                    Designed by: <a href="https://html5up.net">HTML5 UP</a>
                </span>
                <span>
                    IMAGES: <a href="https://www.unsplash.com">Unsplash</a> 
                </span>
                <span>
                    Developed by: <a href="https://www.svgrepo.com">SVG Repo</a>
                </span>
            </footer>
        </>
    )
}

const Wrapper = styled.section`
    border-radius: var(--radius-alpha);
    font-family: var(--secondary-font);
    font-weight: 300;
    letter-spacing: 0.2rem;
    padding: 2rem 4rem 4rem 4rem;
    text-align: center;
    text-transform: uppercase;
    max-width: 70rem;

    p {
        font-size: 1.2rem;
        line-height: 2.4;
    }

    .icon-wrapper {
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
        border: 1px solid var(--clr-psi);
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
    }

    div {
        border-bottom: 1px solid var(--clr-psi);
        border-top: 1px solid var(--clr-psi);
    }

    footer {
        font-size: 1.2rem;
        text-align: center;
        text-transform: uppercase;

        span {
        margin: 0 0.8rem;
        }
    }
`

const Line = styled.div`
    width: 1px;
    height: 6rem;
    background-color: var(--clr-psi);
    margin: 0 auto;
`

export default IndexPage
