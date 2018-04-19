import React from 'react';
import Helmet from 'react-helmet';
import '../assets/scss/init.scss';

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="layout">
        <Helmet defaultTitle="Blog by noboru-i">
          <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/favicons/touch-icon-ipad.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/touch-icon-iphone-retina.png" />
          <link rel="apple-touch-startup-image" href="/favicons/launch.png" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        </Helmet>
        {children()}
      </div>
    );
  }
}

export default Layout;
