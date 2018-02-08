import NavBar from './NavBar';
import './Layout.css';
import Head from 'next/head';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
};

const Layout = props => (
  <div>
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        />
      </Head>
    </div>
    <div style={layoutStyle}>
      <NavBar />
      {props.children}
    </div>
  </div>
);

export default Layout;
