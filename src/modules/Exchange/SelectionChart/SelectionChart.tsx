import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import Paper from '../../../components/Paper';
import Header from '../../../components/Header';
import LineChart from './LineChart';
import requestDataFromApi from '../../../utils/api';
import Constants from '../../../utils/constants';
import CurrencyCards from './CurrenyCards';

function SelectionChart(): JSX.Element {
  const [data, setData] = useState(Object.create({}));
  const [selectedCurrency, setSelectedCurrency] = useState<string | number>('');

  useEffect(() => {
    requestDataFromApi(`latest?access_key=${Constants.apiKey}`)
      .then((r) => {
        setData(r.data);
      });
  }, []);

  const cardClickHandler = React.useCallback((currency: string) => {
    if (selectedCurrency === currency) return;
    setSelectedCurrency(currency);
  }, []);

  return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Header>
                    {`To 1 ${data.base} for ${data.date}`}
                </Header>
            </Grid>
            {data.rates
            && <CurrencyCards latestRates={data.rates} clickHandler={cardClickHandler} />}
            {selectedCurrency
            && (
                <Grid item xs={12} data-testid="chart">
                    <Paper>
                        <LineChart selectedCurrency={selectedCurrency} />
                    </Paper>
                </Grid>
            )}
        </Grid>
  );
}

export default SelectionChart;
