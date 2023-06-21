import { FC, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeAsync from 'pages/Home';
import TestAsync from 'pages/Test';

const App: FC = () => (
  <BrowserRouter>
    <Suspense fallback="Loading">
      <Routes>
        <Route path="/" element={<HomeAsync />} />
        <Route path="/test" element={<TestAsync />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
