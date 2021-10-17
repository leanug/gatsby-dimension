import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { convertToBgImage } from "gbimage-bridge"
import { getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from 'gatsby'

 const GbiBridged = () => {
    const { placeholderImage } = useStaticQuery(
        graphql`
            query {
                placeholderImage: file(relativePath: { eq: "lucas-ludwig-vMxMkOgbUwU-unsplash.jpg" }) {
                    childImageSharp {
                        gatsbyImageData(
                            width: 2400
                            height: 1600
                            placeholder: BLURRED
                        )
                    }
                }
            }
        `
    )
    const url = typeof window !== 'undefined' ? window.location.href : '';

    let check = ''
    if (url) {
        check =/^https?\:\/\/[^\/]+\/?$/.test(url);
    }
        
    const image = getImage(placeholderImage)
    const bgImage = convertToBgImage(image)
    const backgroundStyle = {
        filter: check ? 'brightness(60%)' : 'blur(10px) brightness(60%)',
        height: "100vh",
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 0,
        transition: 'all 1s',
        transform: 'scale(1.05)'
    }

    return (
            <BackgroundImage
            Tag="section"
            /** Spread bgImage into BackgroundImage: */
            { ...bgImage }
            preserveStackingContext
            style={ backgroundStyle }
        />    
    )
}

export default GbiBridged
