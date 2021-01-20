module.exports = {
  siteMetadata: {
    title: "100daysOfCodeGatsby2021_project",
    siteUrl: `https://audioC0RE.com`,
    description: `AudioC0RE - your headphones are here`,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "XnVZzVmqwojX4EAWWCnhQzt7PatvU0e42k88dEfufQw",
        spaceId: "eeogj945rpwd",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
