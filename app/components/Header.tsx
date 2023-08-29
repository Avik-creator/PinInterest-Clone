"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { HiSearch, HiBell, HiChat } from "react-icons/hi";
import { signIn, useSession, signOut } from "next-auth/react";
import app from "../Shared/firebaseConfig";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
const Header = () => {
  const { data: session } = useSession();
  const router = useRouter()
  const db = getFirestore(app);

  useEffect(() => {
    saveUserInfo();
  }, [session]);
  const saveUserInfo = async () => {
    if (session?.user && session.user.email) {
      // Check if email is defined
      await setDoc(doc(db, "users", session.user.email), {
        userName: session.user.name,
        email: session.user.email,
        userImage: session.user.image,
      });
    }
  };

  const onCreateClick=()=>{
    if(session)
    {
      router.push('/pin-builder')
    }
    else{
      signIn()
    }
  }
  
  return (
    <div className="flex gap-3 md:gap-2 items-center p-6 ">
      <Image
        src="/Pinterest-logo.png"
        alt="logo"
        width={50}
        height={50}
        className="hover:bg-gray-300 p-2 rounded-full cursor-pointer"
        onClick={()=> router.push('/')}
      />
      <button
        className="bg-black
         text-white p-2 px-4 rounded-full
         text-[25px]
          hidden md:block"
          onClick={()=> router.push('/')}
      >
        Home
      </button>
      <button
        className="font-semibold p-3 px-6
         rounded-full text-[25px]"
         onClick={()=> onCreateClick()}
      >
        Create
      </button>
      <div
        className="bg-[#e9e9e9] p-3 px-6
         gap-3 items-center rounded-full w-full hidden md:flex"
      >
        <HiSearch
          className="text-[25px] 
        text-gray-500 md:hidden"
        />
        <input
          type="text"
          placeholder="search"
          className="bg-transparent outline-none"
        />
      </div>
      <HiBell className="text-[40px] text-gray-500" />
      <HiChat className="text-[40px] text-gray-500" />
      {session?.user ? (
        <Image
          src={session?.user?.image as string}
          alt="user-image"
          width={50}
          height={50}
          className="hover:bg-gray-300 p-2 rounded-full cursor-pointer"
          onClick={()=> router.push('/'+session?.user?.email)}
        />
      ) : (
        <button
          className="font-semibold p-3 px-6
         rounded-full text-[25px]"
          onClick={() => signIn()}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
