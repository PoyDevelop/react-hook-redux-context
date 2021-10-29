import { ACTION_ADD, ACTION_CLEAR, ACTION_REMOVE } from "../Constants";

export const setStateToADD = () => ({
  type: ACTION_ADD,
});
export const setStateToREMOVE = () => ({
  type: ACTION_REMOVE,
});
export const setStateToCLEAR = (payload) => ({
  type: ACTION_CLEAR,
  payload,
});

export const add = () => {
  return (dispatch) => {
    // setTimeout(()=>{
    //     dispatch(setStateToADD());
    // }, 1000)

    dispatch(setStateToADD());
  };
};

export const rem = () => {
  return (dispatch) => {
    dispatch(setStateToREMOVE());
  };
};

export const clear = (payload) => {
  return (dispatch) => {
    dispatch(setStateToCLEAR(payload));
  };
};
