import React from 'react';
import PropTypes from 'prop-types';

import '../assets/sass/grayscale.scss';

const Layout = ({ children }) => {
    return (
        <div className={'page-top'}>{children}</div>
            )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
