import { FC } from 'react';

import style from './InfoList.module.scss';

export const InfoList: FC = () => {
  return (
    <ul className={style.info_list}>
      <li className={style.info_list_item}>
        <b>Gender</b>
        <span>Male</span>
      </li>
    </ul>
  );
};
