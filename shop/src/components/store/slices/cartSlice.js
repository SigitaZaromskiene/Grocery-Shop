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




    renderItemsToCart(state, action) {
      const newItem = action.payload;

      newItem.forEach((product) => {
        const existingItem = state.cart.find((i) => i.id === product.id);
        state.totalQuantity++;

        if (!existingItem) {
          state.cart.push({
            id: product.id,
            quantity: product.quantity,
            price: product.price,
            title: product.title,
            totalPrice: product.price * product.quantity,
          });
        } else {
          existingItem.quantity++;
          existingItem.totalPrice = existingItem.totalPrice + product.price;
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
      if (existingItem.quantity === 1 ) {
       
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

      console.log(cartData);

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

export const deleteCartItem = ({ id, quantity }) => {
  return async (dispatch) => {
    try {
     
      const response = await axios.delete(URL1 + "/" + id);
    
      
      
      dispatch(cartActions.deleteItemFromCart({ id }));
      dispatch(
        uiActions.notification({
          title: "Success",
          message: "Item was deleted from cart",
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

export const updateCartItem = ({ i }) => {
  console.log(i);

  return async (dispatch) => {
    try {
      const response = await axios.put(URL1 + "/" + i.id, {
        quantity: i.quantity+1,
        id: i.id,
        totalPrice: i.totalPrice + i.price,
      });


      
      

      dispatch(
        cartActions.addItemToCart(
          {id: i.id,
            quantity: i.quantity,
            price: i.price,
            title: i.title,
            totalPrice: i.totalPrice,}
        ))

       
      
      dispatch(
        uiActions.notification({
          title: "Success",
          message: "Product quantity was changed",
          status: "success",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.notification({
          title: "Error",
          message: "Cannot change quantity",
          status: "error",
        })
      );
    }
  };
};

// export const withdrawCartItem = ({ i }) => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.put(URL1 + "/" + i.id, {
//         quantity: i.quantity-1,
//         id: i.id,
//         totalPrice: i.totalPrice - i.price,
//       });

//       dispatch(
//         cartActions.removeItemFromCart({
//           id: i.id,
//           quantity: i.quantity - 1,
//           totalPrice: i.totalPrice - i.price,
//          } )
//       );
//       dispatch(
//         uiActions.notification({
//           title: "Success",
//           message: "Product quantity was changed",
//           status: "success",
//         })
//       );
//     } catch (error) {
//       dispatch(
//         uiActions.notification({
//           title: "Error",
//           message: "Cannot change quantity",
//           status: "error",
//         })
//       );
//     }
//   };
// };

export const withdrawCartItem = ({ i }) => {
  return async (dispatch) => {
    try {
      if (i.quantity > 1) {
        // If the item's quantity is greater than 1, reduce the quantity and update the total price.
        const response = await axios.put(URL1 + "/" + i.id, {
          quantity: i.quantity - 1,
          id: i.id,
          totalPrice: i.totalPrice - i.price,
        });

        dispatch(
          cartActions.removeItemFromCart({
            id: i.id,
            quantity: i.quantity - 1,
            totalPrice: i.totalPrice - i.price,
          })
        );
      } else {
        // If the item's quantity is 1, delete it from the database.

       

          const response = await axios.delete(URL1 + "/" + i.id);
        
      

        // Then, remove it from the cart.
        dispatch(cartActions.deleteItemFromCart({ id: i.id, quantity:i.quantity }));
      }

      dispatch(
        uiActions.notification({
          title: "Success",
          message: "Product quantity was changed",
          status: "success",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.notification({
          title: "Error",
          message: "Cannot change quantity",
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
          totalQuantity: cartData.totalQuantity,
          totalPrice: cartData.totalPrice,
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
