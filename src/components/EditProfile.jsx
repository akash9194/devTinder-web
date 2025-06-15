import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Usercard from "./Usercard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [age, setAge] = useState(user?.age);
  const [gender, setGender] = useState(user?.gender);
  const [about, setAbout] = useState(user?.about);
  const [photourl, setPhotourl] = useState(user?.photourl);

  const dispatch = useDispatch();
 

  const saveProfile = async () => {
    setError("");
    try {
      const resp = await axios.patch(
        BASE_URL + "profile/edit",
        {age, gender, about, photourl },
        { withCredentials: true }
      );
      dispatch(addUser(resp.data.data));
    } catch (error) {
      setError(error?.response?.data);
    }
  };

  const [error, setError] = useState("");

  const navigate = useNavigate();
  return (
    <div className="flex justify-center my-10">
      <div className="flex justify-center mx-10">
        <div className="card bg-base-300 w-96 shadow-sm">
          <div className="card-body">
            <h2 className="card-title justify-center">Edit Profile</h2>
            <div className="my-2">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">First Name: </legend>
                <input
                  type="text"
                  value={firstName}
                  className="input"
                  placeholder="Type here"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </fieldset>
            </div>
            <div className="my-2">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Last Name:</legend>
                <input
                  type="text"
                  value={lastName}
                  className="input"
                  placeholder="Type here"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </fieldset>
            </div>
            <div className="my-2">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Age: </legend>
                <input
                  type="text"
                  value={age}
                  className="input"
                  placeholder="Type here"
                  onChange={(e) => setAge(e.target.value)}
                />
              </fieldset>
            </div>
            <div className="my-2">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">About:</legend>
                <input
                  type="text"
                  value={about}
                  className="input"
                  placeholder="Type here"
                  onChange={(e) => setAbout(e.target.value)}
                />
              </fieldset>
            </div>
            <div className="my-2">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Gender:</legend>
                <input
                  type="text"
                  value={gender}
                  className="input"
                  placeholder="Type here"
                  onChange={(e) => setGender(e.target.value)}
                />
              </fieldset>
            </div>
            <div className="my-2">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Photo URL:</legend>
                <input
                  type="text"
                  value={photourl}
                  className="input"
                  placeholder="Type here"
                  onChange={(e) => setPhotourl(e.target.value)}
                />
              </fieldset>
            </div>
            <p className="text-red-500">{error}</p>
            <div className="card-actions justify-center m-2">
              <button className="btn btn-primary" onClick={saveProfile}>Save Profile</button>
            </div>
          </div>
        </div>
      </div>
      <Usercard
        user={{ firstName, lastName, age, gender, about, photourl }}
      ></Usercard>
    </div>
  );
};

export default EditProfile;
