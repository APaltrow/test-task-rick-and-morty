import { FC } from 'react';

import logoIcon from '@assets/images/logo.png';

import style from './Logo.module.scss';

export const Logo: FC = () => (
  <img
    className={style.logo_img}
    src={logoIcon}
    alt="logo"
  />
);
