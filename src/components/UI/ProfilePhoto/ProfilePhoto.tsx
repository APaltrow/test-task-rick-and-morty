import { FC } from 'react';

import style from './ProfilePhoto.module.scss';

export const ProfilePhoto: FC = () => (
  <img
    className={style.photo}
    src="https://www.shutterstock.com/image-vector/rick-morty-portal-vector-600w-2089759198.jpg"
    alt="profile"
  />
);
