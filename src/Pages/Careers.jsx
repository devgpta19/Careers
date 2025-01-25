import React, { useState } from "react";
import Card from "../Components/Card";
import RoleData from "../JSON/RoleData.json";
import NavBar from "../Components/NavBar";

function Careers() {
    return (
        <div className="min-h-screen min-w-screen bg-black text-white py-3 px-5">
            <div className="h-full w-full bg-black">
                {/* Navigation bar */}
                <div>
                    <NavBar />
                </div>
                {/* Job Cards */}
                <div className="flex flex-wrap lg:justify-center justify-center gap-5 lg:px-60">
                    
                    {RoleData.map((role, index) => (
                        <Card
                            key={index}
                            role={{
                                date: role.date,
                                title: role.role.title,
                                type: role.role.type,
                            }}
                            techStack={role.techStack}
                            jobDescriptionLink={`/job-description/${index}`}
                            applyNowText={role.applyNowText}
                        />
                    ))}


                </div>
            </div>
        </div>
    );
}

export default Careers;
