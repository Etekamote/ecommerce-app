import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItemInteface } from './../../types/CartItemInterface';


interface CartState{
    value:{ 
        isOpen: boolean,
        items:CartItemInteface[]
    }
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {value:{isOpen: false, items: []}} as CartState,
    reducers:{
        add: (state: CartState, action: PayloadAction<CartItemInteface>)=>{
            let itemExists = false;
            
            state.value.items.forEach(item =>{
                if(item.id === action.payload.id){
                    item.amount += 1
                    itemExists = true
                }
            })
            if(!itemExists){
                state.value.items = [...state.value.items, action.payload ]
            }
            
            state.value.isOpen = true
        },
        remove:(state: CartState, action:PayloadAction<string>)=>{
            state.value.items = state.value.items.filter(item => item.id !== action.payload)
        },
        toggleCart:(state: CartState)=>{
            state.value.isOpen = !state.value.isOpen
        },
        
    }
})

export const {add, remove, toggleCart} = cartSlice.actions