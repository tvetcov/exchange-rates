const getConfig = (data: {
  [key: string]: number,
}) => ({
  labels: Object.keys(data),
  datasets: [
    {
      label: 'Exchange rates for last week',
      data: Object.values(data),
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
});

export default getConfig;
