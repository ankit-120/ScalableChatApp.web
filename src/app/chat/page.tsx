"use client";

import React from "react";
import { useRouter } from "next/navigation";
import ProfileMenu from "./ProfileMenu";
import UserList from "./UserList";

const Chat = () => {
  const router = useRouter();

  return (
    <div className="w-[100vw]">
      <div className="w-full p-3 bg-blue-900 flex justify-end">
        <ProfileMenu />
      </div>
      <div className="w-full grid grid-cols-[25%_75%]">
        <div>
          <UserList />
        </div>
        <div>chat</div>
      </div>
    </div>
  );
};

export default Chat;
