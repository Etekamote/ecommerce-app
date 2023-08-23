import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItemInteface } from './../../types/CartItemInterface';


interface CartState{
    value: CartItemInteface[]
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {value:[]} as CartState,
    reducers:{
        add: (state: CartState, action: PayloadAction<CartItemInteface>)=>{
            state.value = [...state.value, action.payload ]
        },
        remove:(state: CartState, action:PayloadAction<string>)=>{
            state.value = state.value.filter(item => item.id != action.payload)
        }
    }
})

export const {add, remove} = cartSlice.actions