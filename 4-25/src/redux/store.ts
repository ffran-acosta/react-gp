import { UserInfo } from "../model";
import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from "./states/user";

export interface AppStore {
    user: UserInfo;
}

export default configureStore<AppStore>({
    reducer: {
        user: userSlice.reducer
    }
})