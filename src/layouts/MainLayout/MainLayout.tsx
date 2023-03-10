import { FC } from 'react';

import { AuthButtons } from '@components';

import style from './MainLayout.module.scss';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <main className={style.container_main}>
      <AuthButtons />
      {children}
    </main>
  );
};
