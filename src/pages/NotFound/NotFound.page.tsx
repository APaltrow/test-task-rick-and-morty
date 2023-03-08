import { FC } from 'react';

import { GoBackButton } from '@components';

import style from './NotFound.module.scss';

export const NotFoundPage: FC = () => {
  return (
    <>
      <h1 className={style.heading}>404 Nothing has been found</h1>
      <p className={style.message}>
        Looks like you have entered a wrong address ...
      </p>

      <GoBackButton />
    </>
  );
};
