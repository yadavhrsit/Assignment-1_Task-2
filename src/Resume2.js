import React from 'react'

function Resume2() {
    return (
        <div className="bg-white min-h-full max-w-6xl font-semibold flex items-center flex-col py-5 ml-auto mr-auto" >
            <p className='text text-5xl capitalize'>Name Surname</p>
            <p className='text text-3xl py-2 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 min-w-full mt-3 font-medium capitalize text-white'>Professional Title</p>
            <div className='min-h-full min-w-full flex justify-between py-3 px-6 mt-3'>
                {/* left side container     */}
                <div className='w-[30%] min-h-full text-left text-xl flex flex-col gap-4'>

                    {/* Contacts Container */}
                    <div className="min-w-full font-normal">
                        <p className="text text-red-500">612-345-6789</p>
                        <p className="text text-red-500">yourname@gmail.com</p>
                        <p className="text text-red-500">New York,NY</p>
                        <p className="text text-red-500">linkedin.com/name</p>
                        <div className="h-0.5 w-full rounded-md bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 p-1 mt-2" />
                    </div>

                    {/* Summary Container */}
                    <div className="min-w-full">
                        <p className="text text-3xl font-bold uppercase">summary</p>
                        <div className="min-w-full mt-2">
                            <p className="text italic font-normal">
                                Your summary goes here. It's the last stage in the resume writing process,
                                so pick it up in the end. Focus more on what value you can provide, instead
                                of what you are looking for. Limit it to 2-3 lines max.
                            </p>
                        </div>
                        <div className="h-0.5 w-full rounded-md bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 p-1 mt-2" />
                    </div>

                    {/* key skills container */}
                    <div className="min-w-full">
                        <p className="text text-3xl font-bold uppercase">key skills</p>
                        <div className="min-w-full mt-2 font-normal">
                            <p className="text capitalize">market research</p>
                            <p className="text capitalize">social media strategy</p>
                            <p className="text capitalize">social media analytics</p>
                            <p className="text capitalize">social media content creation & curation</p>
                            <p className="text capitalize">marketing collateral</p>
                            <p className="text capitalize">keyword research</p>
                            <p className="text capitalize">search engine optimization</p>
                            <p className="text capitalize">client servicing</p>
                            <p className="text capitalize">blog writing</p>
                            <p className="text capitalize">digital marketing</p>
                            <p className="text capitalize">website content</p>
                            <p className="text capitalize">proofreading</p>
                            <p className="text capitalize">content management & editing</p>
                        </div>
                        <div className="h-0.5 w-full rounded-md bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 p-1 mt-2" />
                    </div>

                    {/* technical skills container */}
                    <div className="min-w-full">
                        <p className="text text-3xl font-bold uppercase">technical skills</p>
                        <div className="min-w-full mt-2 font-normal px-5">
                            <ul className='list-disc'>
                                <li>
                                    <p className='text font-medium inline'>Languages: </p>
                                    <p className='text font-normal inline'>VB6, SQL, Web Services - C#,C,C++,Java,Perl</p>
                                </li>
                                <li>
                                    <p className='text font-medium inline capitalize'>operating systems: </p>
                                    <p className='text font-normal inline'>Windwos (XP NT 3.x.4.0,2000 2003) and UNIX</p>
                                </li>
                                <li>
                                    <p className='text font-medium inline capitalize'>databases: </p>
                                    <p className='text font-normal inline'>MS SQL Server (2008, 2005, 200, 7.0, 6.5, 6.0), MS Access, FoxPro, DTS, DB2</p>
                                </li>
                            </ul>
                        </div>
                        <div className="h-0.5 w-full rounded-md bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 p-1 mt-2" />
                    </div>
                </div>


                {/* right side container */}
                <div className='w-[62%] min-h-full text-left text-xl flex flex-col gap-4'>
                    {/* Professional experience Container */}
                    <div className="min-w-full">
                        <p className="text text-3xl font-bold uppercase">professional experience</p>
                        <div className="min-w-full mt-2">
                            <div className="min-w-full flex justify-between mt-2">
                                <p className="text text-2xl font-bold capitalize">official designation</p>
                                <p className="text text-2xl font-normal capitalize">jun '19 - sep '19</p>
                            </div>
                            <div className="min-w-full flex justify-between mt-2">
                                <p className="text text-2xl font-bold capitalize">company name</p>
                                <p className="text text-2xl font-normal capitalize ">location</p>
                            </div>
                            <p className="text text-base italic font-normal mt-2">
                                Enter a one-liner description of the company where
                                you were working with figures around revenue,
                                geographic presence, no. of clients etc.
                            </p>
                            <ul className='list-disc font-normal px-5'>
                                <li>
                                    <p className='text'>Use one-liner points to present the details of your part-time/professional experinece</p>
                                </li>
                                <li>
                                    <p className='text'>Bold keywords and phrases where you would liek to draw the recruiter's attention.</p>
                                </li>
                                <li>
                                    <p className='text'>Use action verbs to start off your points, and achievement figures (ballpark/appx figures will work as well) to demonstrate the extent of your contributions</p>
                                </li>
                                <li>
                                    <p className='text'>instead of writing all your one-liner points together, group similar points under unique subheadings.</p>
                                </li>
                            </ul>
                        </div>
                        <div className="min-w-full mt-2">
                            <div className="min-w-full flex justify-between mt-2">
                                <p className="text text-2xl font-bold capitalize">official designation</p>
                                <p className="text text-2xl font-normal capitalize">jun '19 - sep '19</p>
                            </div>
                            <div className="min-w-full flex justify-between mt-2">
                                <p className="text text-2xl font-bold capitalize">company name</p>
                                <p className="text text-2xl font-normal capitalize ">location</p>
                            </div>
                            <p className="text text-base italic font-normal mt-2">
                                Enter a one-liner description of the company where
                                you were working with figures around revenue,
                                geographic presence, no. of clients etc.
                            </p>
                            <ul className='list-disc font-normal px-5'>
                                <li>
                                    <p className='text'>Use one-liner points to present the details of your part-time/professional experinece</p>
                                </li>
                                <li>
                                    <p className='text'>Bold keywords and phrases where you would liek to draw the recruiter's attention.</p>
                                </li>
                                <li>
                                    <p className='text'>Use action verbs to start off your points, and achievement figures (ballpark/appx figures will work as well) to demonstrate the extent of your contributions</p>
                                </li>
                                <li>
                                    <p className='text'>instead of writing all your one-liner points together, group similar points under unique subheadings.</p>
                                </li>
                            </ul>
                        </div>
                        <div className="h-0.5 w-full rounded-md bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 p-1 mt-2" />
                    </div>
                    {/* Internships Container */}
                    <div className="min-w-full">
                        <p className="text text-3xl font-bold uppercase">Internships</p>
                        <div className="min-w-full mt-2">
                            <div className="min-w-full flex justify-between mt-2">
                                <p className="text text-2xl font-bold capitalize">official designation</p>
                                <p className="text text-2xl font-normal capitalize">sep '18 - nov '19</p>
                            </div>
                            <div className="min-w-full flex justify-between mt-2">
                                <p className="text text-2xl font-bold capitalize">company name</p>
                                <p className="text text-2xl font-normal capitalize ">location</p>
                            </div>
                            <p className="text text-base italic font-normal mt-2">
                                Enter a one-liner description of the company where
                                you were working with figures around revenue,
                                geographic presence, no. of clients etc.
                            </p>
                        </div>
                        <div className="h-0.5 w-full rounded-md bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 p-1 mt-2" />
                    </div>
                    {/* Education Container */}
                    <div className="min-w-full">
                        <p className="text text-3xl font-bold uppercase">Education</p>
                        <div className="min-w-full mt-2">
                            <div className="min-w-full flex justify-between mt-2">
                                <p className="text text-2xl font-bold capitalize">degree with major</p>
                                <p className="text text-2xl font-normal capitalize">jun '12 - may '15</p>
                            </div>
                            <div className="min-w-full flex justify-between mt-2">
                                <p className="text text-2xl font-bold capitalize">enter the name of the educational insitution</p>
                                <p className="text text-2xl font-normal capitalize ">enter location (with state co institutiuon)</p>
                            </div>
                            <p className="text text-base italic font-normal mt-2">
                                Enter a one-liner description of the company where
                                you were working with figures around revenue,
                                geographic presence, no. of clients etc.
                            </p>
                        </div>
                        <ul className='list-disc font-normal px-5'>
                            <li>
                                <p className='text'>Enter your GPA if it's higher than 3/4.</p>
                            </li>
                            <li>
                                <p className='text'>Enter your key course modules if
                                    they're relevant to the profiles you are targeting -
                                    just the name of the coursework/modules in multiple
                                    one-liner bullet points.</p>
                            </li>
                        </ul>
                        <div className="h-0.5 w-full rounded-md bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 p-1 mt-2" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Resume2