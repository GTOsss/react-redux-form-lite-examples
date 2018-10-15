import {
  REGISTER_FIELD,
  ARRAY_PUSH,
  BLUR,
  CHANGE,
  UPDATE_ERROR,
  UPDATE_WARNING,
} from './constants';

export const registerField = (form, field) => ({
  type: REGISTER_FIELD, meta: { form, field },
});

export const arrayPush = (form, field, value) => ({
  type: ARRAY_PUSH, meta: { form, field }, payload: { value },
});

export const change = (form, field, value) => ({
  type: CHANGE, meta: { form, field }, payload: { value },
});
