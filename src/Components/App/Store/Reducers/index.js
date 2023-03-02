import { combineReducers } from 'redux';
import {SearchReducer, FilterReducer} from './Reducers';

const RootReducer = combineReducers({
    search: SearchReducer,
    filter: FilterReducer
});

export default RootReducer;