import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import missionsReducer, { getMissions, joinMission, leaveMission } from '../../../redux/missions/missionsSlice';
import { GET_MISSIONS } from '../../../redux/api';

const mockStore = configureStore([thunk]);

describe('testing mission slice', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  test('joinMission action updates the store correctly', () => {
    const initialState = {
      missionItems: [
        { mission_id: 1, reserved: false },
        { mission_id: 2, reserved: false },
      ],
      loading: false,
      error: false,
      errMsg: '',
    };

    const expectedState = {
      missionItems: [
        { mission_id: 1, reserved: false },
        { mission_id: 2, reserved: true },
      ],
      loading: false,
      error: false,
      errMsg: '',
    };

    const action = joinMission({ id: 2 });
    const newState = missionsReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });

  test('leaveMission action updates the store correctly', () => {
    const initialState = {
      missionItems: [
        { mission_id: 1, reserved: false },
        { mission_id: 2, reserved: true },
      ],
      loading: false,
      error: false,
      errMsg: '',
    };

    const expectedState = {
      missionItems: [
        { mission_id: 1, reserved: false },
        { mission_id: 2, reserved: false },
      ],
      loading: false,
      error: false,
      errMsg: '',
    };

    const action = leaveMission({ id: 2 });
    const newState = missionsReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });

  test('getMissions thunk when successful', async () => {
    const missionsData = [
      {
        mission_name: 'Mission1',
        mission_id: '1',
        description: 'Mission1 description',
      },
    ];
    await store.dispatch(getMissions({ url: GET_MISSIONS }));

    const actions = store.getActions();

    expect(actions[0].type).toBe(getMissions.pending.type);
    expect(actions[1].type).toBe(getMissions.fulfilled.type);
    expect(actions[1].payload).toEqual(missionsData);
  });

  test('getMissions thunk when error', async () => {
    await store.dispatch(getMissions({ url: 'missions/fail' }));

    const actions = store.getActions();

    expect(actions[0].type).toBe(getMissions.pending.type);
    expect(actions[1].type).toBe(getMissions.rejected.type);
    expect(actions[1].payload).toEqual('API call error Mock Error');
  });
});
