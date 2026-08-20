import axios from 'axios';

const parser = (url) => {
  const newUrl = new URL(url);
  const fileName = `${newUrl.host}${newUrl.pathname}${newUrl.search}`
    .replace(/[^a-zA-Z0-9]/g, '-')
    .replace(/-$/, '');

  const data = axios
    .get(url) // это все еще промисс
    .then((response) => ({ data: response.data, fileName }));

  return data;
};

export default parser;
