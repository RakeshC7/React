// import { Component } from 'react';

// react-redux also exports "connect" function used to connect redux with classbased Components. 
// but we can also use in functional based component also. however, using useDispatch and useSelector hook is great.
// import {connect} from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector( state => state.counter );
  const showCounter = useSelector( state => state.showCounter );

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  // payload to action
  const increaseHandler = () => {
    dispatch({ type: 'increase', amount: 10  })
  }

  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { showCounter &&
        <div className={classes.value}> { !counter ? '-- COUNTER VALUE IS "0" --' : counter }  </div>
      }
      <div >
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// class Counter extends Component{
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {

//   }

//   render(){
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}> { !this.props.counter ? '-- COUNTER VALUE IS "0" --' : this.props.counter }  </div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }


// connect is higher-order Component ,Which returns a new function and we execute this returned function
//here connect wants some argument and both arguments are functions.


// The first function is a function that maps Redux state to props, which will be received in this component then.

// below function is the equivalent to useSelector.

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter
//   };
// }

// It's the equivalent to use dispatch.
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' })
//   };
// }

// export default connect( mapStateToProps, mapDispatchToProps)(Counter);


export default Counter;