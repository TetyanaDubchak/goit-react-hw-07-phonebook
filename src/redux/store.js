import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// const rootReducer = combineReducers({
//     contacts: contactsReducer,
//     filters: filtersReducer,
// })

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['filters'],
// }

// const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer
  }
  // reducer: persistedReducer,
  // middleware(getDefaultMiddleware) {
  //     return getDefaultMiddleware({
  //       serializableCheck: {
  //         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //       },
  //     });
  //   },
});

// export const persistor = persistStore(store)

