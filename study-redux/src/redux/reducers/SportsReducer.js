import {GET_SPORTS} from '../actions/types';

const initialState = {
    sports :{
        test : "divine",
        game : "cricket",
        player:"sachin"
    }
};


const SportsReducer = (state = initialState,action)=>{
    switch(action.type){
        case GET_SPORTS:
            return {
                "wwe" : "dave",
                ...state
            };
        default:
            return state;
    }
}

export default SportsReducer;