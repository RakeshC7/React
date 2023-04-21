// import { createStore} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterSliceReducer from './counterSlice';
import authSliceReducer from './authSlice';

// const initialCounterState = { counter: 0, showCounter : true }


// 1st way of redux
// const counterReducer = ( state = initialState, action ) => {
//     switch(action.type){
//         case 'increment' : 
//             return {
//                 // we have to return all state because redux won't merge your existing state,
//                 //  it takes what you return and replaces the existing state with it
//                 counter: state.counter + 1,
//                 showCounter: state.showCounter
//             };
        
//         case 'increase' : 
//             return {
//                 counter: state.counter + action.amount,
//                 showCounter: state.showCounter
//             };

//         case 'decrement' : 
//             return {
//                 counter: state.counter - 1,
//                 showCounter: state.showCounter
//             };

//         case 'toggle' : 
//             return {
//                 showCounter: !state.showCounter,
//                 counter: state.counter
//             }

//         default : return state
//     }
// };

// 2nd way of redux with reduxToolkit
// const counterSlice = createSlice({
//     name: 'counter',
//     initialState : initialCounterState,
//     reducers: {
//         increment(state) {
//             state.counter++;
//         },
//         decrement(state) {
//             state.counter--;
//         },
//         increase(state, action) {
//             state.counter += action.payload
//         },
//         toggleCounter(state){
//             state.showCounter = !state.showCounter;
//         }
//     }
// });

// const initialAuthState = {
//     isAuthenticated: false
// }

// const authSlice = createSlice({
//     name: 'authentication',
//     initialState: initialAuthState,
//     reducers: {
//         login(state) {
//             state.isAuthenticated = true;
//         },
//         logout(state) {
//             state.isAuthenticated = false;
//         }
//     }
// });

// const store = createStore(counterReducer);

// NOTE: Here we can call only 1 configureStore wheather we have single slice or multiple
// so, the solution is we can pass FUNCTION AS ARGUMENT but it'll also takes OBJECT
const store = configureStore({
    reducer: {
        counter: counterSliceReducer,
        auth: authSliceReducer
    }
});

// so, here individual reducers here will automatically be merged together into one main reducer,

export default store;