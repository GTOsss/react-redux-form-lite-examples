import { REGISTER_FIELD, BLUR, CHANGE } from './constants';

export const registerField = (form, field) => ({
  type: REGISTER_FIELD, meta: { form, field },
});
