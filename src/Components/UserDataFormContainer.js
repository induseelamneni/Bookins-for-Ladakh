import { useState } from "react";
import UserDataForm2 from "./UserDataForm2";
const UserDataFormContainer = () =>  {
    const [name , setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNem , setPhoneNum] = useState("")
    const [adultCount , setAdultCount] = useState("")
    const [childrenCount , setChildrenCount]  = useState("")

    const onValidateForm = () => {

    }

    const onChangeName = (e) => {
        setName(e.target.value)

    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)

    }
    const onChangePhoneNum = (e) => {
        setPhoneNum(e.target.value)

    }
    const onChangeAdultCount = (e) => {
        setAdultCount(e.target.value)

    }
    const onChangeChildrenCount = (e) => {
        setChildrenCount(e.target.value)

    }
    
        return (
            <div className="relative">
              <form className="p-8 m-8 align-content: center top-40 bg-gray-100 h-[440px] mb-10" onSubmit={onValidateForm} > 
               
                   <div className="flex flex-row">
                  <input type="text" className="p-4 m-4 w-1/2" placeholder="Please Enter Name" onChange={(e)=> onChangeName(e)}/>
                  <input type="email" className="p-4 m-4 w-1/2" placeholder="Please Enter Email" onChange={(e)=> onChangeName(e)}/>
                  </div>
                  <div className="flex flex-row">
                
                  <input type="tel" className="p-4 m-4 w-1/2" placeholder="please Enter Phone Number" onChange={(e)=> onChangeName(e)}/>
                  
                  <input type="email" className="p-4 m-4 w-3/2" placeholder="please Enter Adult count" onChange={(e)=> onChangeName(e)}/>
                  <input type="email" className="p-4 m-4 w-3/2" placeholder="please Enter children count" onChange={(e)=> onChangeName(e)}/>
            
                  </div>
                  </form>
            <UserDataForm2 />
            </div>
        );
    }

    export default UserDataFormContainer
