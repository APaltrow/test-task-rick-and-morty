import { FC } from 'react';

import loaderIcon from '@assets/images/error.svg';

import style from './Error.module.scss';

interface ErrorProps {
  errorMessage: string;
}

export const Error: FC<ErrorProps> = ({ errorMessage }) => (
  <div className={style.container}>
    <img
      className={style.error_img}
      src={loaderIcon}
      alt="loader"
    />
    <strong className={style.error_text}>
      {errorMessage || 'Something went wrong ...'}
    </strong>
  </div>
);
