import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { AiOutlineArrowRight, AiOutlineCalendar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const LatestBlog = () => {
    const [latest, setLatest] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/blogsLatest')
            .then(res => res.json())
            .then(data => {
               
               setLatest(data);
               setLoading(false)
            })
            .catch(error => {
                console.log(error);
            })
    }, [])
    console.log(latest);
    return (
        <div className='mt-10'>
            <h1 className="text-3xl font-serif font-medium my-4">Latest Blogs</h1>
            <div className="">
                {
                   latest?.map(latestData => <>
                        <div className="border-2 p-2 mb-3 grid grid-cols-2" key={latestData._id}>
                            <div className="">
                                <img className="h-32 w-[300px] object-cover object-center mt-3" src={latestData.image} alt="" />
                            </div>
                            <div className="p-2">
                                <h2 className="text-lg font-serif font-normal">{latestData.title}</h2>
                                <div className="flex">
                                    <button className="text-lg mb-2 "><AiOutlineCalendar /></button>
                                    <p className="mb-2 text-sm">{latestData?.date}</p>
                                </div>
                                <div className="flex ms-0 lg:ms-40 text-red-600">
                                    <Link to={`/blogDetails/${latestData._id}`}><p >View</p></Link>
                                    <AiOutlineArrowRight className="mt-1" />
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default LatestBlog;