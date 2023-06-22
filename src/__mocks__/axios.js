import baseUrl, { MISSIONS } from '../redux/api';

export default function get(url) {
  switch (url) {
    case `${baseUrl}/${MISSIONS}`:
      return Promise.resolve({
        data: [
          {
            mission_name: 'Mission1',
            mission_id: '1',
            description: 'Mission1 description',
          },
        ],
      });
    default:
      return Promise.resolve({ data: [{ quote: 'mock quote' }] });
  }
}
