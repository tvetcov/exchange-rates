import React from 'react';
import { CircularProgress } from '@material-ui/core';
import useStyles from './styles';

type PropTypes = {
  isLoading: boolean;
};

function Loader({ isLoading }: PropTypes): JSX.Element {
  const classes = useStyles();

  return (
        < >
            {isLoading
            && <CircularProgress className={classes.progress} />}
        </>
  );
}

export default Loader;
