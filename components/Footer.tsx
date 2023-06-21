import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="text-center">&copy; {currentYear} Paras Dev Tyagi</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
