const defaultState = {
  cart: [],
};

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case 'ADD_TO_CART': {
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            ...payload,
            quantity: 1,
          },
        ],
      };
    }
    default:
      return state
  }
};

export default reducer;