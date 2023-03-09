import { FC } from 'react';

import loaderIcon from '@assets/images/loader.svg';

import style from './Loader.module.scss';

export const Loader: FC = () => (
  <div className={style.container}>
    <img
      className={style.loader_img}
      src={loaderIcon}
      alt="loader"
    />
    <span className={style.loader_text}>Loading ...</span>
  </div>
);
