import React from 'react'
 
import { FaHome } from 'react-icons/fa';
import { TiLocation } from 'react-icons/ti';
import image from '../assets/img/sidekix-media-0sDzRgrN_pI-unsplash.jpg'
import image1 from '../assets/img/Rectangle 11.png'
import image2 from '../assets/img/Rectangle 12.png'
import image3 from '../assets/img/Rectangle 13.png'
import image4 from '../assets/img/jon-nathon-stebbe-paydk0JcIOQ-unsplash.jpg'
import image5 from '../assets/img/sidekix-media-r_y2VBvEOIE-unsplash (1).jpg'
import image6 from '../assets/img/Apartment.png'
import image7 from '../assets/img/Condo.png'

const Property = () => {
  
     return (

<div> 



{/*part 1*/}

   
<div className='h-[50rem] flex'>


      <div className=' absolute z-10 w-full h-40 '>
    <img src={image} className=' w-full h-[50rem]' alt='home.jpg'/>
    </div>
    <div className='relative z-30 flex flex-col mt-52 px-96'>
      <h1 className='text-blue-700 text-[20px] px-28 '>A Vision For Your Life</h1>
<h1 className=' text-[66px] font-bold '>FIND YOUR BEST</h1>
<h1 className='text-blue-700  text-[66px] font-semibold  '>Real Estate </h1>
<p className='text-[23px] font-bold '>Looking for a spacious and modern property<br/>
 In the heart of the city<br/> Look 
  no further than this stunning real estate opportunity in our company!
  </p>
</div>
</div>

      {/*SITES*/}

<div className='mt-10 '>
  <p className='text-2xl py-10  text-center  text-blue-700'> FIND YOUR DREAM HOUSE </p>
</div>

    <div className=' mx-10 grid grid-cols-3 gap-10 '>

<div className=' h-[550px] hover:scale-105 duration-300'>
    <img src={image1} alt=''className=' h-80 w-full'  />
    
    <div className='flex gap-2 mt-6 font-bold text-2xl'><FaHome /> Residential</div>
        <br/> 
        <div className='mt-[-10px]'>
        <span className='font-bold text-blue-700  text-[23px] '>  TYPE A </span> <br/> 
        <div className='flex gap-2  text-[20px]  font-semibold'> <TiLocation />Addis Abeba/Bole</div>
        </div> 
</div>

<div className=' h-[550px]  hover:scale-105 duration-300'> 
    <img src={image2} alt='' className='h-80 w-full' />
   
    <div className='flex gap-2 mt-6 font-bold text-2xl'><FaHome /> Residential</div> 
<br/>
    <div className='mt-[-10px]'>
    <span className=' text-blue-700 font-bold text-[23px]'>TYPE B </span> <br/> 
    <div className='flex gap-2 text-[20px]  font-semibold'> <TiLocation />Addis Abeba/CMC</div> 
    </div> 
</div>

<div className='h-[550px]  hover:scale-105 duration-500'>
    <img src={image3} alt='' className='h-80 w-full'/>

    
    <div className='flex gap-2 mt-6 font-bold text-2xl'><FaHome /> Residential</div>
     <br/>
     <div className='mt-[-10px]'>
      <span className='text-blue-700 font-bold text-[23px]'>TYPE C </span> <br/> 
     <div className='flex gap-2 text-[20px]  font-semibold'> <TiLocation />Addis Abeba/Mexico</div>
      </div> 
</div>

</div>

{/*PART 3*/}

<div className='relative'>

 <div className='mt-2'> <img src={image4} alt='' className='w-screen h-96  border-2'/></div>

 <div className=' flex  flex-col absolute  bottom-0  px-72  '>

<h1 className='text-blue-600 font-semibold text-2xl '>Who We Are</h1>
<hl className='font-semibold text-3xl mt-6'>About <span className='text-blue-700 font-semibold '>Us</span></hl>

<p className='font-bold text-2xl px-4'> Sky real estate company dedicated to <br/> 
bring luxurious residential apartments <br/>
in Addise ababa,Ethiopia. our mission  <br/>
is to be leading real estate company <br/>
in Ethiopian that design and deliver  <br/>
apartments which are in great demand.
</p>

   <div className='py-3'>
   <button className='bg-blue-600 py-2 px-4 text-2xl rounded-full'>Read More</button>
</div>

</div>
</div>
{/*PART 4*/}

<div className=' mt-10 text-center '>
<h1 className='text-blue-700 text-2xl'>find your  perfect home</h1>
<h1 className='text-3xl font-bold py-2'>WE ARE HERE TO  HELP YOU </h1>
<h1 className='text-4xl font-bold text-blue-700 py-2' >WHAT ARE YOU LOOKING FOR?</h1>
</div>

{/*PART 5*/}

<div className='flex flex-col-2 mt-10 '>

  <div  className='mx-[55px]'>
  <h1 className=' px-64 text-[40px] '>Apartments 
  <img src={image6} alt=''/></h1>
  <p className='px-44 mt-4 '>We align ourselves with enlightened management, <br/>
  regarding peoples as our major assests and working<br/>
  maintaining the highest possible level of communication.</p>
  
  <div className='px-52 mt-10'>
  <button className='bg-blue-600 py-2 px-8 text-2xl rounded'>Find Apartments</button>
  </div>
</div>

  <div  className=''>
  <h1 className='px-64 text-[40px]'> Houses
  <img src={image7} alt=''/></h1>
  <p className='px-32 mt-4 '>We align ourselves with enlightened management, <br/>
  regarding peoples as our major assests and working<br/>
  maintaining the highest possible level of communication.</p>

  <div className='px-52 mt-10 '>
  <button className='bg-blue-600 py-2 px-10 text-2xl rounded'>Find Houses</button>
  </div>
  </div>

</div>

{/*PART 6*/}

<div className=' relative'>
  
<div className=' mt-24'><img src={image5} alt='' className='w-full  h-96 border-2 '/></div>

<div className='flex  flex-col absolute  bottom-0 px-80  top-2'>
<h1 className=' font-bold text-[54px] '>Let’s find a place you deserve </h1>
<div className='px-72 mt-8  '>
  <button className='bg-blue-600 py-2  px-10 text-2xl rounded'>Contact us</button>
  </div>
<p className='font-bold text-[25px] mt-4 '>
  We align ourselves with enlightened management philosophy ,<br/>
regarding peoples as our major assests and working always at<br/>
maintaining the highest possible level of communication and <br/>interpersonal relations.
</p>
</div>
</div>

{/*part 7*/}

<div className='flex px-4  mt-6 text-end  justify-between text-2xl' >
  <h1 > copy right<span className='text-blue-700 '> @ </span> Sky real estate </h1>
  <h1 className=''>Powered by sky real estste </h1>
</div>


</div>  
  );
};
export default Property;