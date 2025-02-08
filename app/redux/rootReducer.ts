import { combineReducers } from 'redux';
import mapReducer from './mapCRUD/reducer';

const rootReducer = combineReducers({
  mapData: mapReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
