import { FC } from 'react';

import { AppRouter } from '@router/AppRouter';

import '@style/app.scss';

export const App: FC = () => {
  return (
    <div className="app">
      <div className="container_main">
        <AppRouter />
      </div>
    </div>
  );
};
