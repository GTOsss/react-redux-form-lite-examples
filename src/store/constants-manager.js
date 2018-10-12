const constList = {};

const addActionInList = (name) => {
  if (constList[name]) {
    throw new Error(`Const (${name}) already in use`);
  }
  constList[name] = true;
};

export const createConst = (...keys) => (
  name,
) => {
  const actionName = [...keys, name].join('/').toUpperCase();
  if (process.env.NODE_ENV === 'development') {
    addActionInList(actionName);
  }
  return actionName;
};
