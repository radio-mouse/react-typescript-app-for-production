import { FC, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { ROUTE_HOME } from 'constants/routes';

import HomeAsync from 'pages/Home';

const App: FC = () => (
  <main>
    <Suspense fallback={<span>Loading...</span>}>
      <Routes>
        <Route index element={<HomeAsync />} />
        <Route path="*" element={<Navigate to={ROUTE_HOME} replace />} />
      </Routes>
    </Suspense>
  </main>
);

export default App;
