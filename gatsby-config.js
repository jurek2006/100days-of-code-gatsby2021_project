module.exports = {
  siteMetadata: {
    title: "AudioC0RE",
    siteUrl: `https://audioC0RE.com`,
    description: `AudioC0RE - your headphones are here`,
    author: `Jurek Skowron`
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
    "gatsby-plugin-styled-components",
  ],
};
