import React from 'react';
import AppNavbar from './Sections/Navbar/Navbar';
import Footer from './Sections/Footer/Footer';

function Layout(props) {
    return (
        <div>
            <AppNavbar
                brand="My React Bootstrap App"
                links={[
                    { title: 'Home', url: '/' },
                    { title: 'About', url: '/about' },
                    { title: 'Catalog', url: '/about' },
                ]}
            />
            <div className="container">{props.children}</div>
            <Footer />
        </div>
    );
}

export default Layout;
