import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// this will work as ENUM in JS now we can now change the value like STATUSES.IDEL
export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const productSlice = createSlice({
    name: 'product',
    initialState: {
        // api call will take time to get the data.
        // so we need to maintain the status of the api call like spinner or loader loading state.
        data: [],
        status: STATUSES.IDLE,

    },
    reducers: {
        // setProducts(state, action) {
        //     // NOTE: DO NOT FETCH DATA FROM HERE, Dont call any Async function here because this reducers is pure function and synchronous.
        //     // So, to avoid this issue we can use Thunk middleware:
        //     // thunk: "a piece of code that does some delayed work."
        //     // Rather than execute some logic now, we can write a function body or code that can be used to perform the work later.
        //     state.data = action.payload;
        // },
        // setStatus(state, action) {
        //     state.status = action.payload;
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUSES.LOADING;

            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            });
    }

});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;


//Thunks

// createAsyncThunk is generally for the better error handling
export const fetchProducts = createAsyncThunk('Products/fetch', async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data;
})


// export function fetchProducts() {
//     return async function fetchProductThunk(dispatch, getState) {
//         // we will use TRY CATCH because we want to do network request.
//         // getState: Generally uses for to get the current state. for example:
//         // const propName = getState().data


//         dispatch(setStatus(STATUSES.LOADING));

//         try {
//             const res = await fetch('https://fakestoreapi.com/products');
//             const data = await res.json();

//             dispatch(setProducts(data));
//             dispatch(setStatus(STATUSES.IDLE));

//         } catch (err) {
//             console.log(err);
//             dispatch(setStatus(STATUSES.ERROR));
//         }
//     }
// }