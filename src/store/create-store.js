import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { reducerReduxFormLite as formLite } from '@components/redux-form-lite';
import thunk from 'redux-thunk';
import reducers from './reducers';

const isProduction = process.env.NODE_ENV === 'production';
const devToolsExtension = (isProduction ? undefined : window.__REDUX_DEVTOOLS_EXTENSION__); //eslint-disable-line

export default () => createStore(
  combineReducers(reducers),
  devToolsExtension && devToolsExtension(),
  applyMiddleware(thunk),
);
