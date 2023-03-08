import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import goBackIcon from '@assets/images/arrow.svg';

import style from './GoBackButton.module.scss';

export const GoBackButton: FC = () => {
  const navigate = useNavigate();
  return (
    <button
      className={style.go_back_btn}
      onClick={() => navigate(-1)}
      type="button"
    >
      <img
        src={goBackIcon}
        alt="Go Back"
      />
      <span>Go back</span>
    </button>
  );
};
