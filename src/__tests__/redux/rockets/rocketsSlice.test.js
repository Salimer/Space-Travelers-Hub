import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { GET_ROCKETS } from '../../../redux/api';
import rocketReducer, { cancelReserveRocket, reserveRocket } from '../../../redux/rockets/rocketsSlice';
import fetchRockets from '../../../redux/rockets/thunks';

const mockStore = configureStore([thunk]);

describe('testing rockets slice', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  test('reserveRocket action updates the store correctly', () => {
    const initialState = {
      rockets: [
        { id: 1, reserved: false },
        { id: 2, reserved: false },
      ],
      isLoading: false,
      error: undefined,
    };

    const expectedState = {
      rockets: [
        { id: 1, reserved: false },
        { id: 2, reserved: true },
      ],
      isLoading: false,
      error: undefined,
    };

    const action = reserveRocket({ id: 2 });
    const newState = rocketReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });

  test('cancelReserveRocket action updates the store correctly', () => {
    const initialState = {
      rockets: [
        { id: 1, reserved: false },
        { id: 2, reserved: true },
      ],
      isLoading: false,
      error: undefined,
    };

    const expectedState = {
      rockets: [
        { id: 1, reserved: false },
        { id: 2, reserved: false },
      ],
      isLoading: false,
      error: undefined,
    };

    const action = cancelReserveRocket({ id: 2 });
    const newState = rocketReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });

  test('fetchRockets thunk when successful', async () => {
    const rocketsData = [
      {
        id: 1,
        rocket_name: 'Falcon 9',
        description: 'A two-stage rocket designed and manufactured by SpaceX.',
        image: 'falcon9.jpg',
        reserved: false,
      },
    ];
    await store.dispatch(fetchRockets({ url: GET_ROCKETS }));

    const actions = store.getActions();

    expect(actions[0].type).toBe(fetchRockets.pending.type);
    expect(actions[1].type).toBe(fetchRockets.fulfilled.type);
    expect(actions[1].payload).toEqual(rocketsData);
  });

  test('fetchRockets thunk when error', async () => {
    await store.dispatch(fetchRockets({ url: 'axios/fail' }));

    const actions = store.getActions();

    expect(actions[0].type).toBe(fetchRockets.pending.type);
    expect(actions[1].type).toBe(fetchRockets.rejected.type);
    expect(actions[1].payload).toEqual('something went wrong! Mock Error');
  });
});
