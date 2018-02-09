import React, { Component } from 'react';
import Head from 'next/head';
import NavBar from './NavBar';
import './Layout.css';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
};

const dev = !(
  process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production'
);

class Layout extends Component {
  render() {
    // console.log('this.props', this.props);
    let attachStyleSheet = null;

    if (!dev) {
      attachStyleSheet = (
        <link
          rel='stylesheet'
          href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
          // href={`${this.props.__NEXT_DATA__.assetPrefix}/static/style.css`}
          // href='/dist/static/style.css'
        />
      );
    }

    return (
      <div>
        <div>
          <Head>{attachStyleSheet}</Head>
        </div>
        <div style={layoutStyle}>
          <NavBar />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;
