import * as React from 'react';
import './App.css';

import logo from './logo.svg';

interface P {
  a?: boolean
}

const One: React.FunctionComponent<P> = ({ a }) => {
  if (a) {
    return (
      <React.Fragment>
        <div key='1'>1</div>,
        <div key='2'>2</div>
      </React.Fragment>
    )
  }
  return null
}

// Type '({ a }: { a: any; }) => Element[] | null' is not assignable to type 'FunctionComponentElement<P>'.
//   Property 'type' is missing in type '({ a }: { a: any; }) => Element[] | null'. [2322]

// Binding element 'a' implicitly has an 'any' type. [7031]
const Two: React.FunctionComponent<P> = ({ a }) => {
  if (a) {
    return [
      <div key='1'>1</div>,
      <div key='2'>2</div>
    ]
  }
  return null
}

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        {/* JSX element type 'One' does not have any construct or call signatures. [2604] */}
        <One />
        {/* JSX element type 'Two' does not have any construct or call signatures. [2604] */}
        <Two />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
