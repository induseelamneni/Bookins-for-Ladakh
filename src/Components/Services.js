import React, { useEffect, useState } from 'react';
import ServiceCard from "./ServiceCard"

const Services = () =>  {
    const [servicesData,setServicesData] = useState([])


    useEffect( ()=>{
            getdata()
    },[])

    const getdata = async() => {
    const data = await fetch("https://mocki.io/v1/01278744-54fa-409d-a7f0-af43800d7c6e")
    const response = await data.json()
    setServicesData(response?.Services)
    }
        return (
            <div className="p-4 ">
            <h1 className='text-center'>Services</h1>
            <div className='flex flex-row flex-wrap align-middle justify-center'>
                {servicesData.map((each) => (
                    <ServiceCard key={each.id} data={each}/>
                ))}
            </div>
        </div>
        );
}

export default Services;