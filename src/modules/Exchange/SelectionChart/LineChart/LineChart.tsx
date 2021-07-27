import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chip } from '@material-ui/core';
import { WifiOffRounded, WifiRounded } from '@material-ui/icons';
import { getMax, getMin, getWeekAgoDatesFromNow } from '../../../../utils/data';
import getConfig from './config';
import Constants from '../../../../utils/constants';
import requestDataFromApi from '../../../../utils/api';

type PropTypes = {
  selectedCurrency: string | number;
};

function LineChart({ selectedCurrency }: PropTypes) {
  const [chartData, setChartData] = useState(Object.create({}));
  const dataToShow = getConfig(chartData);
  const datesArr = getWeekAgoDatesFromNow();

  useEffect(() => {
    const chartDataCopy = { ...chartData };

    Promise.all(datesArr.map((date: string) => {
      const url = `${date}?access_key=${Constants.apiKey}&symbols=${selectedCurrency}`;
      return requestDataFromApi(url)
        .then((r) => {
          chartDataCopy[date] = r.data.rates[selectedCurrency];
        });
    })).then(() => setChartData(chartDataCopy));
  }, [selectedCurrency]);

  return (
        <>
            <Chip
              color="primary"
              icon={<WifiRounded />}
              label={`Maximum: ${getMax(Object.values(chartData))}`}
            />
            <Chip
              color="secondary"
              icon={<WifiOffRounded />}
              label={`Minimum: ${getMin(Object.values(chartData))}`}
            />
            <Line data={dataToShow} />
        </>
  );
}

export default React.memo(LineChart);
