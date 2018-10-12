import omit from 'lodash.omit';
import { LOADING_TOGGLE } from './constants';

const initialState = { };

/**
 * @param state
 * @param type
 * @param {object} payload {
 *   value: bool
 *   key: string
 * }
 * @returns {{}}
 */
export default (state = initialState, { type, payload }) => {
  const { value, key } = payload || {};

  switch (type) {
    case LOADING_TOGGLE: {
      if (value) {
        return { ...state, [key]: value };
      }
      return omit(state, key);
    }
    default:
      return state;
  }
};
