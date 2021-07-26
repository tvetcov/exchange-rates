import React from 'react';
import { Grid } from '@material-ui/core';
import Card from './Card';

type PropTypes = {
  latestRates: {
    [key: string]: number | string,
  };
  clickHandler: (currency: string) => Promise<void>;
};

type TotalResponse = {
  [key: string]: number | string,
};

function CurrencyCards({ latestRates, clickHandler }: PropTypes): JSX.Element {
  const cardsToRender = Object.keys(latestRates).map((key: string) => {
    const value = (latestRates as unknown as TotalResponse)[key];

    return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={key + value}>
                <Card name={key} value={+value} onClick={clickHandler} />
            </Grid>
    );
  });

  return (
        <>
            {cardsToRender}
        </>
  );
}

export default React.memo(CurrencyCards);
