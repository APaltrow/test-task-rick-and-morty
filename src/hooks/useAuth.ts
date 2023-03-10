import { useEffect } from 'react';

import { CLIENT_ID } from '@constants/clientId';
import { IUser } from '@types';
import { login, logout, useAppDispatch } from '@redux';

import { gapi } from 'gapi-script';

interface ProfileObj {
  profileObj: IUser;
}
interface LoginError {
  error: string;
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

  const onLoginFailure = ({ error }: LoginError) => {
    dispatch(logout());

    alert(`Login failed: ${error}`);
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
