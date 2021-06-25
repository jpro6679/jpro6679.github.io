module.exports = {
  siteMetadata: {
    title: `기술 블로그`,
    description: `리액트 + Gatsby 프레임워크로 개발한 블로그`,
    author: `JPRO`,
    siteUrl: 'https://jpro6679.github.io/',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-smartypants',
            options: {
              dashes: 'oldschool',
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 768,
              quality: 100,
              withWebp: true,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {},
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow',
            },
          },
          {
            resolve: 'gatsby-plugin-canonical-urls',
            options: {
              siteUrl: 'https://jpro6679.github.io/',
              stripQueryString: true,
            },
          },
          {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
              policy: [{ userAgent: '*', allow: '/' }],
            },
          },
        ],
      },
    },
    'gatsby-plugin-sitemap',
  ],
};