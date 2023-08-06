import React from "react";

export default class Counter extends React.Component {
    constructor(props) {
        console.log("Constructor"); // print 1st
        // call base/parent class via super
        super(props);

        // constructor is only place where we can set state
        this.state = { counter: 0 }

        this.increment = () => { this.setState({ counter: this.state.counter + 1 }); }
        this.decrement = () => { this.setState({ counter: this.state.counter - 1 }); }
    }

    // this is called right after render and it called when component is constructed
    componentDidMount() {
        console.log('Component Did Mount');
        console.log('-------------------');
    }

    render() {
        console.log('render'); // print 2nd

        return (
            <div>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <h1 className="text-align">
                    Counter: {this.state.counter}
                </h1>
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log({ prevProps, prevState, snapshot });
        console.log('Component Did Update');
        console.log('--------------------');
    }

    // when component is taken out off the dom
    componentWillUnmount() {
        console.log('ComponentWillUnmount');
        console.log('--------------------');
    }
}