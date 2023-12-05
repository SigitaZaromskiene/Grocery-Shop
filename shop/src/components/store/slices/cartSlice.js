import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./uiSlice";
import { products } from "../../Data/Groceries";
import axios from "axios";

const URL = "http://localhost:3111/order";
const URL2 = "http://localhost:3111";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [],
    products: products,
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    renderItemsToCart(state, action) {
      const newItem = action.payload;

      newItem.forEach((product) => {
        const existingItem = state.cart.find((i) => i.id === product.id);

        if (!existingItem) {
          state.cart.push({
            id: product.id,
            quantity: product.quantity,
            price: product.price,
            title: product.title,
            totalPrice: product.price * product.quantity,
            category: product.category,
          });
          state.totalQuantity = product.quantity + state.totalQuantity;
        } else {
          existingItem.quantity++;
          existingItem.totalPrice = existingItem.totalPrice + product.price;
          state.totalQuantity = product.quantity + existingItem.totalQuantity;
        }
      });
    },

    deleteItemFromCart(state, action) {
      const productToDelete = action.payload;
      state.cart = state.cart.filter((i) => i.id !== productToDelete.id);
    },

    emptyCart(state) {
      state.cart = [];
      state.totalQuantity = 0;
    },

    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cart.find((i) => i.id === newItem.id);
      state.totalQuantity++;

      if (!existingItem) {
        state.cart.push({
          id: newItem.id,
          quantity: newItem.quantity,
          price: newItem.price,
          title: newItem.title,
          totalPrice: newItem.price * newItem.quantity,
          category: newItem.category,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cart.find((i) => i.id === newItem.id);
      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        state.cart = state.cart.filter((i) => i.id !== newItem.id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const onPageLoad = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(URL2);

      if (response?.status !== 200) {
        throw new Error("Cannot load the page");
      }

      const cartData = response.data;

      dispatch(cartActions.renderItemsToCart(cartData));
    } catch (error) {
      dispatch(
        uiActions.notification({
          title: "Error",
          message: `${error.message}`,
          status: "error",
        })
      );
    }
  };
};

export const sendOrderData = ({ title, price }) => {
  return async (dispatch) => {
    try {
      await axios.post(URL, { title, price }, { withCrediantials: true });

      dispatch(
        uiActions.notification({
          title: "Success",
          message: "Thank you for your order",
          status: "success",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.notification({
          title: "Error",
          message: `${error.message}`,
          status: "error",
        })
      );
    }
  };
};

export const cartActions = cartSlice.actions;
export default cartSlice;
