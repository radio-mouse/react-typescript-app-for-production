import { FC, Suspense } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeAsync from "../../Pages/Home";
import TestAsync from "../../Pages/Test";

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
