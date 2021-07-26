import React from 'react';
import { Paper as MuiPaper } from '@material-ui/core';
import useStyles from './styles';

function Paper({ ...rest }): JSX.Element {
  const classes = useStyles();

  return (
        <MuiPaper className={classes.paper} {...rest} />
  );
}

export default Paper;
