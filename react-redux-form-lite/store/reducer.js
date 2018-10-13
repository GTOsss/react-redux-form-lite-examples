import { getIn, deleteIn, addToObjectByPath } from '../utils/object-manager';
import {
  REGISTER_FIELD,
  CHANGE,
  BLUR,
} from './constants';

const initialState = {};

export default (state = initialState, { type, payload, meta }) => {
  const {
    form, field, fieldArray,
  } = meta || {};

  const fieldPath = fieldArray ? `${form}.${fieldArray}.${field}` : `${form}.${field}`;

  let newState = { ...state };

  switch (type) {
    case REGISTER_FIELD:
      return addToObjectByPath(newState, fieldPath, null);
    default:
      return state;
  }
}