import { services } from "./services"

export const actionTypes = {
    EVENTS_REQUESTED: "EVENTS_REQUESTED",
    EVENTS_FETCHED: "EVENTS_FETCHED",
    EVENT_FETCH_FAIL: "EVENT_FETCH_FAIL",
    UPDATE_KEY: "UPDATE_KEY",
    UPDATE_TIME: "UPDATE_TIME"
}

export const actions = {
    fetchEvents,
    updateKey,
    updateTime
}

function fetchEvents(key, timeString) {
    return dispatch => {
        dispatch(loading())
        services.fetchEvents(key, timeString)
        .then(
            result => {
                if (result.data) {
                    let formatted = result.data.items.map((item) => {
                        let headline = item.publishers[0].broadcasts[0].headline;
                        let subheadline = item.publishers[0].broadcasts[0].subheadline;
                        let start_time = new Date(item.publishers[0].broadcasts[0].start_time).toUTCString();
            
                        return (
                            <li key={item.key} className="event-item">
                                <p className="keyP">{item.key}</p>
                                <p>{headline}</p>
                                <p>{subheadline}</p>
                                <p>{start_time}</p>
                            </li>
                        );
                    });
                    dispatch(success(formatted))
                } else {
                    dispatch(failure(result.data.message));
                }
            },
            error => {
                dispatch(failure(error))
            }
        )
    }

    function loading() { return { type: actionTypes.EVENTS_REQUESTED } }
    function success(result) { return { type: actionTypes.EVENTS_FETCHED, payload: result } }
    function failure(error) { return { type: actionTypes.EVENT_FETCH_FAIL, payload: error } }
}

function updateKey(key) {
    return dispatch => {
        dispatch(update(key))
    }

    function update(key) { return { type: actionTypes.UPDATE_KEY, payload: key } }
}

function updateTime(timeString) {
    return dispatch => {
        dispatch(update(timeString))
    }

    function update(timeString) { return { type: actionTypes.UPDATE_TIME, payload: timeString } }
}