import React from 'react';
import './App.css';
import Counter from './components/Counter';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mount: true
    }

    this.mountCounter = () => this.setState({ mount: true })
    this.unmountCounter = () => this.setState({ mount: false })

  }

  render() {
    return <div className='mainCounterDiv'>
      <button onClick={this.mountCounter} disabled={this.state.mount}>Mount Counter</button>
      <button onClick={this.unmountCounter} disabled={!this.state.mount}>Unmount Counter</button>
      {this.state.mount ? <Counter /> : null}
    </div>
  }
}
