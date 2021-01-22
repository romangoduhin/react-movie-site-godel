import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function withAuthRedirect(Component) {
  return (props) => {
    const { userId, email } = useSelector((state) => state.auth);

    if (!userId && !email) return <Redirect to="/login" />;
    return <Component {...props} />;
  };
}

export default withAuthRedirect;
