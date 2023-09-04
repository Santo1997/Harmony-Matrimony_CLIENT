import { useContext, useEffect, useState } from "react";
import Pending from "./Pending";
import { CiLight } from "react-icons/ci";
import { AuthContext } from "../../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import "../../../../style.css";
import FooterDashboard from "../FooterDashboard";
import './ManageUser.css'
import Approve from "./Approve";
import Denied from "./Denied";
const MangeUsersX = () => {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://harmony-matrimony-server.vercel.app/authority")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [users]);

  if (loading) {
    return (
      <div className="flex justify-center h-screen items-center ">
        <span className="loading loading-bars loading-lg scale-150"></span>
      </div>
    );
  }
  const handleMakeApprove = (id) => {
    fetch(`https://harmony-matrimony-server.vercel.app/makeApprove/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: `He is approved now!`,
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        }
      });
  };
  const handleMakeDenied = (id) => {
    console.log(id);
    fetch(`https://harmony-matrimony-server.vercel.app/makeDenied/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: `He is Denied now!`,
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        }
      });
  };
  const pendingUsers = users.filter(user => user.status === 'pending');
  const approvedUsers = users.filter(user => user.status === 'approved');
  const deniedUsers = users.filter(user => user.status === 'denied');
  return (
    <div className="relative overflow-x-auto  rounded-2xl px-6 w-[75%] mx-auto py-6 my-10 cards ">
      {/* Input field */}
      {/* <div className="flex items-center justify-between py-4 bg-white w-full">
        <label htmlFor="table-search" className="sr-only">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="text" id="table-search-users" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search htmlFor users" />
        </div>
      </div> */}
      {/* pending table */}
      <h1 className="text-black text-4xl my-8 text-center font-serif">Pending Users</h1>
      <table className="table w-full text-sm text-left text-gray-500 overflow-hidden card">
        {/* This is table HEAD */}

        <thead className="text-sm text-gray-700 uppercase bg-gray-50 ">
          <tr className="">
            <th></th>
            <th></th>
            <th scope="col" className="">
              Name
            </th>
            <th scope="col" className="">
             Pending
            </th>
            <th scope="col" className=" ">
              Action
            </th>
          </tr>
        </thead>

        {/* This is table body, pending users goes here */}

        <tbody className="">
          {pendingUsers.map((user, index) => (
            <Pending
              key={user._id}
              user={user}
              index={index}
              handleMakeApprove={() => handleMakeApprove(user._id)}
              handleMakeDenied={() => handleMakeDenied(user._id)}
            />
          ))}
        </tbody>
      </table>

      {/* Approved Table */}
      <h1 className="text-black text-4xl my-8 text-center font-serif">Approve Users</h1>
      <table className="table w-full text-sm text-left text-gray-500 overflow-hidden card mt-5">
        {/* This is table HEAD */}

        <thead className="text-sm text-gray-700 uppercase bg-gray-50 ">
          <tr className="">
            <th></th>
            <th></th>
            <th scope="col" className="">
              Name
            </th>
            <th scope="col" className="">
             Approve
            </th>
            <th scope="col" className=" ">
              Action
            </th>
          </tr>
        </thead>

        {/* This is table body, pending users goes here */}

        <tbody className="">
          {approvedUsers.map((user, index) => (
            <Approve
              key={user._id}
              user={user}
              index={index}
              handleMakeDenied={() => handleMakeDenied(user._id)}
            />
          ))}
        </tbody>
      </table>

      {/* Denied User Table */}
      <h1 className="text-black text-4xl my-8 text-center font-serif">Denied Users</h1>
      <table className="table w-full text-sm text-left text-gray-500 overflow-hidden card mt-5">
        {/* This is table HEAD */}

        <thead className="text-sm text-gray-700 uppercase bg-gray-50 ">
          <tr className="">
            <th></th>
            <th></th>
            <th scope="col" className="">
              Name
            </th>
            <th scope="col" className="">
             Denied
            </th>
            <th scope="col" className=" ">
              Action
            </th>
          </tr>
        </thead>

        {/* This is table body, pending users goes here */}

        <tbody className="">
          {deniedUsers.map((user, index) => (
            <Denied
              key={user._id}
              user={user}
              index={index}
              handleMakeDenied={() => handleMakeDenied(user._id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default MangeUsersX;
