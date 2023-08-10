import React from 'react'
import { data2 } from './data';
import { parseISO, format } from 'date-fns';
function Resume() {
    function formatDate(inputDate) {
        const date = parseISO(inputDate);
        const formattedDate = format(date, "MMM ''yy");
        return formattedDate;
    }
    return (
        <div className="bg-white min-h-full max-w-6xl font-semibold flex items-center flex-col py-5 ml-auto mr-auto" >
            <p className='text text-5xl capitalize'>{data2.first_name} {data2.last_name}</p>
            <p className='text text-xl md:text-2xl lg:text-3xl xl:text-4xl py-2 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 min-w-full mt-3 font-medium capitalize text-white'>{data2.profession}</p>
            <div className='min-h-full min-w-full flex justify-between py-3 px-6 mt-3'>
                {/* left side container     */}
                <div className='w-[30%] min-h-full text-left text-xl flex flex-col gap-4'>

                    {/* Contacts Container */}
                    <div className="min-w-full font-normal text-sm md:text-lg lg:text-xl xl:text-xl">
                        <p className="text text-red-500"><i className="fa-solid fa-phone mr-1"></i> {data2.phone_number}</p>
                        <p className="text text-red-500"><i className="fa-solid fa-envelope mr-1"></i> {data2.email}</p>
                        <p className="text text-red-500"><i className="fa-solid fa-location-dot mr-1"></i> {data2.city} {data2.pincode}</p>
                        <p className="text text-red-500"><i className="fa-solid fa-earth-americas mr-1"> </i> {data2.country}</p>
                        <p className="text text-red-500"><i className="fa-brands fa-linkedin mr-1"></i> {data2.linkedin}</p>
                        <p className="text text-red-500"><i className="fa-brands fa-twitter mr-1"></i> {data2.twitter}</p>
                        <p className="text text-red-500"><i className="fa-brands fa-github "></i> {data2.github}</p>
                        <div className="h-0.5 w-full rounded-md bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 p-1 mt-2" />
                    </div>

                    {/* Summary Container */}
                    <div className="min-w-full">
                        <p className="text text-3xl font-bold uppercase">summary</p>
                        <div className="min-w-full mt-2">
                            <p className="text italic font-normal text-sm md:text-lg lg:text-xl">
                                {data2.summary}
                            </p>
                        </div>
                        <div className="h-0.5 w-full rounded-md bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 p-1 mt-2" />
                    </div>

                    {/* key skills container */}
                    <div className="min-w-full">
                        <p className="text text-xl md:text-2xl lg:text-3xl font-bold uppercase">key skills</p>
                        <div className="min-w-full mt-2 font-normal">
                            <p className="text text-sm md:text-lg lg:text-xl capitalize">{data2.skills[0].top_technical_skills}</p>
                        </div>
                        <div className="h-0.5 w-full rounded-md bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 p-1 mt-2" />
                    </div>

                    {/* technical skills container */}
                    <div className="min-w-full">
                        <p className="text text-xl md:text-2xl lg:text-3xl font-bold uppercase">technical skills</p>
                        <div className="min-w-full mt-2 font-normal">
                            <p className="text text-sm md:text-lg lg:text-xl capitalize">{data2.skills[0].technical_skills}</p>
                        </div>
                        <div className="h-0.5 w-full rounded-md bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 p-1 mt-2" />
                    </div>
                    {/* softwares skills container */}
                    <div className="min-w-full">
                        <p className="text text-xl md:text-2xl lg:text-3xl font-bold uppercase">softwares</p>
                        <div className="min-w-full mt-2 font-normal">
                            <p className="text text-sm md:text-lg lg:text-xl capitalize">{data2.skills[0].softwares}</p>
                        </div>
                        <div className="h-0.5 w-full rounded-md bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 p-1 mt-2" />
                    </div>
                    {/* non-technical skills container */}
                    <div className="min-w-full">
                        <p className="text text-xl md:text-2xl lg:text-3xl font-bold uppercase">non-technical skills</p>
                        <div className="min-w-full mt-2 font-normal">
                            <p className="text text-sm md:text-lg lg:text-xl capitalize">{data2.skills[0].non_technical_skills}</p>
                        </div>
                        <div className="h-0.5 w-full rounded-md bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 p-1 mt-2" />
                    </div>

                </div>





                {/* right side container */}
                <div className='w-[62%] min-h-full text-left text-xl flex flex-col gap-4'>
                    {/* Professional experience Container */}
                    <div className="min-w-full">
                        <p className="text text-xl md:text-2xl lg:text-3xl font-bold uppercase">professional experience</p><>
                            {
                                data2.work_experience.map((experince) => (
                                    <div className="min-w-full mt-2" key={experince.work_id}>
                                        <div className="min-w-full flex justify-between mt-2">
                                            <p className="text text-xl md:text-2xl lg:text-2xl font-bold capitalize">{experince.job_title}</p>
                                            <p className="text text-lg md:text-xl lg:text-xl font-normal capitalize text-right">{formatDate(experince.start_date)} - {formatDate(experince.end_date)}</p>
                                        </div>
                                        <div className="min-w-full flex justify-between mt-2">
                                            <p className="text text-xl md:text-2xl lg:text-2xl font-bold capitalize">{experince.company_name}</p>
                                            <p className="text text-lg md:text-xl lg:text-xl font-normal capitalize text-right">{experince.company_location}</p>
                                        </div>
                                        <p className="text text-base italic font-normal mt-2">
                                            {experince.Description}
                                        </p>
                                    </div>
                                ))
                            }
                        </>

                        <div className="h-0.5 w-full rounded-md bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 p-1 mt-2" />
                    </div>

                    {/* Education Container */}
                    <div className="min-w-full">
                        <p className="text text-xl md:text-2xl lg:text-3xl font-bold uppercase">Education</p>
                        {
                            data2.education.map((edu) => (
                                <div className="min-w-full mt-2" key={edu.education_id}>
                                    <div className="min-w-full flex justify-between mt-2">
                                        <p className="text text-xl md:text-2xl lg:text-2xl font-bold capitalize">{edu.degree} in {edu.field_of_study}</p>
                                        <p className="text text-lg md:text-xl lg:text-xl font-normal capitalize text-right">{formatDate(edu.degree_start_date)} - {formatDate(edu.degree_end_date)}</p>
                                    </div>
                                    <div className="min-w-full flex justify-between mt-2">
                                        <p className="text text-xl md:text-2xl lg:text-2xl font-bold capitalize">{edu.school_name}</p>
                                        <p className="text text-lg md:text-xl lg:text-xl font-normal capitalize text-right">{edu.school_location}</p>
                                    </div>
                                    <p className="text text-base italic font-normal mt-2">

                                    </p>
                                </div>
                            ))
                        }
                        <div className="h-0.5 w-full rounded-md bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 p-1 mt-2" />
                    </div>
                    {/* Certificates Container */}
                    <div className="min-w-full">
                        <p className="text text-xl md:text-2xl lg:text-3xl font-bold uppercase">Certificates</p>
                        {
                            data2.certificates.map((certi) => (
                                <div className="min-w-full mt-2" key={certi.certi_id}>
                                    <div className="min-w-full flex justify-between mt-2">
                                        <p className="text text-xl md:text-2xl lg:text-2xl font-bold capitalize">{certi.certi_name}</p>
                                        <p className="text text-lg md:text-xl lg:text-xl font-normal capitalize text-right">{formatDate(certi.certi_start_date)} - {formatDate(certi.certi_end_date)}</p>
                                    </div>
                                    <p className="text text-xl font-normal mt-2">
                                        <a href={certi.certi_link}>{certi.certi_link}</a>
                                    </p>
                                </div>
                            ))
                        }
                        <div className="h-0.5 w-full rounded-md bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 p-1 mt-2" />
                    </div>
                    {/* Projects Container */}
                    <div className="min-w-full">
                        <p className="text text-xl md:text-2xl lg:text-3xl font-bold uppercase">Projects</p>
                        {
                            data2.projects.map((project) => (
                                <div className="min-w-full mt-2" key={project.project_id}>
                                    <div className="min-w-full mt-2">
                                        <p className="text text-xl md:text-2xl lg:text-2xl font-bold capitalize">{project.project_name}</p>
                                        <p className="text text-lg md:text-xl lg:text-xl font-normal capitalize"><a href={project.project_link}>{project.project_link}</a></p>
                                    </div>
                                    <p className="text text-xl font-normal mt-2">
                                        {project.description}
                                    </p>
                                </div>
                            ))
                        }
                        <div className="h-0.5 w-full rounded-md bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 p-1 mt-2" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Resume