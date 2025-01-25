import React, { useState } from "react";

function Card({ role, techStack, jobDescriptionLink, applyNowText }) {
    return (
        <div className="card h-90 w-72 bg-transparent shadow shadow-[#27272a] shadow-md rounded-xl border-1px border border-[#27272a] p-2">
            <div className="min-h-[80%] max-w-full bg-transparent rounded-lg p-2 p-4 flex flex-col justify-between">
                {/* Date of posting */}
                <div className="date w-fit rounded-2xl px-3 py-1 bg-transparent flex justify-start items-center text-white font-bold">
                    {/* {role.date} */}
                    {role.type}
                </div>
                {/* Role */}
                <div className="role text-2xl text-white">
                    <h1 className="font-bold">{role.title}</h1>
                    {/* <p className="text-sm text-white">{role.type}</p> */}
                </div>
                {/* Tech Stack */}
                <div className="text-white flex gap-2 flex-wrap">
                    {techStack.map((tech, techIndex) => (
                        <div key={techIndex} className="border-1px w-fit border border-[#27272a] text-sm rounded-2xl px-3 py-1">
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
                <div className=" border-t-[1px] border-[#27272a]" ></div>
            <div className="h-[20%] w-full p-2">
                <div className="h-full w-full flex justify-between items-center">
                    {/* Job Description Link */}
                    <a href={jobDescriptionLink} className="text-sm text-white underline focus:underline-none">
                        Job Description
                    </a>
                    {/* Apply Now Button */}
                    <button className="bg-[#ab20fd] rounded-4xl p-2 pb-3 flex hover:bg-purple-600 hover:cursor-pointer">
                        {applyNowText}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;

// function Card() {
// {RoleData.map((role, index) => (
//                     <div key={index} className="card h-84 w-72 bg-white rounded-xl border-1px border border-[#27272a] p-2">
//                         <div className="min-h-[80%] max-w-full bg-[#dabcf6] rounded-lg p-2 flex flex-col justify-between">
//                             {/* Date of posting */}
//                             <div className="date w-fit rounded-2xl px-3 py-1 bg-white flex justify-start items-center text-black font-bold">
//                                 {role.date}
//                             </div>
//                             {/* Role */}
//                             <div className="role text-2xl text-black">
//                                 <h1 className="font-bold">{role.role.title}</h1>
//                                 <p className="text-sm text-zinc-700">{role.role.type}</p>
//                             </div>
//                             {/* Tech Stack */}
//                             <div className="text-black flex gap-2 flex-wrap">
//                                 {role.techStack.map((tech, techIndex) => (
//                                     <div key={techIndex} className="border-1px w-fit border border-[#27272a] text-sm rounded-2xl px-3 py-1">
//                                         {tech}
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                         <div className="h-[20%] w-full p-2">
//                             <div className="h-full w-full flex justify-between items-center">
//                                 {/* Job Description Link */}
//                                 <a href={role.jobDescriptionLink} className="text-sm text-zinc-700 underline focus:underline-none">Job Description</a>
//                                 {/* Apply Now Button */}
//                                 <button className="bg-green-500 rounded-4xl p-2 flex items-center hover:bg-green-600 hover:cursor-pointer">
//                                     {role.applyNowText}
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
// }