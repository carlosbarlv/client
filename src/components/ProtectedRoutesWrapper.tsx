import React from 'react';
import { Redirect } from 'react-router-dom';
import { isLoggedIn } from '../utils/session';
import { PATH_LOGIN } from '../constants/routes';
import NavBar from '../components/NavBar';

const ProtectedRoutesWrapper = (props: any) => {
  return isLoggedIn() ? (
    <NavBar>{props.children}</NavBar>
  ) : (
    <Redirect to={PATH_LOGIN} />
  );
};

export default ProtectedRoutesWrapper;
