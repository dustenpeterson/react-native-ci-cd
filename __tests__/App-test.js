/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

it('App has children', () => {
  const root = renderer.create(<App />);

  const tree = root.toTree();

  expect(tree.children > 0);
});
