import {GET_SPORTS,ADD_SPORTS} from './types';


export const getSports = ()=>{
    return {
        type : GET_SPORTS
    }
}

export const addSport = (sport)=>{
    return {
        type : ADD_SPORTS,
        payload : sport
    }
}
