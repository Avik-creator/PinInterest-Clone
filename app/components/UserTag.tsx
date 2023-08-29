"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image';

interface User {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
}


function UserTag({ user }: { user: User }) {
  console.log("User", user)
  return (
    <div className=''>
      {user ?
        <div className='flex gap-3 items-center'>
          <Image src={user.image as string}
            alt='userImage'
            width={45}
            height={45}
            className='rounded-full' />
          <div>
            <h2 className='text-[14px] font-medium'>{user.name}</h2>
            <h2 className='text-[12px]'>{user.email}</h2>
          </div>
        </div>
        : null}
    </div>
  )
}

export default UserTag
