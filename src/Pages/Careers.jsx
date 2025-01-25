import React, { useState } from "react";
import Card from "../Components/Card";
import RoleData from "../JSON/RoleData.json";

function Careers() {
    return (
        <div className="min-h-screen min-w-screen bg-black text-white py-3 px-5">
            <div className="h-full w-full bg-black">
                {/* Navigation bar */}
                <div>
                    <div className="flex justify-between mb-5">
                        <h1 className="text-2xl font-bold">Careers</h1>
                        <div className="navigate flex gap-5">
                            <a href="#">Home</a>
                            <a href="#">Home</a>
                            <a href="#">Home</a>
                        </div>
                    </div>
                </div>
                {/* Job Cards */}
                <div className="flex flex-wrap lg:justify-center justify-center gap-5 lg:px-60">
                    {/* {RoleData.map((role, index) => (
                        <div key={index} className="card h-84 w-72 bg-white rounded-xl border-1px border border-[#27272a] p-2">
                            <div className="min-h-[80%] max-w-full bg-[#dabcf6] rounded-lg p-2 flex flex-col justify-between">
                                Date of posting
                                <div className="date w-fit rounded-2xl px-3 py-1 bg-white flex justify-start items-center text-black font-bold">
                                    {role.date}
                                </div>
                                Role
                                <div className="role text-2xl text-black">
                                    <h1 className="font-bold">{role.role.title}</h1>
                                    <p className="text-sm text-zinc-700">{role.role.type}</p>
                                </div>
                                Tech Stack
                                <div className="text-black flex gap-2 flex-wrap">
                                    {role.techStack.map((tech, techIndex) => (
                                        <div key={techIndex} className="border-1px w-fit border border-[#27272a] text-sm rounded-2xl px-3 py-1">
                                            {tech}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="h-[20%] w-full p-2">
                                <div className="h-full w-full flex justify-between items-center">
                                    Job Description Link
                                    <a href={role.jobDescriptionLink} className="text-sm text-zinc-700 underline focus:underline-none">Job Description</a>
                                    Apply Now Button
                                    <button className="bg-green-500 rounded-4xl p-2 flex items-center hover:bg-green-600 hover:cursor-pointer">
                                        {role.applyNowText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))} */}


                    {RoleData.map((role, index) => (
                        <Card
                            key={index}
                            role={{
                                date: role.date,
                                title: role.role.title,
                                type: role.role.type,
                            }}
                            techStack={role.techStack}
                            jobDescriptionLink={role.jobDescriptionLink}
                            applyNowText={role.applyNowText}
                        />
                    ))}


                </div>
            </div>
        </div>
    );
}

export default Careers;
