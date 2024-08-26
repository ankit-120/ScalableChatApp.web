import React, { useEffect, useState } from "react";
import DebounceSelect from "../helper/DebounceSelect";
import { error } from "../helper/Notifications";
import axios from "axios";

const UserList = () => {
  const [selectedUser, setSelectedUser] = useState<string>();
  console.log({ selectedUser });

  const createOrFetchChat = async () => {
    try {
      const resp = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/chat/getOrCreateChat`,
        { participants: [] }
      );
    } catch (e) {
      console.log(e);
      error("Something went wrong");
    }
  };
  useEffect(() => {
    createOrFetchChat();
  }, [selectedUser]);

  return (
    <div>
      <DebounceSelect
        url=""
        value={selectedUser}
        handleSelect={(value: string) => setSelectedUser(JSON.parse(value))}
      />
    </div>
  );
};

export default UserList;
