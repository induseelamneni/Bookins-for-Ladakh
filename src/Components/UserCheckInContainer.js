import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css" 
import "bootstrap/dist/css/bootstrap.min.css"
import {FaPlusCircle ,FaMinusCircle} from "react-icons/fa"
import { useDispatch } from "react-redux";
import { addUserStayingDates } from "./utils/userStayingDatesSlice";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";


const UserCheckInContainer = () => {
    const [disable ,setDisable] = useState(true)
    const [toDate , setToDate] = useState([])
    const [fromDate, setFromDate] = useState([])
    const [roomsCount , setRoomsCount] = useState(0)

    const [toDateFormat , setToDateFormat] = useState("")
    const [fromDateFormat , setFromDateFormat] = useState("")
    const dispatch = useDispatch()
    // const navigate = useNavigate()
    const userStayingData = {
        ToDate : toDateFormat,
        FromDate : fromDateFormat,
        NoOfRooms:roomsCount
    }
   
        const handleToDate = (e) => {
            const getToDateValue = e.target.value

            const setDateFormate = getToDateValue.split("-")

            const settoyear = setDateFormate[0]
            const settomonth = setDateFormate[1]
            const settodate = setDateFormate[2]

            const settodateformt = settoyear+ "" + settomonth +"" +settodate 

            setToDate(getToDateValue)
            setToDateFormat(settodateformt)
            setDisable(false)
        }

        const handleFromDate = (e) => {
            console.log(e.target.value)
            const getFromDateValue = e.target.value

            const setdromformate = getFromDateValue.split("-")

            const setfromyear = setdromformate[0]
            const setfrommonth = setdromformate[1]
            const setfromdate = setdromformate[2]

            const setfromdateformat = setfromyear+ "" + setfrommonth +"" +setfromdate 
            
            setFromDate(getFromDateValue)
            setFromDateFormat(setfromdateformat)

        }

        const handleSubmit = (e) => {
           e.preventDefault()
           if(toDateFormat > fromDateFormat){
            alert("please select Valid Data")
           }
           else{
            // const {toDate,fromDate,rooms} = StayingDates
            // dispatch(addUserStayingDates({toDate:toDateFormat, fromDate:fromDateFormat, rooms:roomsCount}))
            // navigate("/user")
           }
        }

        const onIncrement = () => {
            setRoomsCount(roomsCount +1 )
        }
        const onDecrement = () => {
           if(roomsCount > 0) {
            setRoomsCount(roomsCount -1 )
             }
        }
        return (
            <div className="bg-[#FFFFFF]  ml-24 mb-24 p-6 z-40 flex flex-row justify-around w-10/12 absolute -bottom-[96px] shadow-lg align-middle">
           
             <form className="flex flex-row justify-around w-full align-middle" onSubmit={handleSubmit}>
                <div>
             <label className="text-xl font-mono">CHECK-IN</label>
             <br/>
             <input type="date" name="todate" onChange={(e) => handleToDate(e)} placeholder={toDateFormat} className="mt-2"/>
             </div>
             <div>
             <label className="text-xl font-mono">CHECK-OUt</label>
             <br/>
             <input type="date" name="fromdate" disabled={disable} onChange={(e) => handleFromDate(e)} className="mt-2"/>
             </div>
             <div>
                <p className="text-xl font-mono mb-0"> Rooms</p>
              
                <div className="flex flex-row ">
                <button className="m-2" onClick={onIncrement}><FaPlusCircle/></button>
                <p className="m-2">{roomsCount}</p>
                <button className="m-2" onClick={onDecrement}><FaMinusCircle/></button>

                </div>
                
             </div>
             <Link to="/user">
             <div>
                <button type="submit" className="bg-[#1e90ff] p-3 rounded-md ">Book</button>
             </div>
             </Link>
             </form>
            
             
         </div>
            
            
        );
}

export default UserCheckInContainer
//bg-[#fafaf9]
//customInput={<CustomeInput/>}/
//{toDate:toDateFormat, fromDate:fromDateFormat, rooms:roomsCount}