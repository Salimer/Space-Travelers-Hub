import baseUrl, { MISSIONS } from '../redux/api';

export default function get(url) {
  switch (url) {
    case `${baseUrl}/${MISSIONS}`:
      return Promise.resolve({ data: {} });
    default:
      return Promise.resolve({ data: [{ quote: 'mock quote' }] });
  }
}
