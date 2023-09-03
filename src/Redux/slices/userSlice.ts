import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserInterface } from "../../interfaces/UserInterface";


const initialState =  {value:{email: "", firstName: "", lastName: "", country: "", city: "", homeNo: "", phone: "", street: "", streetNo: "", logged: false}}



interface UserState {
    value: UserInterface
}

export const userSlice = createSlice({
    name: "user",
    initialState: initialState as UserState,
    reducers:{
        login: (state: UserState, action: PayloadAction<UserInterface>)=>{
            state.value = {...action.payload}
        },
        logout: (state: UserState) => {
            state = initialState
        }
    }
})

export const {login, logout} = userSlice.actions