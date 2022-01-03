import React from 'react';
import ReactDOM from 'react-dom';
import PriceTicker from './PriceTicker';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PriceTicker />, div);
  ReactDOM.unmountComponentAtNode(div);
});