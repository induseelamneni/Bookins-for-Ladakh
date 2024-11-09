import Discover from "./Discover";
import UserCheckInContainer from "./UserCheckInContainer";
import Services from "./Services";


const MainContainer = () =>  {
  
        return (
            <>
            <div className="relative">
            <div className=" align-middle p-4 m-4 flex flex-row justify-between">
                <div className="w-1/2 mx-auto px-5 py-10 align-content: center top-40 bg-gray-100">
                   <h1 className="text-4xl font-sans m-2">Work from Ladakh</h1> 
                   <p className="text-xl m-2 font-sans">India's first digital tourisum eco system </p>

                </div>
                <div className="w-1/2 h-96 bg-cover bg-[url(https://static.toiimg.com/photo/64764925/leh-mountains.jpg?width=748&resize=4)] " >
                </div>
            </div>
            <UserCheckInContainer />
            </div>
            <Discover/>
            <Services />
            </>
        );
    
}

export default MainContainer
