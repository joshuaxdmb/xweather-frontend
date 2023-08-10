'use client'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/query';
import {api} from './api'
import Weather from './screens/weather';


export default function Home() {

  const store = configureStore({
    reducer: {[api.reducerPath]:api.reducer},
    middleware: (getDefault) => getDefault().concat(api.middleware)
  });

  setupListeners(store.dispatch)

  return (
    <Provider store={store}>
      <Weather/>
    </Provider>
  )
}
