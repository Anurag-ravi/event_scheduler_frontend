import * as actions from '../actions/actionTypes'

const profile1 = {
    "user_id": null,
    "profile_id": null,
    "name": "",
    "roll": "",
    "email": "",
    "batch": "",
    "programme": "",
    "department": "",
    "club_name": "",
    "club_status": false
  }

const profileReducer = (state=profile1,action) => {
    switch(action.type){
        case actions.Profile:
            let data = action.payload;
            return {
                "user_id": data.user_id,
                "profile_id": data.profile_id,
                "name": data.name,
                "roll": data.roll,
                "batch": data.batch,
                "email": data.email,
                "programme": data.programme,
                "department": data.department,
                "club_name": data.club_name,
                "club_status": data.club_status
              };
        case actions.Sign_out:
            return profile1;
        default:
            return state;
    }
}

export default profileReducer;