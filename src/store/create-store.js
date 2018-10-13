import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as reduxForm } from '../../react-redux-form-lite';
import reducers from './reducers';

const isProduction = process.env.NODE_ENV === 'production';
const devToolsExtension = (isProduction ? undefined : window.__REDUX_DEVTOOLS_EXTENSION__); //eslint-disable-line

export default () => createStore(
  combineReducers({ ...reducers, reduxForm }),
  devToolsExtension && devToolsExtension(),
  applyMiddleware(thunk),
);
