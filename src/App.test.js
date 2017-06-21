import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('My test suite', () => {
    it('`true` should be `true`', () => {
        expect(true).toBe(true);
    });
    it('`false` should be `false`', () => {
        expect(false).toBe(false);
    }); });
