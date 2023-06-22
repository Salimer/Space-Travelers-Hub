import { GET_MISSIONS, GET_ROCKETS } from '../redux/api';

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
    case GET_ROCKETS:
      return Promise.resolve({
        data: [
          {
            id: 1,
            rocket_name: 'Falcon 9',
            description: 'A two-stage rocket designed and manufactured by SpaceX.',
            image: 'falcon9.jpg',
            reserved: false,
          },
        ],
      });
    case 'axios/fail':
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
