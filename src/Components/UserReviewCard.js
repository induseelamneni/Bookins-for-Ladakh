import React from 'react';
import { userReview } from './utils/constants';

const UserReviewCard = () =>  {
 
        return (
            <div className='bg-[#FFFFFF]  shadow-lg w-[450px] m-4 p-4'>
         
                   <div className='flex flex-row align-middle'>
                        <div className='h-[50px] w-[50px] rounded-3xl bg-gray-200 mr-4'>
                        <img src ={userReview.usersvg} alt="persion" className='h-[50px] w-[50px] rounded-xl' />
                        </div> 
                        <h1 className='font-medium text-xl mt-3'>{userReview.name}</h1>
                       
                        </div>
                        <div>

                        </div>

                        <p>{userReview.review}</p>


                
                    
                

                </div>
                
          
        );
}

export default UserReviewCard;