import React from 'react';
import NavBar from './NavBar';
import BootstrapStyle from './Layout.css';

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

const Layout = props => (
    <div>
        <style dangerouslySetInnerHTML={{ __html: BootstrapStyle }} />
        <div style={layoutStyle}>
            <NavBar />
            {props.children}
        </div>
    </div>
);

export default Layout;
