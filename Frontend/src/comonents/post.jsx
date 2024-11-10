import React from "react";
import usericon from "/usericon.png"
import bin from "../assets/bin.png"

const PostComponent = ({ username, content, likes, time, showDelete}) => {

    return (
        <div className="border border-gray-300 rounded-lg p-4 max-w-md mx-auto mb-4">
            <div className="flex items-center mb-3">
                <img
                    src={usericon}
                    alt="profile"
                    className="w-10 h-10 rounded-full mr-3"
                />
                <span className="font-semibold text-gray-800 text-lg">{username}</span>
            </div>
            <div className="text-gray-700 text-sm mb-3">
                <p>{content}</p>
            </div>
            <div className="flex justify-between items-center text-gray-600 text-sm">
                <span className="flex items-center space-x-1 text-blue-500">
                    <span>👍</span>
                    <span className="text-[#26a7de]">{likes}</span>
                </span>
                <span className="text-gray-500">{new Date(time).toDateString()}</span>
            </div>
            {showDelete && (
                <div className="mt-2 flex items-center">
                    <hr className="w-full" />
                    <img
                        src={bin}
                        alt="delete"
                        className="w-7 h-7 rounded-full mt-[1px] ml-auto"
                    />
                </div>
            )}

        </div>
    );
};

export default PostComponent;


{/* <PostComponent
username="John Doe"
content="This is a sample tweet content."
likes={120}
time="2018-10-25T16:52:27.724Z"
showDelete={true}
/> */}