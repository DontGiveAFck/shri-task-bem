import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppBem } from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppBem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
