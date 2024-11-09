import Header from "./Header";
import MainContainer from "./MainContainer";
import Footer from "./Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserDataFormContainer from "./UserDataFormContainer";
import BookingConformation from "./BookingConformation";




const Home = () => {

    const appRouter = createBrowserRouter([
        {
            path :"/",
            element:<MainContainer />
        },
        {
            path :"/user",
            element:<UserDataFormContainer/>

        },
        {
            path:"/booking",
            element:<BookingConformation/>
            
        }
    ])
   
        return (
            <div className="h-full ">
                <Header/> 
                 <RouterProvider router={appRouter}/>
               <Footer/>
                
            </div>
        );
    
}

export default Home