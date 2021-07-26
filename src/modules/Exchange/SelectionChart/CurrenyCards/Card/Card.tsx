import React from 'react';
import Paper from '../../../../../components/Paper';

type PropTypes = {
  name: string;
  value: number;
  onClick: (currency: string) => void;
};

function Card({ name, value, onClick }: PropTypes): JSX.Element {
  return (
        <Paper onClick={() => onClick(name)}>
            <b>{name}</b>
            {` ${value.toFixed(3)}`}
        </Paper>
  );
}

export default React.memo(Card);
