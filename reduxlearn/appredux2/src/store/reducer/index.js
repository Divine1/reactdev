import * as type from '../type';

const initialState = {
    counter : 0
}

const reducer = (state = initialState,action) =>{
    console.log("action ",action);
    switch(action.type){
        case type.INCREMENT:
            console.log("in case increment")
            return {
                counter : state.counter+1
            }
        case type.DECREMENT:
            console.log("in case decrement")
            return {
                counter : state.counter-1
            }
        default:
            return state
    }
}

export default reducer;