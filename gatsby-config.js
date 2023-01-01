const config = require('./config');

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
    siteUrl: config.siteUrl,
    metaDescription: config.manifestName
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    "gatsby-transformer-sharp",
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
        }
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {},
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],

      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-NHMT2HT",

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",

        // Defaults to false
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://ricardobaltazar.com/',
        sitemap: 'https://ricardobaltazar.com/sitemap-index.xml',
        policy: [{userAgent: '*', allow: '/'}],
        output: "/robots.txt"
      }
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
query MyQuery {
  allSitePage {
    nodes {
      path
    }
  }
  allMdx {
    nodes {
      frontmatter {
        modified_gmt
        path
      }
    }
  }
}
      `,
        resolveSiteUrl: () => config.siteUrl,
        resolvePages: ({
                         allSitePage: { nodes: allPages },
                         allMdx: { nodes: allMdxNodes },
                       }) => {

          let simpleNodes = allMdxNodes.reduce((acc, node) => {
            acc.push( {"path": node["frontmatter"]["path"], "modified_gmt": node["frontmatter"]["modified_gmt"]})
            return acc
          }, [])

          let pages = allPages.reduce((acc, node) => {
            acc.push({"path": node["path"]})
            return acc
          }, [])

          let x = pages.concat(simpleNodes)

          function contains(arr, key, val) {
            for (var i = 0; i < arr.length; i++) {
              if (arr[i][key] === val) return true;
            }
            return false;
          }
          let x2 = x.reduce((acc, node) => {
            if (!contains(acc, "path", node["path"])){
              if (/\/blog\/.+\//.test(node["path"])){
                if (node["modified_gmt"]){
                  acc.push({"path": node["path"], "modified_gmt":node["modified_gmt"]})
                }
              }else{
                acc.push({"path": node["path"]})
              }
            }
            return acc
          }, [])

          return x2

        },
        serialize: ({ path, modified_gmt }) => {
          return {
            url: path,
            lastmod: modified_gmt,
          }
        },
      },
    },
  ],
};
