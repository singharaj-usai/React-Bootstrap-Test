import React from 'react';

function Footer() {
    return (
        <footer style={{ backgroundColor: '#f8f9fa', paddingTop: '2rem', paddingBottom: '2rem' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-4 mb-md-0">
                        <h4>About Us</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla, enim non
                            placerat tincidunt, ante odio tincidunt nisi, vitae ultricies tortor tellus ac
                            ante.
                        </p>
                    </div>
                    <div className="col-md-4 mb-4 mb-md-0">
                        <h4>Contact Us</h4>
                        <ul className="list-unstyled">
                            <li>123 Main Street</li>
                            <li>Springfield, USA</li>
                            <li>(555) 555-5555</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4>Follow Us</h4>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#!">Facebook</a>
                            </li>
                            <li>
                                <a href="#!">Twitter</a>
                            </li>
                            <li>
                                <a href="#!">Instagram</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
