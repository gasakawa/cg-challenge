import React from 'react';
import Routes from '../../routes/Routes';
import Footer from '../Footer';
import Header from '../Header';

const Layout = () => {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
};

export default Layout;
