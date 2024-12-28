import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload); /// updating the state
    },
    removeItem: (state, action) => {
      //         let arr=[1,23,4,5,8,11,2];
      // let val= 23;
      // let index=(arr.indexOf(val));
      // arr.splice(index,1)
      // console.log(arr)
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0; // emptying the cart
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
