import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('RENDER APP SIN CRASH', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
