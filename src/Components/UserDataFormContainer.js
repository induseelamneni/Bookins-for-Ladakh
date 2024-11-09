import { useRef, useState } from "react";
import { checkValidateData } from "./utils/formvalidate";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./utils/userSlice";
import { useNavigate } from "react-router-dom";
const UserDataFormContainer = () =>  {
    const [errMsg,setErrMsg ] = useState()
    const userCheckinData = useSelector(store => store.userStayingDates)
  
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    

    const name = useRef(null)
    const email = useRef(null)
    const phoneNum = useRef(null)
    const adultsCount = useRef(null)
    const childrenCount=useRef(null)

    const onSubmitForm = (e) => {
        e.preventDefault()
 
      
    }

    const onClickBtn = () => {
        const msg =  checkValidateData(name.current.value,email.current.value,phoneNum.current.value,adultsCount.current.value,childrenCount.current.value)
        setErrMsg(msg)
        if(msg == null){
            dispatch(addUser({names:name.current.value,emails:email.current.value,phoneNums:phoneNum.current.value,adultsCounts:adultsCount.current.value,childrenCounts:childrenCount.current.value}))
            navigate("/booking")
        }

       
    }
    
        return (
            <div className="relative">
              <form className="p-8 m-8 align-content: center top-40 bg-gray-100 h-[440px] mb-10" onSubmit={onSubmitForm} > 
               
                   <div className="flex flex-row">
                  <input type="text" className="p-4 m-4 w-1/2" placeholder="Please Enter Name" ref = {name}/>
                  
                  <input type="email" className="p-4 m-4 w-1/2" placeholder="Please Enter Email" ref = {email}/>
                  </div>
                  <div className="flex flex-row">
                
                  <input type="tel" className="p-4 m-4 w-1/2" placeholder="please Enter Phone Number" ref = {phoneNum}/>
                  
                  <input type="number" min="1" max="5" className="p-4 m-4 w-3/2" placeholder="please Enter Adult count"ref = {adultsCount}/>
                  <input type="number" min="1" max="5" className="p-4 m-4 w-3/2" placeholder="please Enter children count" ref = {childrenCount}/>
                  
                  </div>
                  <p className="text-red-500">{errMsg}</p>
                  </form>

            <div className="bg-[#FFFFFF]  ml-24 mb-24 p-6 z-40 flex flex-row justify-around w-10/12 absolute -bottom-[96px] shadow-lg align-middle">
           
             <div className="flex flex-row justify-around w-full align-middle" >
                <div>
             <label className="text-xl font-mono">CHECK-IN</label>
             <br/>
             <p className="mt-2">{userCheckinData?.toDate}</p>
             </div>
             <div>
             <label className="text-xl font-mono">CHECK-OUt</label>
             <br/>
             <p className="mt-2">{userCheckinData?.fromDate}</p>
             </div>
             <div>
                <p className="text-xl font-mono mb-0"> Rooms</p>
              
                <div className="flex flex-row ">
               
                <p className="m-2">{userCheckinData?.rooms}</p>
                </div>
                
             </div>
             <div>
                <button onClick={onClickBtn} className="bg-[#1e90ff] p-3 rounded-md ml-4 mr-4 text-white font-bold">12500 ↪ </button>
                <p className="p-2 text-sm">Click to pay Token Amount</p>
             </div>
             </div> 
            </div>
                
            </div>
        );
    }

    export default UserDataFormContainer

    //name.current.value,email.current.value,
