import { lazy } from 'react';

const TestAsync = lazy(() => import('./Test'));

export default TestAsync;
