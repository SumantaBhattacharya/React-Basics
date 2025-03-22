import React, { useEffect } from "react";
import { useState } from "react";
// it is a hook
import { useLoaderData } from "react-router-dom";
const Github = () => {
  const isFollowings = useLoaderData();
  /*  
const [isFollowings, setFollowings] = useState([]);
useEffect(() => {
    fetch("https://api.github.com/users/SumantaBhattacharya/following")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFollowings(data);
        console.log("State updated:", isFollowings); // Add this inside your component
      })
      .catch((error) => console.log(error));
  }, []);
*/

  /*
When we use the useEffect hook, it will run whenever the dependencies array changes. If the dependencies array is empty, it will only run once when the component mounts.
If you want to run the effect only once when the component mounts, you can pass an empty array as the second argument to useEffect.
the we click the component then its fetches the data from the API again and again but when we use loader it stores the fetched data in the cached memory making it optimised reducing the loading time
*/
  return (
    <div className="text-center m-4 bg-gray-500 text-white text-3xl p-4 m">
      Github Following: {isFollowings?.length}
      {/* Display all user details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {isFollowings?.length > 0 ? (
          isFollowings.map((following) => (
            <div
              key={following.id}
              className="bg-gray-700 p-4 rounded-lg shadow-lg text-left"
            >
              <img
                src={following.avatar_url}
                alt={following.login}
                className="w-20 h-20 rounded-full mx-auto mb-2"
              />
              <h3 className="text-xl font-bold">{following.login}</h3>
              <p>ID: {following.id}</p>
              <p>Node ID: {following.node_id}</p>
              <p>Type: {following.type}</p>
              <p>Admin: {following.site_admin ? "Yes" : "No"}</p>
              <a
                href={following.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:underline block mt-2"
              >
                View Profile
              </a>
            </div>
          ))
        ) : (
          <p>No following data available.</p>
        )}
      </div>
    </div>
  );
};

export default Github;

export const GitHubInfoLoader = async () => {
  try {
    const response = await fetch(
      "https://api.github.com/users/SumantaBhattacharya/following"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json(); // promise
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    // Optionally, you could re-throw the error here if you'd like to handle it differently,
    // or you could log the error to an error reporting service.
    return [];
    // return null;
  }
};

// https://api.github.com/users/techsithgit/followers
// https://api.github.com/users/SumantaBhattacharya/followers
// https://api.github.com/users/SumantaBhattacharya/following
// https://reactrouter.com/6.28.0/start/overview
// Fetch the followers of the user "SumantaBhattacharya" and display them in a list.
// Display the user's avatar, login, ID, Node ID, Type, and if they are an admin.
// Add a link to the user's GitHub profile in the list.
// Add pagination to display the followers in smaller chunks.
// Implement error handling for any network errors or invalid API responses.

/*
Add a map function to display the followers' names in the component
{isfollowings.map((following) => (
    <div key={following.id}>{following.login}</div>
))}
*/
/*as we fetch when the component is mounted, we use useEffect
   we fetch the data from the API
   we convert the response to JSON
   we set the state to the data
   we log the data to the console
   Display the number of followers
   Display all user details in a grid layout with a responsive design (sm, md, lg)
   Add a button that when clicked, fetches the user's public repositories and displays them in a separate component
   Add a search functionality that allows users to search for specific users by their username
*/
