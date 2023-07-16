import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/UserContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    //loader for page load.............
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div style={{'height':'90vh', 'display':'flex','justifyContent':'center', 'alignItems':'center'}}>
            <h1>Loading..............</h1>
        </div>;
    }


    //private route setup for user
    if (user && user.uid) {
        return children;
    }
    return <Navigate to="/login" state={{from : location}} replace></Navigate>

};

export default PrivateRoute;