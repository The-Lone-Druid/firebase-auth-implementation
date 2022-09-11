import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

export interface AuthState {
  user: any | null;
}

const initialState: AuthState = {
  user: null
};

export const counterSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action) => {
      state.user = action.payload;
    },
    resetAuthState: (state) => {
      state = initialState;
    }
  }
});

export const { setAuthState, resetAuthState } = counterSlice.actions;

export const selectAuthData = (state: RootState) => state.auth.user;
export default counterSlice.reducer;
