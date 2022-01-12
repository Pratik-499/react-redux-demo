import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({auth, component: Component, data ,...rest}) => {
    return (
        <Route {...rest} render={props => auth ? 
        <Component {...props} data={data} /> : 
        <Redirect to={{ pathname:'/', state: {from: props.location.pathname}}} />} />
    )
}

export default ProtectedRoute;