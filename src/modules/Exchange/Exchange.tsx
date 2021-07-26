import React from 'react';
import { Container } from '@material-ui/core';
import Header from '../../components/Header';
import SelectionChart from './SelectionChart';

function Exchange(): JSX.Element {
  return (
        <Container>
            <Header>Click An Item To Select A Currency</Header>
            <SelectionChart />
        </Container>
  );
}

export default Exchange;
