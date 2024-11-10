import React, { useState } from "react";
import usericon from "/usericon.png"


const CreatePost = () => {
  const [postContent, setPostContent] = useState("");

  const handlePost = () => {
    if (postContent.trim()) {
      console.log("Post content:", postContent);
      setPostContent("");
    } else {
      alert("Please write something before posting.");
    }
  };

  return (
    <div className="border border-gray-300 rounded-lg p-4 max-w-md mx-auto">
      <div className="flex justify-end mb-2">
        <img
          src={usericon}
          alt="profile"
          className="w-10 h-10 rounded-full mr-auto"
        />
      </div>

      <textarea
        className="w-full p-2 border border-gray-300 rounded-md resize-none mb-2"
        rows="4"
        placeholder="What's happening?"
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
      ></textarea>

      <hr className="my-2" />

      <div className="flex justify-end mt-2">
        <button
          onClick={handlePost}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-200"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
