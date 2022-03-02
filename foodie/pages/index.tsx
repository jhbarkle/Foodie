import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Foodie</h1>
      <p>Info about what Foodie is</p>
      <Link href="/login">
        <button>Get Started</button>
      </Link>
    </div>
  );
};

export default Home;
