import { GET_MISSIONS } from '../redux/api';

const get = (url) => {
  switch (url) {
    case GET_MISSIONS:
      return Promise.resolve({
        data: [
          {
            mission_name: 'Mission1',
            mission_id: '1',
            description: 'Mission1 description',
          },
        ],
      });
    case 'missions/fail':
      return Promise.reject(new Error('Mock Error'));
    default:
      return Promise.resolve(
        {
          data: [
            {},
          ],
        },
      );
  }
};

export default { get };
