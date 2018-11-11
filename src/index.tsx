import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppBem } from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <AppBem />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
