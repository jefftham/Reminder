import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.css';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
};

const Layout = props => (
  <div style={layoutStyle}>
    <NavBar />
    {props.children}
  </div>
);

export default Layout;
