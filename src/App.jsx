import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import TestIf from './components/test-if';
import TestFor from './components/test-for';
import TestChoose from './components/test-choose';
import TestWith from './components/test-with';
import TestDummyInlineFunc from "./components/test-dummy-inline-func";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <TestIf />
        <TestFor />
        <TestChoose />
        <TestWith />
				<TestDummyInlineFunc />
      </div>
    );
  }
}

export default hot(module)(App);
