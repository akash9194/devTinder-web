import React from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import axios from "axios";
import Usercard from "./Usercard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed?.length) return;

    try {
      const resp = await axios.get(BASE_URL + "feed", {
        withCredentials: true,
      });
      dispatch(addFeed(resp.data));
    } catch (error) {
      // Error login may be redirect to error page
    }
  };

  useEffect(() => {
    getFeed();
  }, []);
  return feed && (<div className="flex justify-center my-10">
    <Usercard user={feed[0]}></Usercard>
  </div>);
};

export default Feed;
