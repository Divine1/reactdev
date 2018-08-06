import {combineReducers} from 'redux';
import SportsReducer from './SportsReducer';

export default combineReducers({
    sport : SportsReducer
});