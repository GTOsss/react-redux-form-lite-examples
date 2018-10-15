import { getIn, deleteIn, addToObjectByPath } from '../utils/object-manager';
import {
  REGISTER_FIELD,
  CHANGE,
  BLUR,
  ARRAY_PUSH,
} from './constants';

const initialState = {};

const updateValue = (state, pathValue, pathMeta, value, meta) => {
  let newState = { ...state };
  newState = addToObjectByPath(newState, pathValue, value);
  return addToObjectByPath(newState, pathMeta, meta);
};

export default (state = initialState, { type, payload, meta }) => {
  const {
    form, field, fieldArray,
  } = meta || {};
  const {
    value,
  } = payload || {};

  const pathValue = fieldArray ? `${form}.values.${fieldArray}.${field}` : `${form}.values.${field}`;
  const pathMeta = fieldArray ? `${form}.meta.${fieldArray}.${field}` : `${form}.meta.${field}`;

  let newState = { ...state };

  switch (type) {
    case REGISTER_FIELD:
      return updateValue(newState, pathValue, pathMeta, null, {});
    case CHANGE:
      return updateValue(newState, pathValue, pathMeta, value, { changed: true });
    case ARRAY_PUSH:
      return updateValue(newState, pathValue, pathMeta, value, {});
    default:
      return state;
  }
};
