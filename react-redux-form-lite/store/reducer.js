import { getIn, deleteIn, addToObjectByPath } from '../utils/object-manager';
import {
  REGISTER_FIELD,
  CHANGE,
  BLUR,
  ARRAY_PUSH,
} from './constants';

const initialState = {};

export default (state = initialState, { type, payload, meta }) => {
  const {
    form, field, fieldArray,
  } = meta || {};
  const {
    value,
  } = payload || {};

  const fieldPath = fieldArray ? `${form}.${fieldArray}.${field}` : `${form}.${field}`;

  let newState = { ...state };

  window.addToObjectByPath = addToObjectByPath;

  switch (type) {
    case REGISTER_FIELD:
      return addToObjectByPath(newState, fieldPath, null);
    case ARRAY_PUSH:
      console.log(state, addToObjectByPath(newState, fieldPath, value));
      return addToObjectByPath(newState, fieldPath, value);
    default:
      return state;
  }
};
