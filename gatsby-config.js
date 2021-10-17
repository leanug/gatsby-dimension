module.exports = {
  siteMetadata: {
    title: `Gatsby Dimension`,
    titleTemplate: `%s · Awesome Gatsby Templates`,
    description: `A fully responsive site template designed by HTML5 UP and developed by GatsbySpace.`,
    image: `static/screenshot.png`,
    url: `https://gatsby-dimension.netlify.app`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Source Sans Pro\:300`,
          `poppins\:300,500`,
        ],
        display: 'swap'
      }
    },
  ],
};
