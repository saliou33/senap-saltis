import axios from 'axios';

export const apiUrl = 'http://127.0.0.1:4000/api/predict';

export const predict = async (data) => {
  const result = await axios.post(apiUrl, data);

  return result;
};
