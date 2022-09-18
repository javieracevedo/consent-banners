import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice'; // TODO: add shorthand so we don't have to specify the relative path like this

export default configureStore({
  reducer: {
    counter: counterReducer
  }
});
