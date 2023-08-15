import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const initialState =  {value:{email: "", firstName: "", lastName: "", country: "", city: "", homeNo: "", phone: "", street: "", streetNo: "", logged: false}}

interface UserStateValue {
    email: string,
    firstName: string,
    lastName: string,
    country: string,
    city: string,
    homeNo: string,
    phone: string,
    street: string,
    streetNo: string,
    logged: boolean
}

interface UserState {
    value: UserStateValue
}

export const userSlice = createSlice({
    name: "user",
    initialState: initialState as UserState,
    reducers:{
        login: (state: UserState, action: PayloadAction<UserStateValue>)=>{
            state.value = {...action.payload}
        },
        logout: (state: UserState) => {
            state = initialState
        }
    }
})

export const {login, logout} = userSlice.actions