import { createGlobalStyle } from 'styled-components'

const Globals = createGlobalStyle`
    :root {
        --primary-font: "Source Sans Pro", Helvetica, Arial, sans-serif;
        --secondary-font: "Poppins", Helvetica, Arial, sans-serif;
        --radius-alpha: 0.5rem;
        --radius-beta: 1rem;
        --radius-gamma: 2rem;
        --line-height-alpha: 1.8;
        --line-height-beta: 2;
        --max-width: 132rem;
        --clr-alpha: #0075E9;
        --clr-beta: #F2F9FF;
        --clr-gamma: rgb(229, 229, 229);
        --clr-delta: rgba(27, 31, 34, 0.85);
        --clr-omega: #131313;
        --clr-psi: #FFFFFF;
        --shadow: drop-shadow(0px 0px 10px rgba(0,0,0,.1));
        --transition: all 0.2s linear;
    }

    *,
    ::after,
    ::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5% !important;
    }

    body {
        color: var(--clr-psi);
        font-family: var(--primary-font);
        font-size: 1.6rem;
        line-height: var(--line-height-alpha);
        transition: color 0.25s linear;
    }

    .wrapper {
        max-width: var(--max-width);
        margin: auto;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        width: 100%;
    }

    .wrapper-fluid {
        padding-left: calc(2rem + 4vw);
        padding-right: calc(2rem + 4vw);

        @media screen and ( max-width: 576px ) {
            padding: 0 2rem;
        }
    }

    .header-1, h1,
    .header-2, h2,
    .header-3, h3,
    .header-4, h4,
    .header-5, h5,
    .header-6, h6 {
        display: inline-block;
        font-family: var(--secondary-font);
        font-weight: 400;
        line-height: var(--line-height-alpha);
        letter-spacing: 4px;
        margin-bottom: 4rem;
        text-transform: uppercase;
    }

    h2 {
        border-bottom: 1px solid var(--clr-psi);
    }

    a {
        border-bottom: 1px dotted;
        color: var(--clr-psi);
        cursor: pointer;
        text-decoration: none;
        transition: border-bottom 0.2s linear;
    }

    a:hover {
        border-bottom: 0;
        text-decoration: none;
    }

    a.button:hover {
        text-decoration: none;
    }

    p:not(:last-of-type) {
        margin-bottom: 3rem;
    }
 
    .button {
        border: none;
        border-radius: var(--radius-alpha);
        color: var(--clr-omega);
        cursor: pointer;
        padding: 1.4rem 2.2rem;
        text-transform: uppercase;
    }

    .section-header {
        align-items: center;
        display: flex;
        justify-content: end;
    }

    picture {
        img {
            border-radius: var(--radius-alpha);
        }
    }

    .mb-40 {
        margin-bottom: 4rem;
    }
`

export default Globals