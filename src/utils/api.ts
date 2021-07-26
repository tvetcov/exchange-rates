import axios from 'axios';
import Constants from './constants';

const requestDataFromApi = (urlSubStr: string): Promise<any> => {
  const { baseApiUrl } = Constants;
  const url = baseApiUrl + urlSubStr;
  return axios.get(url);
};

export default requestDataFromApi;
