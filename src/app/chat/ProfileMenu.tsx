"use client";

import axios from "axios";
import * as React from "react";
import { useRouter } from "next/navigation";
import { Avatar, Dropdown, MenuProps } from "antd";
import { success } from "../helper/Notifications";

const ProfileMenu = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/logout`,
        {},
        { withCredentials: true }
      );
      router.push("/");
      success("Logged out Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "Ankit Kumar",
    },
    {
      key: "2",
      label: <div onClick={handleLogout}>Logout</div>,
    },
  ];

  return (
    <div>
      <Dropdown menu={{ items }} placement="bottomRight" arrow>
        <Avatar
          style={{
            backgroundColor: "#fde3cf",
            color: "#f56a00",
            cursor: "pointer",
          }}
        >
          AK
        </Avatar>
      </Dropdown>
    </div>
  );
};

export default ProfileMenu;
