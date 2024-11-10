import React from 'react';
import { useSelector } from 'react-redux';

const BookingConformation = () =>  {
    const userCheckinData = useSelector(store => store.userStayingDates)
    const userdata = useSelector(store => store.user) 
    
        return (
            <div className="relative">
            <div className="p-8 m-8 flex flex-row justify-between align-content: center top-40 bg-gray-100 h-[440px] mb-10" >
                <div className='p-7'>
                    <h1 className='text-sans bold'>{userdata?.names}</h1>
                    <p className='text-sans mt-0'>{userdata?.phoneNums}</p>
                    <p className='text-sans mt-0'>{userdata?.emails}</p>
                    <p className='text-sans mt-0 '>{userdata?.adultsCounts} Adults and  {userdata.childrenCounts} Childrens</p>
                </div>
                <div className='p-7 flex flex-row justify-center align-middle'>
                    <img src="https://tse3.mm.bing.net/th?id=OIP.Cs_MQcODAFqjh_mqsHuJ5wHaHa&pid=Api&P=0&h=220" alt="img"  className='h-[150px] w-[150px] mt-4'/>
                    <div className='m-3 p-4'>
                    <h1>Order Completed</h1>
                    <p>have questions</p>
                    <p>Contact Us</p>
                    </div>
                </div>
            </div>
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
              <button  className="bg-[#1e90ff] p-3 rounded-md ml-4 mr-4 text-white font-bold">12500 </button>
              <p className="p-2 text-sm">Click to pay Token Amount</p>
           </div>
           </div> 
          </div>
            </div>
        );
}

export default BookingConformation;