import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchHistory: "",
  },
  reducer: {
    addList: (state, action) => {
      state.searchHistory = action.payload;
    },
  },
});
export const { addList } = searchSlice.actions;
export default searchSlice.reducer;
