import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import './styles/index.scss';

import App from './App';

const root = document.getElementById('root');

if (root) {
  ReactDOM.createRoot(root).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
