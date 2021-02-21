import { actionTypes } from './actions';

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.EVENTS_REQUESTED:
            return {
                ...state,
                eventsLoading: true,
                eventsFailed: false
            }
        case actionTypes.EVENTS_FETCHED:
            return {
                ...state,
                eventsLoading: false,
                eventsFailed: false,
                events: action.payload
            }
        case actionTypes.EVENT_FETCH_FAIL:
            return {
                ...state,
                eventsLoading: false,
                eventsFailed: true,
                error: action.payload
            }
        case actionTypes.UPDATE_KEY:
            return {
                ...state,
                stateKey: action.payload
            }
        case actionTypes.UPDATE_TIME:
            return {
                ...state,
                timeString: action.payload
            }
        default:
            return {
                events: [], 
                stateKey: "18bad24aaa", 
                timeString: ''
            }
    }
}

export default reducer;