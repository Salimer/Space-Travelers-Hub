import missionsReducer, { joinMission, leaveMission } from '../../../redux/missions/missionsSlice';

describe('testing mission slice', () => {
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
});
