import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'
import Section from '../components/Section'
import Seo from '../components/SEO'

const AboutPage = ({ data }) => {
    const { 
        placeholderImage,
    } = data;
    const image = getImage( placeholderImage )

    return (
        <>
            <Seo title="About" />
            <Section>
                <h2>About</h2>
                <GatsbyImage 
                    image={ image } 
                    alt="About"
                    className="mb-40"
                />
                <p>
                    Lorem ipsum dolor sit amet, consectetur et adipiscing elit.
                    Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. 
                    Aliquam erat volutpat. Praesent urna nisi, 
                    fringila lorem et vehicula lacinia quam. 
                    Integer sollicitudin mauris nec lorem luctus ultrices. 
                    Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. 
                    Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur et adipiscing elit.
                    Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac.
                </p>
            </Section>
        </>
    )
}

export const query = graphql`
    {
        placeholderImage: file(relativePath: { eq: "stacey-gabrielle-koenitz-rozells-bduka9UJzrk-unsplash.jpg" }) {
            childImageSharp {
                gatsbyImageData(
                    width: 700
                    height: 300
                    placeholder: BLURRED
                )
            }
        }
    }
`

export default AboutPage
