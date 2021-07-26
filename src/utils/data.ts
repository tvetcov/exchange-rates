import date from 'date-and-time';

export const getWeekAgoDatesFromNow = () => {
  const dateArray = [];
  const startDate = new Date();
  const stopDate = date.addDays(startDate, -7);
  let currentDate = startDate;
  while (+currentDate >= +stopDate) {
    dateArray.push(date.format(currentDate, 'YYYY-MM-DD'));
    currentDate = date.addDays(currentDate, -1);
  }
  return dateArray;
};

export const getMin = (arr: number[]) => {
  let len = arr.length;
  let min = Infinity;
  while (len >= 0) {
    if (Number(arr[len]) < min) {
      min = Number(arr[len]);
    }
    len -= 1;
  }
  return min.toFixed(3);
};

export const getMax = (arr: number[]) => {
  let len = arr.length;
  let max = -Infinity;
  while (len >= 0) {
    if (Number(arr[len]) > max) {
      max = Number(arr[len]);
    }
    len -= 1;
  }
  return max.toFixed(3);
};
