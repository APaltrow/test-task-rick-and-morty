import { FC } from 'react';

import { GoogleLogout } from 'react-google-login';

import { CLIENT_ID } from '@constants/clientId';

import style from './LogoutButton.module.scss';

interface LogoutProps {
  onLogoutSuccess: () => void;
  imgUrl?: string;
}

export const LogoutButton: FC<LogoutProps> = ({ onLogoutSuccess, imgUrl }) => {
  return (
    <div className={style.container}>
      {imgUrl && (
        <img
          className={style.avatar}
          src={imgUrl}
          alt="avatar"
        />
      )}

      <GoogleLogout
        icon={!imgUrl}
        buttonText="Logout"
        clientId={CLIENT_ID}
        onLogoutSuccess={onLogoutSuccess}
      />
    </div>
  );
};
