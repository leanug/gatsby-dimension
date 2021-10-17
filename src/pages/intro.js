import React from 'react'
import Seo from '../components/SEO'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link, graphql } from 'gatsby'
import Section from '../components/Section'

const IntroPage = ({ data }) => {
    const { 
        placeholderImage,
    } = data;
    const image = getImage( placeholderImage )

    return (
        <>
            <Seo title="Contact" />
            <Section>
                <h2>Work</h2>
                <GatsbyImage 
                    image={ image } 
                    alt="Intro"
                    className="mb-40"
                />
                <p>
                    Aenean ornare velit lacus, ac varius enim ullamcorper eu. 
                    Proin aliquam facilisis ante interdum congue. 
                    Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. 
                    Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. 
                    By the way, check out my <Link to="/work">awesome work</Link>.
                </p>
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
        placeholderImage: file(relativePath: { eq: "tommaso-teloni-Ti5BtG1NSpQ-unsplash.jpg" }) {
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

export default IntroPage
