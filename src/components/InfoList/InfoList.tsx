import { FC } from 'react';

import style from './InfoList.module.scss';

interface InfoListProps {
  gender: string;
  status: string;
  species: string;

  origin: string;
  type: string;
}

export const InfoList: FC<InfoListProps> = ({
  gender,
  status,
  species,
  origin,
  type,
}) => {
  return (
    <ul className={style.info_list}>
      <li className={style.info_list_item}>
        <b>Gender</b>
        <span>{gender || 'Unknown'}</span>
      </li>
      <li className={style.info_list_item}>
        <b>Status</b>
        <span>{status || 'Unknown'}</span>
      </li>
      <li className={style.info_list_item}>
        <b>Specie</b>
        <span>{species || 'Unknown'}</span>
      </li>
      <li className={style.info_list_item}>
        <b>Origin</b>
        <span>{origin || 'Unknown'}</span>
      </li>
      <li className={style.info_list_item}>
        <b>Type</b>
        <span>{type || 'Unknown'}</span>
      </li>
    </ul>
  );
};
