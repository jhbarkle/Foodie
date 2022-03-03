import React, { ChangeEvent, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, getUserProfile, updateUserInfo } from '../firebase-lib/firebase';
import { UserProfile } from '../lib/UserProfile';
import Navbar from '../components/Navbar';
import Image from 'next/image';

const Settings = () => {
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
  const [newUserName, setNewUserName] = useState('');
  const [newPhoneNumber, setPhoneNumber] = useState('');
  const [newBio, setBio] = useState('');
  const [saveButtonEnabled, setSaveButtonEnabled] = useState(false);
  const [profileIcon, setProfileIcon] = useState<string>('');

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    if (user) {
      getUserProfile(user.uid).then((result) => {
        console.log(result);
        setUserProfileData(result);
      });
    }
  };

  useEffect(() => {
    setSaveButtonEnabled(true);
  }, [newUserName, newPhoneNumber, newBio]);

  const updateUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setNewUserName(e.target.value);
  };

  const updatePhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const updateBio = (e: ChangeEvent<HTMLInputElement>) => {
    setBio(e.target.value);
  };

  const updateProfile = () => {
    let newUserDataToSend: UserProfile = {
      ...userProfileData,
      bioDescription: newBio,
      phoneNumber: newPhoneNumber,
      userName: newUserName ? newUserName : userProfileData.userName,
      profilePic: profileIcon
    };

    if (user) updateUserInfo(newUserDataToSend, user.uid);
    getUserData();
    setSaveButtonEnabled(false);
    setProfileIcon('');
  };

  const chooseProfileIcon = (imageName: string) => {
    setSaveButtonEnabled(true);
    setProfileIcon(imageName);
  };

  const images: string[] = [
    '/../public/diet.png',
    '/../public/burger.png',
    '/../public/donut.png',
    '/../public/hot-pot.png',
    '/../public/masala-papad.png',
    '/../public/ramen.png',
    '/../public/salad.png'
  ];

  return (
    <>
      <Navbar
        showSettingsButtons={false}
        profileIcon={userProfileData.profilePic ? userProfileData.profilePic : ''}
      />
      <h1>Settings</h1>
      <div>
        <h4>Username</h4>
        <p>Your username will be seen by people who see your posts on their feed.</p>
        <input
          value={newUserName}
          type="text"
          name="change-username"
          onChange={updateUserName}
          placeholder={userProfileData.userName}
        />
      </div>
      <div>
        <h4>Phone Number</h4>
        <p>
          Your phone number won't be seen by the public but will be used to send you shopping lists
          on your request!
        </p>
        <input
          value={newPhoneNumber}
          type="text"
          name="change-username"
          onChange={updatePhoneNumber}
          placeholder={userProfileData.phoneNumber}
        />
      </div>
      <div>
        <h4>Bio</h4>
        <p>Your bio will be seen by people who visit your profile!</p>
        <input
          value={newBio}
          type="text"
          name="change-username"
          onChange={updateBio}
          placeholder={userProfileData.bioDescription}
        />
      </div>

      <div>
        <h4>Profile Icon</h4>
        <p>Your profile icon will be used throughout Foodie.com to represent you!</p>

        <div>
          <h5>Current Icon</h5>
          {userProfileData.profilePic ? (
            <Image src={userProfileData.profilePic} alt="Picture of food" width={70} height={70} />
          ) : (
            'No Icon Chosen'
          )}
        </div>

        <div>
          <h5>Change to:</h5>
          {profileIcon ? (
            <Image src={profileIcon} alt="Picture of food" width={70} height={70} />
          ) : (
            'No Icon chosen, select new icon.'
          )}
        </div>

        {images
          .filter((img) => img !== userProfileData.profilePic)
          .map((img) => {
            return (
              <button onClick={() => chooseProfileIcon(img)}>
                <Image src={img} alt="Picture of food" width={50} height={50} />
              </button>
            );
          })}
      </div>

      {saveButtonEnabled && <button onClick={updateProfile}>Save Changes</button>}
    </>
  );
};

export default Settings;
