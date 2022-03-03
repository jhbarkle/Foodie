import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut
} from 'firebase/auth';
import {
  getFirestore,
  query,
  doc,
  getDocs,
  collection,
  where,
  setDoc,
  updateDoc
} from 'firebase/firestore';

import { UserProfile } from '../lib/UserProfile';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBvZqrwjnCndqsr8scOioM76FaDS_UiwZA',
  authDomain: 'foodie-132ef.firebaseapp.com',
  projectId: 'foodie-132ef',
  storageBucket: 'foodie-132ef.appspot.com',
  messagingSenderId: '886255804975',
  appId: '1:886255804975:web:7e4882b57db71e10105cda',
  measurementId: 'G-K44CNFPQ8L'
};

// Initialize app and get needed variables
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

// Login with email and password
const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};

// Register with email and password
const registerWithEmailAndPassword = async (userName: string, email: string, password: string) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await setDoc(doc(db, 'users', user.uid), {
      uid: user.uid,
      userName,
      authProvider: 'local',
      email
    });

    await setDoc(doc(db, 'userProfiles', user.uid), {
      uid: user.uid,
      userName,
      bioDescription: '',
      phoneNumber: '',
      fridgeList: [],
      posts: [],
      likePosts: [],
      savedRecipes: [],
      email,
      profilePic: ''
    });
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};

let userData: any = '';

const getUserProfile = async (userUID: string): Promise<UserProfile> => {
  const collectionD = collection(db, 'userProfiles');

  const q = query(collectionD, where('uid', '==', userUID));

  const querySnapshot = await getDocs(q);
  userData = querySnapshot;

  return convertDataToUserProfile(userData);
};

const convertDataToUserProfile = (userDataFromFirebase: any): UserProfile => {
  let profileData: UserProfile = {
    userName: '',
    email: '',
    bioDescription: '',
    fridgeList: [],
    phoneNumber: '',
    savedRecipes: [],
    profilePic: ''
  };
  userDataFromFirebase.forEach((doc: { id: any; data: () => any }) => {
    // console.log('username', ' => ', doc.data().userName);
    // console.log('email', ' => ', doc.data().email);
    // console.log('fridgeList', ' => ', doc.data().fridgeList);
    // console.log('phoneNumber', ' => ', doc.data().phoneNumber);
    // console.log('saved recipes', ' => ', doc.data().savedRecipes);
    // console.log('profile pic', ' => ', doc.data().profilePic);
    profileData.bioDescription = doc.data().bioDescription;
    profileData.email = doc.data().email;
    profileData.fridgeList = doc.data().fridgeList;
    profileData.phoneNumber = doc.data().phoneNumber;
    profileData.profilePic = doc.data().profilePic;
    profileData.savedRecipes = doc.data().savedRecipes;
    profileData.userName = doc.data().userName;
  });

  return profileData;
};

const updateUserInfo = async (userData: UserProfile, userUID: string) => {
  const userRef = doc(db, 'userProfiles', userUID);
  await updateDoc(userRef, {
    bioDescription: userData.bioDescription,
    phoneNumber: userData.phoneNumber,
    userName: userData.userName,
    profilePic: userData.profilePic
  });
};

// const updateUserInfo = async (userData: UserProfile, userUID: string) => {
//   const userRef = collection(db, 'userProfiles');
//   userRef.get().
// };

// Password reset
const sendPasswordReset = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert('Password reset link sent!');
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};

// Log out
const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  getUserProfile,
  updateUserInfo
};
