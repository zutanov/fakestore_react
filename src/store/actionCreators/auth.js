import { LOG_IN, LOG_OUT } from "../actions/action";

export const logIn = (value) => {
    localStorage.setItem('token', value)
    return {
        type : LOG_IN,
        value : value
    }
}

export const logOut = () => {
    localStorage.removeItem('token')
    return {
        type : LOG_OUT
    }
}