import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  favourite: []
};

const cartSlice = createSlice({
  name: "cartProducts",
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      const isUnique = state.cart.every((el) => action.payload.ID !== el.ID);
      if (isUnique) {
        state.cart.push({
          ...action.payload,
          count:1,
          totalSum: action.payload.price
        });
      }
    },
    addProductToFavoriet: (state, action) => {
      const isFavouritet = state.favourite.every((el) => action.payload.ID !== el.ID);
      if (isFavouritet) {
        state.favourite.push({
          ...action.payload,
          favourite:true
        });
      }
    },
    deleteProduct: (state, action) => {
      state.cart = state.cart.filter(
        (el) => action.payload.ID !== el.ID
      );
    },
    incrementProduct:(state,action) => {
      state.cart = state.cart.map(el => {
        if(el.ID == action.payload.ID){
          return{
            ...el,
            count: ++ el.count,
            totalSum: el.price * el.count
          }
        }
        return el;
      })
    },
    decrementProduct:(state,action) => {
      state.cart = state.cart.map(el => {
        if(el.ID == action.payload.ID){
           if(el.count > 1){
            return{
              ...el,
              count: -- el.count,
              totalSum: el.price * el.count
            }
           }
         }
         return el;
      })
    },
    
      
    }
})
export const cartSelector = (state) => state.cartProducts;
export const { addProduct, deleteProduct ,incrementProduct,decrementProduct,addProductToFavoriet} = cartSlice.actions;
export default cartSlice.reducer;
