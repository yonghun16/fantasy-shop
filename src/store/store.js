/* import libraries */
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistReducer, persistStore } from "redux-persist";

/* import slices */
import cartReducer from "../features/cart/cartSlice";
import userReducer from "../features/user/userSlice";


/* root reducer (여러 리듀서 합치기) */
export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

const peristConfig = {
  key: "root",   // root state key
  storage,       // local storage
};

const persistedReducer = persistReducer(peristConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],   // redux-persist Action Ignored
      }
    })
});

export const persistor = persistStore(store);
