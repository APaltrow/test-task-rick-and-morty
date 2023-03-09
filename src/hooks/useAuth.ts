import { useEffect } from 'react';

import { CLIENT_ID } from '@constants/clientId';
import { IUser } from '@types';
import { login, logout, useAppDispatch } from '@redux';

import { gapi } from 'gapi-script';

interface ProfileObj {
  profileObj: IUser;
}

export const useAuth = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: CLIENT_ID,
        scope: '',
      });
    };

    gapi.load('client:auth2', start);
  }, []);

  const onLoginSuccess = ({ profileObj }: ProfileObj) => {
    dispatch(login(profileObj));

    alert(`Dear ${profileObj.name}, You are logged in!`);
  };

  const onLoginFailure = () => {
    dispatch(logout());

    alert('Login failed');
  };

  const onLogoutSuccess = () => {
    dispatch(logout());

    alert('You are logged out');
  };

  return {
    onLoginSuccess,
    onLoginFailure,
    onLogoutSuccess,
  };
};
