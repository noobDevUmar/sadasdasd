"use client"
// import React from 'react'
// import { useState, useEffect } from "react";
// import Link from 'next/link';
// import Image from 'next/image';

// import googlemap from "@/assets/gmap.jpg"
// import projectsData from '@/clientData/projectsData';

// const WisalGarden = () => {

//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);
//   const handleVideoPlay = () => {
//     setIsVideoPlaying(true);
//   };



//   return (
//   <>

//        {projectsData.map((item, index) => (
//     <div className={styles.body} id='' >

    
//       {/* Top  */}
//       <div className=" h-[300px] xl:h-[500px] md:h-[450px] w-full relative ">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `url("https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")`,
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "auto",
//           }}
//         ></div>

//         <div
//           className="absolute inset-0 bg-black opacity-50"
//           style={{ filter: "brightness(0.5)" }}
//         ></div>


//         <div className="flex flex-col items-center justify-center h-full relative">
//           <h1 className="text-white m-0 text-2xl font-light ">PROJECT</h1>
//           <h2 className="text-center text-white text-5xl font-bold font-inconsolata tracking-[4px]">
//             {" "}
//            {item.name}
//           </h2>
//         </div>
//       </div>



//       {/*  */}
     

    
//       <div className="mx-8 md:mx-16 mx-auto max-w-[100vw]">
//       {item.openingvideo && (
//         <div>
//           <h1 className="font-light text-3xl md:text-4xl lg:text-5xl xl:text-5xl mt-16 text-center mt-4 text-gray-700 tracking-[2px] underline decoration-orange-500/80 mb-8 ">
//             {" "}
//             Grand Opening{" "}
//           </h1>
//           <video
//             autoPlay
//             muted
//             onPlay={() => setIsVideoPlaying(true)}
//             loop
//             className="h-[100vh] w-full object-cover -z-1"
//             style={{ filter: "brightness(50%)" }} // Adjust the brightness value as needed
//           >
//             <source src={item.openingvideo} type="video/mp4" />
//           </video>
//         </div>
//       )}
//         <hr className="pt-20 mt-10 opacity-70 innerWidth" />

//         {/* Location */}

//         <div className="px-12 lg:flex md:flex lg:px-16 xl:px-16 xl:mx-auto gap-[30px] mt-10 bg-gray-100 shadow-lg rounded-lg">
//           {/* Content */}
//           <div className="mt-5 md:mt-24 mx-5 md:w-1/2 lg:w-1/2 items-center flex-1">
//             <h2 className="text-5xl text-orange-600 text-center tracking-[5px] font-lora">
//               {" "}
//               Location{" "}
//             </h2>
//             {/* <h2 className="text-3xl text-gray-800 text-center font-bold font-lora tracking-[2px]">
//             {" "}
//             Shahabul-Islam Sahil{" "}
//           </h2> */}

//             <p>
//              {item.locationdescription} <br />
//               {/* <span className="font-bold"> 5 minutes From Motorway </span> */}
//             </p>

//             <Link
//               href={item.location}
//               className=" flex items-center justify-center"
//             >
//               <button className="text-white text-lg flex bg-blue-600 mt-10 hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-7 py-2.5  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
//                 {" "}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={1.5}
//                   stroke="currentColor"
//                   className="w-4 h-4"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//                   />
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//                   />
//                 </svg>
//                 Get Directions{" "}
//               </button>
//             </Link>
//           </div>

//           <div className="items-center md:ml-10 py-10 flex mx-auto md:w-1/2 lg:w-1/3 justify-center flex-1 relative ">
//             {/* <iframe
//               src={mapSrc}
//               width="100%"
//               height="400px"
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title="Google Map"
//             ></iframe> */}
//             <Image src={googlemap} width={800 } height={900} className='relative'/>
//             <Link
//               href={item.location}
//               className=" flex items-center justify-center"
//             >
//               <button className="text-white hidden sm:block absolute top-[50%] left-[35%] text-lg  bg-gray-600  hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-7 py-2.5  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
//                 {" "}
//                 Open Map{" "}
//               </button>
//             </Link>
//           </div>
//         </div>

//         <hr className="pt-20 mt-10 opacity-70 innerWidth" />



// {/* Schedule */}
//         <div className="mt-5 md:mt-24 mx-5  items-center bg-gray-100 shadow-lg rounded-lg">
//           <h2 className="text-5xl text-orange-600 text-center tracking-[5px] font-lora">
//             {" "}
//             SCHEDULE{" "}
//           </h2>

//           <div className='w-full items-center flex justify-center '>
//             <div className="relative w-full h-[500px] md:w-[500px]">
//               <Image src={item.schedule} fill={true} />
//             {item.schedule2 && ( 
//             <div> 
//                 <Image src={item.schedule2} fill={true} />
//             </div>)}
//             </div>
//           </div>


//         </div>
//       </div>
       
 
//     </div>
//  ))}
//    </>
//   );
// }

// export default WisalGarden