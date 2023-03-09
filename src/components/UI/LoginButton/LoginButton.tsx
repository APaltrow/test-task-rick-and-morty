import { FC } from 'react';

import { GoogleLogin } from 'react-google-login';

import { CLIENT_ID } from '@constants/clientId';

interface LoginProps {
  onSuccess: (res: any) => void;
  onFailure: (res: any) => void;
  isAuth: boolean;
}

export const LoginButton: FC<LoginProps> = ({
  onSuccess,
  onFailure,
  isAuth,
}) => {
  return (
    <div>
      <GoogleLogin
        isSignedIn={isAuth}
        clientId={CLIENT_ID}
        onSuccess={onSuccess}
        onFailure={onFailure}
        buttonText="Login"
        cookiePolicy="single_host_origin"
      />
    </div>
  );
};
