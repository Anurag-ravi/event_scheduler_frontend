import * as actions from '../actions/actionTypes'

const user1 = {
    islogged : false,
    isClub : false,
    accessToken: null
}

const isLoggedReducer = (state=user1,action) => {
    switch(action.type){
        case actions.Sign_in:
            let data = action.payload;
            return {...state,islogged : true,isClub : data.club,accessToken: data.access};
        case actions.Refresh:
            let token = action.payload;
            return {...state,accessToken: token};
        case actions.Sign_out:
            return user1;
        default:
            return state;
    }
}

export default isLoggedReducer;