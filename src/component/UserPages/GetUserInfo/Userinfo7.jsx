import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { verifyOptions } from "../../../Shared/Variable";
import useMyData from "../../../Hooks/useMyData";
const Image_Hosting_Token = import.meta.env.VITE_Image_Upload_Token;

const Userinfo7 = () => {

    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${Image_Hosting_Token}`;
    const { handleSubmit, reset, register } = useForm();
    const [userInfo] = useMyData();
    const navigate = useNavigate();
    const [verifyMethod, setverifyMethod] = useState({});
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const imageURL = URL.createObjectURL(file);
            setImagePreview(imageURL);
        }
    };

    const onSubmit = (data) => {
        console.log(data, data.image[0])
        const formData = new FormData();
        formData.append("image", data.image[0]);

            fetch(image_hosting_url, {
                method: "POST",
                body: formData,
            })
                .then((res) => res.json())
                .then((imgResponse) => {
                    if (imgResponse.success) {
                        const imgUrl = imgResponse.data.display_url;
                        const userinfo = { verificationImage: imgUrl, id: userInfo._id, profile_complete: 100, email: userInfo?.email, name: userInfo?.name , userImage: userInfo?.profileImage}
                        fetch('https://soulmates-server.vercel.app/update7', {
                            method: "PUT",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(userinfo)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data)
                                reset();
                                navigate("/myProfile");
                            })
                    }
    
    
                })


    }
    return (
        <div className="select-none">
            <div className="bg-green-200 h-2" style={{ width: `${70}%` }}></div>
            <form className='p-10' onSubmit={handleSubmit(onSubmit)}>

                <section className="max-w-4xl  mx-auto rounded-md shadow-xl my-10 pb-10 bg-opacity-10">
                    <div className='flex justify-center bg-[#fa604c] p-2 rounded-t-xl w-full'>
                        <h1 className="text-xl font-bold text-white capitalize">Verify your profile</h1>
                    </div>
                    <div className="mt-10 w-[80%] mx-auto">
                        <label className="text-black text-lg font-semibold" htmlFor="emailAddress">Securely verify using </label>
                        <div className='flex gap-4 flex-wrap'>
                            {verifyOptions.map((value) =>
                                <div key={value.id}>
                                    <div className='flex gap-5 mt-3'>
                                        <label className="cursor-pointer">
                                            <input type="radio" className="peer sr-only" name="religiousValue" onChange={() => setverifyMethod({ verifyMethod: value?.name })} />
                                            <div className=" max-w-xl rounded-3xl bg-gray-100 p-2 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[#51ac83]  peer-checked:ring-[#51ac83] peer-checked:ring-offset-2">
                                                <div className="flex flex-col ">
                                                    <div className="flex  gap-1 items-center justify-center px-2">
                                                        <p><span value="Gender" className="sm:text-lg ">{value?.name}</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    {verifyMethod.verifyMethod ? <><div className="flex justify-center mt-8">
                        <div className="w-[80%] md:max-w-2xl rounded-lg shadow-xl bg-gray-50">
                            <div className="m-4 ">
                                <label className="inline-block mb-2 text-gray-500">File Upload</label>
                                <div className="flex items-center justify-center w-full ">
                                    <label className="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                                        <div className="flex flex-col items-center justify-center pt-7 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400 group-hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                            </svg>
                                            <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">Attach a file</p>
                                        </div>
                                        <div className="flex flex-col items-center justify-center pt-7 ">
                                            {/* Display the image preview */}
                                            {imagePreview ? (
                                                <img src={imagePreview} alt="Preview" className="absolute -mt-28 w-20 h-20 object-contain " />
                                            ) : (
                                                <>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400 group-hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        {/* ... SVG Path ... */}
                                                    </svg>
                                                    <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">Attach a file</p>
                                                </>
                                            )}
                                        </div>
                                        <input
                                            name="photo"
                                            {...register("image", { required: true })}
                                            type="file"
                                            id="standard_success"
                                            aria-describedby="standard_success_help"
                                            className="opacity-0"
                                            placeholder=""
                                            required
                                            onChange={handleImageChange}
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div></> : <></>}
                    <div className="flex justify-center mt-10 ">
                        <button disabled={!verifyMethod.verifyMethod} type='submit' className="btn px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#fa604c] rounded-md hover:bg-[#943f34] focus:outline-none focus:bg-gray-600">Continue<BsFillArrowRightCircleFill /></button>
                    </div>
                </section>
            </form>
        </div>
    );
};

export default Userinfo7;