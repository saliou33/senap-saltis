export const apiUrl = 'https://senap.onrender.com/api/predict';

export const predict = async (data) => {
  return await fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};
