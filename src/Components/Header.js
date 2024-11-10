import { Link } from "react-router-dom";

const Header = () => {
   
    return (
        <div className=" align-middle p-4 m-4 flex flex-row justify-between bg-slate-300  sm:bg-slate-100    md:bg-white-300  ">
            <div className="flex flex-col sm:flex-row md:flex-row " >
            {/* <Link to="/"> */}
           <h1 className=" text-sm font-bold sm:text-md md:text-2xl" >Brishpere</h1> 
           {/* </Link> */}
           </div>
           <div className="flex flex-row justify-around">
           <a href="#discover" className="no-underline shadow-link text-black">
           <h1 className="m-2 text-sm font-sans sm:text-md md:text-2xl" >Discover</h1> 
           </a>
           <a href="#services" className="no-underline shadow-link text-black">
           <h1 className="m-2 text-sm font-sans sm:text-md md:text-2xl">Services</h1>
           </a>
           <a href="#aboutus" className="no-underline shadow-link text-black">
           <h1 className="m-2 text-sm font-sans sm:text-md md:text-2xl">About Us</h1>
           </a>
           </div>
        </div>
    );

}

export default Header