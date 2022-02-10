import * as actions from '../actions/actionTypes'

export const signin = (data) => {
    return {
        type: actions.Sign_in,
        payload: data
    }
}
export const signout = () => {
    return {
        type: actions.Sign_out
    }
}

export const profile = (data) => {
    return {
        type: actions.Profile,
        payload: data
    }
}
export const refresh_token = (data) => {
    return {
        type: actions.Refresh,
        payload: data
    }
}
export const add_event = (data) => {
    return {
        type: actions.EventDetailAdd,
        payload: data
    }
}
export const rem_event = () => {
    return {
        type: actions.EventDetailRem
    }
}
