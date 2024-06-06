import { Button } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

function DownToTop() {
  const [fromBottomToTop, SetFromBottomToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        SetFromBottomToTop(true);
      } else {
        SetFromBottomToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {fromBottomToTop && (
        <Button
          pos="fixed"
          border={5}
          bottom="50px"
          right={50}
          width="50px"
          height="50px"
          fontSize="30px"
          bgColor="orange"
          color="white"
          borderRadius="50%"
          onClick={scrollToTop}
        >
          <i className="bi bi-arrow-up-short" />
        </Button>
      )}
    </>
  );
}

export default DownToTop;
