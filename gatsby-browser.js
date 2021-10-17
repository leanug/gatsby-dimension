import React from 'react'
import Layout from './src/components/Layout'
import BackToTopBtn from './src/components/BackToTopBtn'
import BackgroundImage from './src/components/BackgroundImage'
import GlobalStyles from './src/components/GlobalStyles'
import 'normalize.css'

export const wrapPageElement = ({ element, props }) => {
    return (
        <>
            <GlobalStyles />
            <BackToTopBtn />
            <BackgroundImage />
            <Layout { ...props }>
                { element }
            </Layout>
        </>
    )
  }