import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import Paper from '../../../components/Paper';
import { latestRatesMock, historyRateMock } from '../../../tests/mock';
import Header from '../../../components/Header';
import LineChart from './LineChart';
import requestDataFromApi from '../../../utils/api';
import Constants from '../../../utils/constants';
import CurrencyCards from './CurrenyCards';
import { getWeekAgoDatesFromNow } from '../../../utils/data';
import Loader from '../../../components/Loader';

function SelectionChart(): JSX.Element {
  const [data, setData] = useState(latestRatesMock);
  const [chartData, setChartData] = useState(historyRateMock);
  const [selectedCurrency, setSelectedCurrency] = useState<string | number>('');
  const [isLoading, setIsLoading] = useState(true);
  const datesArr = getWeekAgoDatesFromNow();

  useEffect(() => {
    requestDataFromApi(`latest?access_key=${Constants.apiKey}`)
      .then((r) => {
        setData(r.data);
        setIsLoading(false);
      });
  }, []);

  const cardClickHandler = async (currency: string) => {
    if (currency === selectedCurrency) {
      return;
    }
    const chartDataCopy = chartData;
    setIsLoading(true);

    await Promise.all(datesArr.map((date: string) => {
      const url = `${date}?access_key=${Constants.apiKey}&symbols=${currency}`;
      return requestDataFromApi(url)
        .then((r) => {
          const currencyValue = r.data.rates[currency];
          Object.defineProperty(chartDataCopy, date, { value: currencyValue });
        });
    }));

    setIsLoading(false);
    setSelectedCurrency(currency);
    setChartData(chartDataCopy);
  };

  return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Header>
                    {`To 1 ${data.base} for ${data.date}`}
                </Header>
            </Grid>
            <CurrencyCards latestRates={data.rates} clickHandler={cardClickHandler} />
            {selectedCurrency
            && (
                <Grid item xs={12} data-testid="chart">
                    <Paper>
                        <LineChart data={chartData} />
                    </Paper>
                </Grid>
            )}
            <Loader isLoading={isLoading} />
        </Grid>
  );
}

export default SelectionChart;
