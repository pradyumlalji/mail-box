import { configureStore, combineReducers } from "@reduxjs/toolkit";

import usersSlice from "./slices/usersSlice";

const rootReducer = combineReducers({
    users: usersSlice,
    // Other reducers can be added here if needed
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
