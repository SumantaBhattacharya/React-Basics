import React, {useContext} from 'react';
import userContext from '../context/UserContext';

const Profile = () => {
  const {isUser } = useContext(userContext); // we want the data not the method 
  
  if (!isUser) return <div> Please login </div>

  return <div>
      Welcome {isUser.isUsername}
  </div>

}

export default Profile
// Get-ChildItem -Path "C:\Users\SUDIP BHATTACHARYA\Desktop\React-Frontend\08minicontext" -Recurse | ForEach-Object { Get-Content $_.FullName }
