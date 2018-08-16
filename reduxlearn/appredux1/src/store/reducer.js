import {INCREMENT_COUNTER} from './actions/types';

const initialState = {
    counter : 0
}

const reducer = (state = initialState,action) =>{
    switch(action.type){
        case INCREMENT_COUNTER:
            console.log("actions INCREMENT_COUNTER")
            return{
                counter : state.counter+1
            }
        default:
            return state
    }
}

export default reducer;