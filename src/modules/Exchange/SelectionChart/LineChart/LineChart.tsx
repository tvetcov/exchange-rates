import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chip } from '@material-ui/core';
import { WifiOffRounded, WifiRounded } from '@material-ui/icons';
import { getMax, getMin } from '../../../../utils/data';
import getConfig from './config';

type PropTypes = {
  data: {
    [key: string]: number,
  }
};

function LineChart({ data }: PropTypes) {
  const dataToShow = getConfig(data);

  return (
        <>
            <Chip
              color="primary"
              icon={<WifiRounded />}
              label={`Maximum: ${getMax(Object.values(data))}`}
            />
            <Chip
              color="secondary"
              icon={<WifiOffRounded />}
              label={`Minimum: ${getMin(Object.values(data))}`}
            />
            <Line data={dataToShow} />
        </>
  );
}

export default LineChart;
