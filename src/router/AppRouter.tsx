import { FC } from 'react';

import { Route, Routes } from 'react-router-dom';

import { HomePage, SingleCharacterPage, NotFoundPage } from '@pages';

export const AppRouter: FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        index
        element={<HomePage />}
      />
      <Route
        path="character/:id"
        element={<SingleCharacterPage />}
      />
      <Route
        path="*"
        element={<NotFoundPage />}
      />
    </Routes>
  );
};
