import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function withAuthRedirect(Component) {
  function WrappedComponent(props) {
    const { userId, email } = useSelector((state) => state.auth);

    if (!userId && !email) return <Redirect to="/login" />;
    return <Component {...props} />;
  }
  return WrappedComponent;
}

export default withAuthRedirect;
