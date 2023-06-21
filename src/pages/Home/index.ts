import { lazy } from 'react';

const TestAsync = lazy(() => import('./Home'));

export default TestAsync;
