import "bootstrap/dist/css/bootstrap.min.css"


const ServiceCard = ({data}) =>  {
        
        return (
            <div className='bg-[#FFFFFF]  shadow-lg w-[350px] h-[350px] m-4 p-4 align-text-bottom'>
                <div className='flex justify-center'>
                <img src={data.serviceIcon} alt="icon"/>
            </div>
             <h1 className='text-xl bold text-center'>{data.serviceTitle}</h1>
             <p>{data.serviceDiscription}</p>
           </div>
        );
}

export default ServiceCard;
