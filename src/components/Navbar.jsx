import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";
import { removeFeed } from "../utils/feedSlice";

const Navbar = () => {
  const user = useSelector(store => store?.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () =>{
    try {
        const res = await axios.post(
          BASE_URL+ "logout", {}, {withCredentials: true}
        );
        dispatch(removeUser());
        dispatch(removeFeed())
        return navigate("/login");

    } catch (error) {
      // Error login may be redirect to error page
    }
  }

  return (
    <div className="navbar bg-base-300 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl"> Dev Tinder</Link>
      </div>
      {user && <div className="flex gap-2">
          <div className="form-control my-2">Welcome, {user.firstName}</div>

        <div className="dropdown dropdown-end mx-5 flex ">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="User photo"
                src={user.photourl}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/profile" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link to="/connections" className="justify-between">
                Connections
              </Link>
            </li>
             <li>
              <Link to="/requests" className="justify-between">
                Connection Requests
              </Link>
            </li>
            <li>
              <a onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
      </div>}
    </div>
  );
};

export default Navbar;
