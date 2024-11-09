import React  from 'react';
import UserReviewCard from './UserReviewCard';

const Discover =() => {
  
        return (
            <div className="p-4 ">
                <h1 className='text-center mb-3'>Discover</h1>
                <div className='flex flex-row align-middle justify-center'>
                <UserReviewCard />
                <img src="https://tse3.mm.bing.net/th?id=OIP.QIKyrL--L5L56dZzF5YNUQHaE8&pid=Api&P=0&h=580" alt="ladakh" className='align-center'/>
                <UserReviewCard />
                </div>
                <div className='flex flex-row justify-center align-middle w-full'>
                <UserReviewCard />
                </div>
            </div>
        );

}

export default Discover;