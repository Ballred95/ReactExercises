import React, { Component } from 'react';
import Align from './align';
import Toggle from './toggle';
import Updown from './updown';
import BigSmall from './bigsmall';
import Colorbutton from './colorbutton'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>REACT EXERCISES</h1>
        <Align />
        <hr/>
        <Toggle />
        <hr/>
        <Updown />
        <hr/>
        <BigSmall />
        <hr />
        <Colorbutton />
      </div>
    );
  }
}
