import {configureStore} from "@reduxjs/toolkit"
import userCheckinReducer from "./userStayingDatesSlice"
import userReducer from "./userSlice"
const appStore = configureStore({
    reducer:{
        userStayingDates : userCheckinReducer,
        user:userReducer

    }
})

export default appStore