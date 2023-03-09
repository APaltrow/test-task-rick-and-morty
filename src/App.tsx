import { FC } from 'react';

import { AuthButtons } from '@components';
import { AppRouter } from '@router/AppRouter';

import '@style/app.scss';

export const App: FC = () => {
  return (
    <div className="app">
      <div className="container_main">
        <AuthButtons />
        <AppRouter />
      </div>
    </div>
  );
};
