import React from 'react';
import { Typography } from '@material-ui/core';

type PropTypes = {
  children: React.ReactNode;
};

function Index({ children }: PropTypes): JSX.Element {
  return (
        <Typography variant="h3" align="center" gutterBottom>{children}</Typography>
  );
}

export default Index;
