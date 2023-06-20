import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rocketsSlice';
import missionsReducer from './missions/missionsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
});

const selectMissions = (store) => store.missions;
const selectRockets = (store) => store.rockets;

export { selectMissions, selectRockets };

export default store;
