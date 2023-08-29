import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import UserTag from "../UserTag";

interface item {
  desc: string;
  email: string;
  id: string;
  image: string;
  link: string;
  title: string;
  userImage: string;
  userName: string;
}

interface PinItemProps {
  item: item;
}

function PinItem({ item }: PinItemProps) {
  const router=useRouter();
  const user = {
    name: item?.userName,
    image: item?.userImage,
  };
  return (
    <div className="">
      <div
        className="relative 
       before:absolute
       before:h-full before:w-full
       before:rounded-3xl
       before:z-10
       hover:before:bg-gray-600 
       before:opacity-50
       cursor-pointer
       "
        onClick={() => router.push("/pin/" + item.id)}
      >
        <Image
          src={item.image}
          alt={item.title}
          width={500}
          height={500}
          className="rounded-3xl 
        cursor-pointer relative z-0"
        />
      </div>
      <h2
        className="font-bold 
        text-[18px] mb-1 mt-2 line-clamp-2"
      >
        {item.title}
      </h2>
      <UserTag user={user} />
    </div>
  );
}

export default PinItem;
