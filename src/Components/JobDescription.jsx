import React from 'react';
import { useParams } from 'react-router-dom';
import RoleData from '../JSON/RoleData.json';
import NavBar from './NavBar';

const JobDescription = () => {
    const { jobId } = useParams();

    const role = RoleData[jobId];

    if (!role) {
        return (
            <div className="text-3xl font-bold bg-black text-white min-h-screen flex justify-center items-center">
                Job not found
            </div>
        );
    }

    return (
        <>
            <div className="job_desc min-h-screen min-w-screen bg-black text-white p-4">
                {/* Navbar */}
                <div>
                    <NavBar />
                </div>

                <div className="h-full w-full px-4 lg:px-28">
                    {/* Job Title and Apply Button */}
                    <div className="job-description-page lg:px-24 mt-8 py-5">
                        <div className="flex flex-wrap justify-between items-center gap-5">
                            <h1 className="text-2xl lg:text-[3rem] font-bold text-[#ab20fd]">
                                {role.role.title}
                            </h1>
                            <button className="bg-[#ab20fd] rounded-2xl px-8 py-2 text-sm lg:px-16 lg:py-3 text-center flex justify-center items-center hover:bg-purple-600 hover:cursor-pointer">
                                Apply Now
                            </button>
                        </div>
                        <p className="text-[#a1a1aa] text-xs lg:text-sm lg:mt-2 mt-8 ">
                            <strong>Type:</strong> {role.role.type}
                        </p>
                        <p className="text-[#a1a1aa] text-xs lg:text-sm">
                            <strong>Posting Date:</strong> {role.date}
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="border-b-[1px] border-zinc-700 mt-5"></div>

                    {/* Tech Stack and Description */}
                    <div className="mt-10 lg:mt-14 px-14 py-5">
                        {/* Tech Stack */}
                        <div className="text-[#a1a1aa] text-xs lg:text-sm">
                            <p>
                                <strong className="text-[#ab20fd] text-base lg:text-lg">
                                    Tech Stack:
                                </strong>
                                <br />
                                {role.techStack.join(', ')}
                            </p>
                        </div>

                        {/* Description */}
                        <div className="text-[#a1a1aa] text-xs lg:text-sm mt-5">
                            <p>
                                <strong className="text-[#ab20fd] text-base lg:text-lg">
                                    Description:
                                </strong>
                                <br />
                                {role.jobDescription}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JobDescription;
