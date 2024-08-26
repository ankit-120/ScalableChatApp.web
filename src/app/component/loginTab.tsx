"use client";

import React, { useState } from "react";
import { loginFormType } from "../types";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Button, Input } from "antd";
import { success } from "../helper/Notifications";

const LoginTab = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const [formData, setFormData] = useState<loginFormType>({
    password: "",
    identifier: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/login`,
        formData,
        { withCredentials: true }
      );
      console.log({ res: res.data });
      router.push("/chat");
      success("Logged in Successfully");
      setLoading(false);
    } catch (error) {
      console.log(error);
      success("Something wend wrong");
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <Input
        size="large"
        placeholder="Email"
        value={formData.identifier}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange("identifier", e.target.value)
        }
      />
      <Input
        placeholder="Password"
        size="large"
        type="password"
        value={formData.password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange("password", e.target.value)
        }
      />
      <Button
        type="primary"
        className="w-fit self-end"
        onClick={handleLogin}
        loading={loading}
      >
        Login
      </Button>
    </div>
  );
};

export default LoginTab;
