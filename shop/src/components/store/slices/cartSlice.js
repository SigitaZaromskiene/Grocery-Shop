import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./uiSlice";
import { products } from "../../Data/Groceries";
import axios from "axios";

const URL = "http://localhost:3111/order";
const URL1 = "http://localhost:3111/cart";
const URL2 = "http://localhost:3111/";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [],
    products: products,
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    deleteItemFromCart(state, action) {
      const productToDelete = action.payload;

      state.cart = state.cart.filter((i) => i.id !== productToDelete.id);
    },

    emptyCart(state){
        state.cart=[]
        state.totalQuantity=0
    },
    renderItemsToCart(state, action) {
      const newItem = action.payload;

      newItem.forEach((product) => {
        const existingItem = state.cart.find((i) => i.id === product.id);
        state.totalQuantity++;

        if (!existingItem) {
          state.cart.push({
            id: product.id,
            quantity: 1,
            price: Number(product.price),
            title: product.title,
            totalPrice: Number(product.price),
          });
        } else {
          existingItem.quantity++;
          existingItem.totalPrice = Number(existingItem.totalPrice + product.price)
        }
      });
    },



    addItemToCart(state, action) {
      const newItem = action.payload;

      const existingItem = state.cart.find((i) => i.id === newItem.id);
      state.totalQuantity++;

      if (!existingItem) {
        state.cart.push({
          id: newItem.id,
          quantity: 1,
          price: newItem.price,
          title: newItem.title,
          totalPrice: newItem.price,
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

      const cartData = response.data;

      dispatch(cartActions.renderItemsToCart(cartData));
    } catch (error) {
      dispatch(
        uiActions.notification({
          title: "Error",
          message: "Cannot load the cart",
          status: "error",
        })
      );
    }
  };
};

export const deleteCartItem = ({ id }) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(URL1 + "/" + id);

      dispatch(cartActions.deleteItemFromCart({ id }));
      dispatch(
        uiActions.notification({
          title: "Success",
          message: "Item from cart was deleted",
          status: "success",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.notification({
          title: "Error",
          message: "Cannot delete from cart",
          status: "error",
        })
      );
    }
  };
};


export const deleteCart = () => {
    return async (dispatch) => {
      try {
        const response = await axios.delete(URL1);
  
        dispatch(cartActions.emptyCart());
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
            message: "Cannot order",
            status: "error",
          })
        );
      }
    };
  };


//   export const editCartItem = ({ id }) => {
//     return async (dispatch) => {
//       try {
//         const response = await axios.delete(URL1 + "/" + id);
  
//         dispatch(cartActions.addItemToCart({ id }));
//         dispatch(cartActions.removeItemFromCart({ id }));
//         dispatch(
//           uiActions.notification({
//             title: "Success",
//             message: "Item added to cart",
//             status: "success",
//           })
//         );
//       } catch (error) {
//         dispatch(
//           uiActions.notification({
//             title: "Error",
//             message: "Cannot cannot be added",
//             status: "error",
//           })
//         );
//       }
//     };
// }

export const sendOrderData = (cartData) => {
  return async (dispatch) => {
    dispatch(uiActions.toggleNotificationVisibility());

    const sendRequest = async () => {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: cartData[0].title,
          price: cartData[0].price,
        }),
      });

      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };

    try {
      await sendRequest();
      dispatch(cartActions.emptyCart())

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
          message: "Cannot send the order",
          status: "error",
        })
      );
    }
  };
};

export const sendCartData = (cartData) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(URL1, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: cartData.title,
          price: cartData.price,
          quantity: cartData.quantity,
          totalquantity: cartData.totalquantity,
          totalPrice: cartData.TotalPrice,
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
          message: "Item added to cart",
          status: "success",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.notification({
          title: "Error",
          message: "Cannot add to the cart",
          status: "error",
        })
      );
    }
  };
};




export const cartActions = cartSlice.actions;
export default cartSlice;
