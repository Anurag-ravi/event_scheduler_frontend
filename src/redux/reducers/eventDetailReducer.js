import * as actions from '../actions/actionTypes'

const event = {
    announcements: "a,b,c,d",
    author: 0,
    club_name: "Club Name",
    date: "2022-01-12",
    deadline: "2022-01-13",
    description: "Description",
    id: 0,
    remainder: "Daily",
    remainder_date: "2022-01-28",
    remainder_time: "04:44:00",
    resources_upload: null,
    rsvp_users: [],
    time_from: "00:00:00",
    time_to: "00:00:00",
    title: "Event Title",
}

const eventDetailReducer = (state=event,action) => {
    switch(action.type){
        case actions.EventDetailAdd:
            let data = action.payload;
            return data;
        case actions.EventDetailRem:
            return event;
        default:
            return state;
    }
}

export default eventDetailReducer;