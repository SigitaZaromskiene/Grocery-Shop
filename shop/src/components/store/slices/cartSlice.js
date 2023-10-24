import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./uiSlice";

const URL = "http://localhost:3111/carts";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: { items: ["apple"], totalQuantity: 0, totalPrice: 0 },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((i) => i.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {},
  },
});

export const sendCartData = (cartData) => {
  return async (dispatch) => {
    dispatch(uiActions.toggleNotificationVisibility());

    const sendRequest = async () => {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: cartData.items[0],
          price: cartData.totalPrice,
        }),
      });

      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.notification({
          title: "Success",
          message: "Thank you for your order",
          status: "success",
        }))
        dispatch(uiActions.toggleCartVisibility())
        
     
    } catch (error) {
      dispatch(
        uiActions.notification({
          title: "Error",
          message: "Cannot send the order",
          status: "error",
        })
      );
    }
  };
};
export const cartActions = cartSlice.actions;
export default cartSlice;
