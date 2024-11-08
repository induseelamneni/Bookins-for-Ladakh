import { createSlice } from "@reduxjs/toolkit";

const userStayingDatesSlice = createSlice(
    {
        name: "userStayingDates",
        initialState : null,
        reducers :{
        
          addUserStayingDates:(state,action) => {
            return action.payload
          }
        }
    }

)
export const {addUserStayingDates} = userStayingDatesSlice.actions
export default userStayingDatesSlice.reducer