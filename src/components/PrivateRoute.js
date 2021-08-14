import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

 function PrivateRoute({ component: Component, ...rest }) {
    const currentUser = useSelector(state => state.auth.user);
 
    return (
        <Route
            {...rest}
            render={props => currentUser ? (
                <Component {...props} />
                ) : (
                <Redirect to={{
                    pathname: '/signin',
                    state: { from: props.location }
                }} />
                )
            }
        />
    );
};


export default PrivateRoute;