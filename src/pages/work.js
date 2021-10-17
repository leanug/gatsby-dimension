import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link, graphql } from 'gatsby'
import Section from '../components/Section'
import Seo from '../components/SEO'

const WorkPage = ({ data }) => {
    const { placeholderImage } = data;
    const image = getImage( placeholderImage )

    return (
        <>
            <Seo title="Work" />
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
                    By the way, <Link to="/about">we are awesome</Link>.
                </p>
                <p>
                    Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. 
                    Mauris aliquet magna magna sed nunc rhoncus pharetra. 
                    Pellentesque condimentum sem. In efficitur ligula tate urna. 
                    Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. 
                    Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. 
                    Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.
                </p>
            </Section>
        </>
    )
}

export const query = graphql`
    {
        placeholderImage: file(relativePath: { eq: "markus-winkler-Zd_vzpPLqOA-unsplash.jpg" }) {
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

export default WorkPage
