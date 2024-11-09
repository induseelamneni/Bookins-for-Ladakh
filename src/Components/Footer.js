import React from 'react';

import { Location } from './utils/constants';

const Footer =() => {

        return (
            <div className="w-full bg-gray-300 p-4">
                <h1 className='text-4xl font-bold'>Brisphere</h1>
                {Location.map(each => (
                    <li className='list-none text-xl '>{each.title}</li>
                )
                   )}
                   <button className='p-4 m-1 text-xl bold text-white bg-[#1e90ff] rounded-md ml-4 mr-4'>Location</button>
            </div>
        );
    
}

export default Footer;