import { FC } from 'react';

import style from './ProfilePhoto.module.scss';

interface ProfilePhotoProps {
  imgUrl: string;
  name: string;
}
export const ProfilePhoto: FC<ProfilePhotoProps> = ({ imgUrl, name }) => (
  <img
    className={style.photo}
    src={imgUrl}
    alt={name || 'Character image'}
  />
);
