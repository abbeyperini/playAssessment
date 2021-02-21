import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store/actions';

function Header(props) {
    const [key, setKey] = useState('18bad24aaa');
    const [startString, setStartString] = useState('');
    const [endString, setEndString] = useState('');
    const [rangeString, setRangeString] = useState('');

    const handleOnChange = (e) => {
        setKey(e.target.value)
    }

    const handleStartChange = (e) => {
        let ISOString = new Date(e.target.value).toISOString()
        let startString = `from=${ISOString}&`
        setStartString(startString)
    }

    const handleEndChange = (e) => {
        let ISOString = new Date(e.target.value).toISOString()
        let endString = `to=${ISOString}`
        setEndString(endString)
        setRangeString(`${startString}${endString}`)
    }
    
    useEffect(() => {
        props.updateKey(key)
        props.updateTime(rangeString)
    }, [handleOnChange, handleEndChange])

    return (
        <header>
            <label htmlFor="orgKey">State Association:</label>
            <select name="orgKey" id="orgKey" onChange={handleOnChange}>
                <option value="18bad24aaa">GHSA</option>
                <option value="542bc38f95">UIL</option>
            </select>
            <label htmlFor="startDate">Start Date:</label>
            <input type="date" id="startDate" onChange={handleStartChange}></input>
            <label htmlFor="endDate">End Date:</label>
            <input type="date" id="endDate" onChange={handleEndChange}></input>
        </header>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateKey: (key) => dispatch(actions.updateKey(key)),
        updateTime: (rangeString) => dispatch(actions.updateTime(rangeString))
    }
}

export default connect(null, mapDispatchToProps)(Header);