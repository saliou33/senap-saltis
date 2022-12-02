export const apiUrl = 'http://127.0.0.1:4000/api/predict';

export const predict = async (data) => {
  return await fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
  });
};
