import {GET_SPORTS,ADD_SPORTS} from '../actions/types';

const initialState = {
    sports : [
        {
            id : "1",
            country:"india",
            player : "kohli"
        }
    ]
};


const SportsReducer = (state = initialState,action)=>{
    switch(action.type){
        case GET_SPORTS:
            return {
                ...state
            };
        case ADD_SPORTS:
            state.sports.push(action.payload)
            return{
                ...state
            }
        default:
            return state;
    }
}

export default SportsReducer;