import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery} from 'gatsby';

import '../assets/sass/grayscale.scss';

const Layout = ({ children }) => {

    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
  `)
    return (<>
        <Helmet
                        title={data.site.siteMetadata.title}
                        meta={[
                            { name: 'description', content: 'Grayscale' },
                            { name: 'keywords', content: 'site, web' },
                        ]}
                    >
                        <html lang="en" />

                    </Helmet>

                    <div className={'page-top'}>{children}</div>
                </>


    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
