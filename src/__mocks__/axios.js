import { GET_MISSIONS } from '../redux/api';

export default function get(url) {
  switch (url) {
    case `${GET_MISSIONS}`:
      return Promise.resolve({
        data: [
          {
            mission_name: 'Mission1',
            mission_id: '1',
            description: 'Mission1 description',
          },
        ],
      });
    case 'getMission/failing':
      return Promise.reject(new Error('API call error'));
    default:
      return Promise.resolve({ data: [{ }] });
  }
}
