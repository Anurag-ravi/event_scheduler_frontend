import * as actions from '../actions/actionTypes'

const event = {
    id: 0,
    club_name: "Club",
    title: "title",
    subtitle: "",
    description: "description",
    image: null,
    date: "2022-02-12",
    deadline: "2022-02-12",
    time_from: "15:42:37.071718",
    time_to: "15:42:37.071718",
    remainder: "None",
    remainder_date: "2022-02-12",
    remainder_time: "15:42:37.072713",
    guests: [],
    location: {
      "offline": {
        "latitude": "",
        "longitude": ""
      },
      "online": {
        "meet_url": "",
        "room_id": "",
        "password": ""
      }
    },
    announcement: {
      "fixed": [],
      "dynamic": []
    },
    resources_upload: [],
    drive_links: [],
    payment: {
      "paid": false,
      "metadata": {
        "price": 0,
        "link": ""
      }
    },
    emails: {
      "registration": {
        "to": [],
        "sub": "",
        "body": ""
      },
      "scheduled": []
    },
    page_view: {},
    feedback: {
      "1": [],
      "2": [],
      "3": [],
      "4": [],
      "5": []
    },
    host: [],
    speaker: [],
    rsvp_users: []
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
export const base_event =  {
  id: 0,
  club_name: "Club",
  title: "title",
  subtitle: "",
  description: "description",
  image: null,
  date: "2022-02-12",
  deadline: "2022-02-12",
  time_from: "15:42:37.071718",
  time_to: "15:42:37.071718",
  remainder: "None",
  remainder_date: "2022-02-12",
  remainder_time: "15:42:37.072713",
  guests: [],
  location: {
    "offline": {
      "latitude": "",
      "longitude": ""
    },
    "online": {
      "meet_url": "",
      "room_id": "",
      "password": ""
    }
  },
  announcement: {
    "fixed": [],
    "dynamic": []
  },
  resources_upload: [],
  drive_links: [],
  payment: {
    "paid": false,
    "metadata": {
      "price": 0,
      "link": ""
    }
  },
  emails: {
    "registration": {
      "to": [],
      "sub": "",
      "body": ""
    },
    "scheduled": []
  },
  page_view: {},
  feedback: {
    "1": [],
    "2": [],
    "3": [],
    "4": [],
    "5": []
  },
  host: [],
  speaker: [],
  rsvp_users: []
};