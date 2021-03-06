function createThunkMiddleware(extraArgument) {
  // next 是dispatch
  return ({ dispatch, getState }) => next => action => {

    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
