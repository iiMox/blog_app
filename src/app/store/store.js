import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postsSlice from "./slices/postsSlice";
import postSlice from "./slices/postSlice";
import {
    useDispatch as useDispatchBase,
    useSelector as useSelectorBase,
} from "react-redux";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({
    posts: postsSlice,
    post: postSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    devTools: true,
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);

export const useDispatch = () => useDispatchBase();

export const useSelector = (selector) => useSelectorBase(selector);
