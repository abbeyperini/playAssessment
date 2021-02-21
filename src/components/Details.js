import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store/actions';

function Details(props) {
    useEffect(() => {
        props.fetchEvents(props.stateKey, props.timeString)
    }, [props.stateKey, props.timeString])

    return (
        <ul className="events">
            {props.events}
        </ul>
    );
}

const mapStateToProps = (state) => {
    return {
        events: state.events,
        stateKey: state.stateKey,
        timeString: state.timeString
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchEvents: (key, timeString) => dispatch(actions.fetchEvents(key, timeString))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);