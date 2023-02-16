import React from 'react';
import Card from 'react-bootstrap/Card';

const Footer = () => {
  return (
    <Card className="border-0 text-center mt-2 text-primary">
      &copy; {new Date().getFullYear()} Copyright: IT Sqn 041 CD
    </Card>
  );
};

export default Footer;
