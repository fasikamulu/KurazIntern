import React from 'react';
import about from  '../assets/about.jpg';
import about2 from  '../assets/about2.jpg';


const Aboutus = () =>  {
    return (
        <div className='font-poppins'>
            <div className='relative '>
                <img src ={about} alt="aboutusimg" className='object-cover w-full h-64 opacity-60 '></img>
                <div className="absolute inset-0 flex items-center justify-center">
                <h2 className=' text-sky-950 text-4xl uppercase font-semibold'>About us</h2>
                </div>
                
            </div>
               <div className='mt-12'>
                  <h3 className='text-sky-400 capitalize flex justify-center text-xl'>our company</h3>
                   <h3 className='flex justify-center text-sky-600 text-4xl capitalize mt-1'>who are we</h3>
                   <h3 className='flex justify-center text-sky-950 text-5xl capitalize mt-1'> sky real estates</h3>
               </div>
            
            <div className='flex ml-14 mr-14 mt-12 gap-14 lg:mr-36 lg:ml-36 lg:gap-32 mb-12'>
                <div>
                    <h1 className='text-sky-300 text-xl capitalize mb-2 '>welcome to sky real estates</h1>
                    <p className='max-w-[550px]'>Welcome to Sky Real Estate, where your property dreams take flight. At Sky Real Estate, we are dedicated to providing you with the keys to your ideal home or investment opportunity. Our commitment to excellence, vast property listings, and experienced team ensure that your real estate journey soars to new heights. Whether you're looking for a cozy home, a prime commercial space, or a lucrative investment property, we have the expertise and dedication to make your real estate goals a reality. Join us in exploring the boundless opportunities that the sky has to offer, and let us guide you through the world of real estate with professionalism and a personalized touch. Welcome to Sky Real Estate, where your property aspirations become a soaring success.
                </p>
                </div>
                <div className='ml-20'>
                   <h1 className='text-sky-300 text-xl capitalize mb-2'>who are we</h1>
                   <p className='max-w-[550px]'>Sky Real Estate is a leading name in the real estate industry, committed to transforming the property market by providing unparalleled services and expertise. With a reputation built on integrity, professionalism, and customer-centric values, we have established ourselves as a trusted partner for anyone seeking to buy, sell, or invest in real estate. Our team of experienced real estate professionals is dedicated to delivering innovative solutions, ensuring that our clients' unique needs are met with precision. Sky Real Estate is more than just a real estate agency; we're your gateway to finding the perfect place to call home.
                </p>
                </div>
                     
                
            </div>
            <div ><img src ={about2} alt="aboutusimg" className='object-cover w-full h-52'></img></div>
            <div className='flex ml-14 mr-14 mt-12 gap-14 lg:mr-36 lg:ml-36 lg:gap-32 '>
                <div>
                    <h1 className='text-sky-300 text-xl capitalize mb-2'>our vision</h1>
                    <p className='max-w-[550px]'>At Sky Real Estate, our vision is to redefine the real estate experience for our clients. We aim to become the foremost choice in real estate solutions, setting industry standards for quality, trust, and innovation. We envision a future where the process of buying or selling property is seamless and stress-free. Our dedication to fostering long-term relationships, backed by our commitment to excellence, will make us the preferred partner for all real estate needs. We aspire to continuously improve and expand our services, creating a brighter and more promising tomorrow in the world of real estate.
                </p>
                </div>
                <div className='ml-20 mb-20'>
                   <h1 className='text-sky-300 text-xl capitalize mb-2'>our mission</h1>
                   <p className='max-w-[550px]'>Sky Real Estate's mission is to empower individuals and communities by offering comprehensive real estate services that transform lives. We pledge to serve with integrity, transparency, and unwavering professionalism. Our mission is to simplify the real estate journey for our clients, making it enjoyable, profitable, and efficient. We are committed to helping our clients achieve their real estate goals, whether it's finding their dream home, securing a sound investment, or facilitating the sale of their property. Our mission is to be your trusted real estate partner at every stage of your property venture.
                </p>
                </div>
                     
                
            </div>
        </div>
    );
}
export default Aboutus;