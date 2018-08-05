import React from 'react';
import Playing from './src/Playing';
import NowPlayingList from './src/config/Router';

export default class App extends React.Component {
  render() {
    return (
      <NowPlayingList />
    );
  }
}
