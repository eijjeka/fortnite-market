export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_GOODS":
      return {
        ...state,
        goods: payload || [],
        loading: false,
      };
    case "TOGGLE_BASKET":
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      };

    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        order: state.order.filter((el) => el.id !== payload.id),
      };

    case "INCREMENT_QUANTITY":
      return {
        ...state,
        order: state.order.map((item) => {
          if (payload.id === item.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        }),
      };

    case "DECREMENT_QUANTITY":
      return {
        ...state,
        order: state.order.map((item) => {
          if (item.id === payload.id) {
            return {
              ...item,
              quantity: item.quantity >= 0 ? item.quantity - 1 : 0,
            };
          }
          return item;
        }),
      };

    case "ADD_TO_BASKET": {
      console.log(payload.item);
      const ItemIndex = state.order.findIndex(
        (orderItem) => orderItem.id === payload.id
      );
      let newOrder = null;

      if (ItemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === ItemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          }
          return orderItem;
        });
      }
      return {
        ...state,
        order: newOrder,
      };
    }

    default:
      return state;
  }
};
