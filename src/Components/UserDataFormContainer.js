import UserCheckInContainer from "./UserCheckInContainer";
const UserDataFormContainer = () =>  {
    
        return (
            <div className="relative">
              <form className="p-8 m-8 align-content: center top-40 bg-gray-100 h-[440px]" > 
               
                   <div className="flex flex-row">
                  <input type="text" className="p-4 m-4 w-1/2"/>
                  <input type="email" className="p-4 m-4 w-1/2"/>
                  </div>
                  <div className="flex flex-row">
                
                  <input type="tel" className="p-4 m-4 w-1/2"/>
                  
                  <input type="email" className="p-4 m-4 w-3/2"/>
                  <input type="email" className="p-4 m-4 w-3/2"/>
              
                  </div>
            
                  </form>
               
           
            <UserCheckInContainer />
            </div>
        );
    }

    export default UserDataFormContainer
