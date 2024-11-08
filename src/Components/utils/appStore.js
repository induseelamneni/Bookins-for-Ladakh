import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userStayingDatesSlice"
const appStore = configureStore({
    reducer:{
        userStayingDates : userReducer

    }
})

export default appStore