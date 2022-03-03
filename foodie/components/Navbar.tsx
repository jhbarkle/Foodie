import Link from 'next/link';
import Router from 'next/router';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, logout } from '../firebase-lib/firebase';
import Image from 'next/image';

export interface NavbarProps {
  showSettingsButtons?: boolean;
  profileIcon?: string;
}

const Navbar: React.FC<NavbarProps> = ({ showSettingsButtons, profileIcon }) => {
  const [user, loading, error] = useAuthState(auth);
  const dashboardURL = `/dashboard/${user?.uid}/home`;
  useEffect(() => {
    if (loading) {
      return;
    }
    if (!user) {
      Router.push('/login');
    }
  });
  return (
    <>
      <h1>Foodie</h1>
      {user && <button onClick={logout}>Logout</button>}

      <Link href={dashboardURL}>
        <button>Home</button>
      </Link>

      {showSettingsButtons && (
        <Link href="/settings">
          <button>Settings</button>
        </Link>
      )}

      {profileIcon && <Image src={profileIcon} alt="Picture of food" width={50} height={50} />}

      <hr />
    </>
  );
};

export default Navbar;
