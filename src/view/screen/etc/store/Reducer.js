export const authStateReducer = (state = {app_started:false, authenticated:false},{type,payload})=>{
    switch(type){
        case 'LOGIN_SUCCESS':
            return {...state,authenticated:true}
        case 'LOGOUT':
            return {...state,authenticated:false}
        case 'APP_LOADED':
            return {...state,app_started:true}
        default:
            return state
    }
}

export const userStateReducer = (state = {nickName:'',profiles:[]},{type,payload}) => {

      switch(type){
        case 'ADD_NICKNAME':
            return {...state,nickName:payload}
        case 'ADD_PROFILE':
            return {...state,profiles:[...state.profiles,payload]}
        case 'SET_PROFILE':
            return {...state,profiles:payload}
        case 'UPDATE_PROFILE':
            return {...state,profiles:[payload]}
        case 'DELETE_PROFILE':
            return {...state,profiles:[payload]}
        case 'RESET':
            return {nickName:'',profiles:[]}
        default:
            return state
    }
}