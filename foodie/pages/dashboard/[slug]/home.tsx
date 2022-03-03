import React, { useEffect, useState } from 'react';
import Navbar from '../../../components/Navbar';
import { auth, getUserProfile } from '../../../firebase-lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { UserProfile } from '../../../lib/UserProfile';

const Home = () => {
  const [user, loading, error] = useAuthState(auth);
  const [userProfileData, setUserProfileData] = useState<UserProfile>({
    userName: '',
    email: '',
    bioDescription: '',
    fridgeList: [],
    phoneNumber: '',
    savedRecipes: [],
    profilePic: ''
  });

  useEffect(() => {
    if (user) {
      getUserProfile(user.uid).then((result) => {
        setUserProfileData(result);
      });
    }
  }, []);

  return (
    <>
      <Navbar
        showSettingsButtons={true}
        profileIcon={userProfileData.profilePic ? userProfileData.profilePic : ''}
      />
      <h1>Welcome home, {userProfileData.userName}</h1>
      <div>
        <h3 style={{ textDecoration: 'strong' }}>Bio</h3>
        <p>
          {userProfileData.bioDescription ? userProfileData.bioDescription : 'User has no bio.'}
        </p>
      </div>
    </>
  );
};

export default Home;
