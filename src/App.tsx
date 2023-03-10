import { FC } from 'react';

import { AppRouter } from '@router/AppRouter';

import { MainLayout } from './layouts';

import '@style/app.scss';

export const App: FC = () => {
  return (
    <div className="app">
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </div>
  );
};
