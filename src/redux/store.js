import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import AuthSlice from './AuthSlice';
import VisaSlice from './VisaSlice';
import SignUpSlice from './SignUpSlice';
import InsuranceSlice from './InsuranceSlice';
import ProfileSlice from './ProfileSlice';
import NewUserSlice from './NewUserSlice';

const reducers = combineReducers({
  loginVerify: AuthSlice,
  fetchVisa: VisaSlice,
  signUp: SignUpSlice,
  insurance: InsuranceSlice,
  profile: ProfileSlice,
  address: NewUserSlice,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['loginVerify'],
  blacklist: ['fetchVisa', 'signUp', 'insurance', 'profile', 'address'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

const persistor = persistStore(store);
export {store, persistor};
