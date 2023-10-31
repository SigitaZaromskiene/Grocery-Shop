import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./uiSlice";
import { cartActions } from "./cartSlice";
import { products } from "../../Data/Groceries";

import axios from "axios";
import { useSelector } from "react-redux";

const URL = "http://localhost:3111/shop";



 const shopSlice = createSlice({
    name:'shopSlice',
    initialState: { value: 0},
    reducers:{

        addItemQuantity(state, action) {
            const product = action.payload

            console.log(product)

           state.value =product.productQuantities
       

            // const existingItem = products.find((i) => i.id === product.id);
            // console.log(existingItem)
            // existingItem.quantity++
        }}
            
      });
      

      export const withdrawCartItem = ({ i }) => {
        return async (dispatch) => {
          try {
            if (i.quantity > 1) {
              // If the item's quantity is greater than 1, reduce the quantity and update the total price.
              const response = await axios.put(URL + "/" + i.id, {
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
      
             
      
                const response = await axios.delete(URL + "/" + i.id);
              
            
      
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

    



export default shopSlice
export const shopActions = shopSlice.actions;