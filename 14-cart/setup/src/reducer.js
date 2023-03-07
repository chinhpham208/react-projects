const reducer = (state, action) => {
  let tempCart;
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] };
      break;
    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
      break;
    case "INCREASE":
      tempCart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      return { ...state, cart: tempCart };
      break;
    case "DECREASE":
      tempCart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      });
      return { ...state, cart: tempCart };
      break;
    case "GET_TOTAL":
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;
          cartTotal.total += itemTotal;
          cartTotal.amount += amount;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };
      break;
    case "LOADING":
      return { ...state, loading: true };
      break;
    case "DISPLAY_ITEMS":
      return { ...state, cart: action.payload, loading: false };
      break;
    case "TOGGLE_AMOUNT":
      tempCart = state.cart
        .map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            if (action.payload.type === "ins") {
              return { ...cartItem, amount: cartItem.amount + 1 };
            }
            if (action.payload.type === "dec") {
              return { ...cartItem, amount: cartItem.amount - 1 };
            }
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.amount !== 0);
      return { ...state, cart: tempCart };
      break;
  }
  throw new Error('no matching action type');
};
export default reducer;
