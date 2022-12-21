import React from 'react';
import Footer from '../footer/footer';
import Navigation from '../navigation/navigation';

const Layout = (props) => {
  return (
    <>
      <Navigation/>
      {props.children}
      <Footer/>
    </>
  );
};

export default Layout;
