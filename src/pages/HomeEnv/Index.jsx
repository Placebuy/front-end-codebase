import React from 'react';
import Nav from '../../component/nav';
import Hero from './Hero';
// import Sidebarnav from '../../component/sidebarnav';
import NewLising from './NewLising';
import UsedP from './UsedP';
import UsedP2 from './UsedP2';
import AfterUse from './AfterUse';

import AppFooter from '../../component/AppFooter';
import DownToTop from '../../component/DownToTop';



function Home() {
  return (
    <>
      
      <Nav />
      {/* <Sidebarnav /> */}

      <Hero />
      <NewLising />
      <UsedP />
      <UsedP2 />
      <AfterUse />
      
      <DownToTop />
      <AppFooter />
    </>
  );
}

export default Home;
