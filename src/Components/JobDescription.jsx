import React from 'react';
import { useParams } from 'react-router-dom';
import RoleData from '../JSON/RoleData.json';
import NavBar from './NavBar';

const JobDescription = () => {
    const { jobId } = useParams();

    const role = RoleData[jobId];

    if (!role) {
        return <div className='text-3xl font-bold bg-black text-white min-h-screen flex justify-center items-center min-w-screen' >Job not found</div>;
    }

    return (
        <>
            <div className="job_desc min-h-screen min-w-screen bg-black text-white p-4">
                <div>
                    <NavBar />
                </div>
                <div className='h-full w-full px-28'>
                    <div>
                        <div className="job-description-page px-48 mt-16 py-5">
                            <div className='flex justify-between items-center'>
                                <h1 className='text-[3rem] font-bold text-[#ab20fd]' >{role.role.title}</h1>
                                <button className="bg-[#ab20fd] rounded-2xl px-16 py-2 text-center flex justify-center items-center lg:pb-3 flex hover:bg-purple-600 hover:cursor-pointer">
                                    {/* {applyNowText} */} Apply Now
                                </button>
                            </div>
                            <p className="text-[#a1a1aa] text-sm"><strong>Type:</strong> {role.role.type}</p>
                            <p className="text-[#a1a1aa] text-sm"><strong>Posting Date:</strong> {role.date}</p>
                        </div>
                    </div>
                    <div className='border-b-[1px] border-zinc-700 px-60 mt-5'></div>

                    <div className='px-48 mt-14 py-5'>
                        <div className='text-[#a1a1aa] text-sm'>
                            <p><strong className='text-[#ab20fd] text-lg'>Tech Stack:</strong> <br /> {role.techStack.join(', ')}</p>
                        </div>
                        <br />
                        <br />
                        <div className='text-[#a1a1aa] text-sm'>
                            <p><strong className='text-[#ab20fd] text-lg'>Description:</strong> <br /> {role.jobDescription} </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default JobDescription;


{/* <div className="job-description-page">
      <h1>{role.role.title}</h1>
      <p><strong>Type:</strong> {role.role.type}</p>
      <p><strong>Date:</strong> {role.date}</p>
      <p><strong>Tech Stack:</strong> {role.techStack.join(', ')}</p>
      <p><strong>Description:</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, sint libero molestiae, cum quibusdam, repellat numquam rem modi laudantium cumque nesciunt aliquid quasi neque repellendus. </p>
      You can add more details about the job
    </div> */}