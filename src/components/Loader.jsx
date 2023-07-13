//This component handle all the delay that happen while fetching the data
//from rapid APIs by provind a circular motion to a page till it wont get the data

import React from 'react';
import { Box, CircularProgress, Stack } from '@mui/material';

const Loader = () =>  (
  <Box minHeight="95vh">
    <Stack direction='row' justifyContent='center' alignItems='center' height='80vh' >
      <CircularProgress />
    </Stack>
  </Box>
);

export default Loader;
