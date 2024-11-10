import React from "react";
import Post from "./post"; // Assuming your Post component is defined in this file
import profileImage from "/usericon.png";

const ProfilePage = ({ username, followerCount, followingCount, posts }) => {
    return (
        <div className="max-w-2xl mx-auto p-4">
            {/* Profile Header */}
            <div className="flex items-center mb-6">
                {/* Profile Image */}
                <img
                    src={profileImage}
                    alt={`${username}'s profile`}
                    className="w-24 h-24 rounded-full mr-6"
                />

                {/* User Info */}
                <div>
                    <h1 className="text-2xl font-semibold">{username}</h1>
                    <div className="flex space-x-6 mt-2 text-gray-600">
                        <span>
                            <strong>{followerCount}</strong> Followers
                        </span>
                        <span>
                            <strong>{followingCount}</strong> Following
                        </span>
                    </div>
                </div>
            </div>

            <hr className="mb-12" />

            {/* Vertically Stacked Posts */}
            <div className="space-y-4">
                {posts.slice(0, 3).map((post, index) => (
                    <Post
                        key={index}
                        username={post.username}
                        content={post.content}
                        likes={post.likes}
                        time={post.time}
                    />
                ))}
            </div>
            <p className="text-center text-[#26a7de] font-bold mt-5 cursor-pointer">Show More Tweets</p>
        </div>
    );
};

export default ProfilePage;


  // Sample data
//   const profileData = {
//     username: "johndoe",
//     followerCount: 1200,
//     followingCount: 300,
//     posts: [
//       {
//         username:"John Doe",
//         content:"This is a sample tweet content.",
//         likes:120,
//         time:"2018-10-25T16:52:27.724Z"

//       },
//       {
//         username:"John Doe",
//         content:"This is a sample tweet content.",
//         likes:120,
//         time:"2018-10-25T16:52:27.724Z"

//       },      {
//         username:"John Doe",
//         content:"This is a sample tweet content.",
//         likes:120,
//         time:"2018-10-25T16:52:27.724Z"

//       },
//       // Add more post data here
//     ],
//   };

//   return (
//     <div className="App">
//       <ProfilePage
//         followerCount={120}
//         followingCount={250}
//         username="John Doe"
//         posts={profileData.posts}
//       />
//     </div>
//   );