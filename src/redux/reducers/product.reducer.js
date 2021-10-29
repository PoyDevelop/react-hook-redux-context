import { ACTION_ADD, ACTION_REMOVE, ACTION_CLEAR } from "../Constants";

const initialState = {
  qty: 10,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_ADD:
      return { ...state, qty: state.qty + 1 };

    case ACTION_REMOVE:
      return { ...state, qty: state.qty - 1 };

    case ACTION_CLEAR:
      return { ...state, qty: payload };

    default:
      return state;
  }
};
