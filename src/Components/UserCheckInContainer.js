import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css" 
import "bootstrap/dist/css/bootstrap.min.css"
import {FaPlusCircle ,FaMinusCircle} from "react-icons/fa"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUserStayingDates } from "./utils/userStayingDatesSlice";

const UserCheckInContainer = () => {
    const [disable ,setDisable] = useState(true)
    const [toDate , setToDate] = useState([])
    const [fromDate, setFromDate] = useState([])
    const [roomsCount , setRoomsCount] = useState(0)

    const dispatch = useDispatch()
    const navigate = useNavigate()
  
        const handleToDate = (e) => {
            const getToDateValue = e.target.value
            setToDate(getToDateValue)
          
            setDisable(false)
        }

        const handleFromDate = (e) => {
            
            const getFromDateValue = e.target.value            
            setFromDate(getFromDateValue)
           

        }

        const handleSubmit = (e) => {
           e.preventDefault()
           
           
           if(toDate > fromDate ){
            alert("please select Valid Data")
           }else if(roomsCount <= 0){

            alert("please select Rooms")
           }
           dispatch(addUserStayingDates({toDate:toDate, fromDate:fromDate, rooms:roomsCount}))
          
        }

        const onIncrement = () => {
            setRoomsCount(roomsCount +1 )
        }
        const onDecrement = () => {
           if(roomsCount > 0) {
            setRoomsCount(roomsCount -1 )
             }
        }

        const onConformUser =() => {
            if(toDate && fromDate && roomsCount){
                navigate("/user")
            }
        }


        return (
            <div className="bg-[#FFFFFF]  ml-20 mb-24 p-6 z-40 flex flex-row justify-around w-9/12 absolute -bottom-[96px] shadow-lg align-middle sm:w-10/12 ml-20 md-10/12">
           
             <form className="flex flex-row justify-around w-full align-middle" onSubmit={handleSubmit}>
                <div>
             <label className="text-sm font-mono sm:text-xl md:text-md">CHECK-IN</label>
             <br/>
             <input type="date" name="todate" onChange={(e) => handleToDate(e)} className="mt-2 text-sm sm-text-xl"/>
             </div>
             <div>
             <label className="text-sm font-mono sm:text-xl md:text-md">CHECK-OUt</label>
             <br/>
             <input type="date" name="fromdate" disabled={disable} onChange={(e) => handleFromDate(e)} className="mt-2 text-sm sm-text-xlmd:text-md"/>
             </div>
             <div>
                <p className="text-sm font-mono mb-0 sm:text-xl md:text-md"> Rooms</p>
              
                <div className="flex flex-row ">
                <button className="m-2" onClick={onDecrement}><FaMinusCircle/></button>
                <p className="m-2">{roomsCount}</p>
                
                <button className="m-2" onClick={onIncrement}><FaPlusCircle/></button>

                </div>
                
             </div>
             <div>
                <button onClick={onConformUser} className="bg-[#1e90ff] p-3 rounded-md ml-4 mr-4 text-white font-bold" disable={true}>Book</button>
             </div>
             </form> 
         </div>
            
            
        );
}

export default UserCheckInContainer
