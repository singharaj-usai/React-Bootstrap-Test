import React from 'react';
import AppNavbar from './Sections/Navbar';

function Layout(props) {
    return (
        <div>
            <AppNavbar
                brand="My React Bootstrap App"
                links={[
                    { title: 'Home', url: '/' },
                    { title: 'About', url: '/about' },
                ]}
            />
            <div className="container">{props.children}</div>
        </div>
    );
}

export default Layout;
