import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import SelectionChart from './SelectionChart';

test('renders chart component', async () => {
    render(<SelectionChart/>);
    const link = screen.getByText(/USD/i);
    link.click();
    const chart = screen.getByTestId(/chart/i);
    await waitFor(() => expect(chart).toBeVisible());
});
