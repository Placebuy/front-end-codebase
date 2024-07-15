import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import ClipLoader from 'react-spinners/ClipLoader';

function Loader() {
  const [color, setColor] = useState("#F85F41");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      display="flex"
      textAlign="center"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      {loading && (
        <ClipLoader
          color={color}
          loading={loading}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
    </Box>
  );
}

export default Loader;
