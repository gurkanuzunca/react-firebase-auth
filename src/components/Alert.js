import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearAlert } from '../actions/alertAction';

function Alert() {
    const dispatch = useDispatch();
    const {type, message, isOpen} = useSelector(state => state.alert);

    useEffect(() => {
        return () => {
            dispatch(clearAlert());
        }
    }, []);

    if (isOpen === true) {
        return (
            <div className={ 'alert alert-' + type }>
                { message }
            </div>
        )
    }

    return null;
    
}

export default Alert;