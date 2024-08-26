"use client";

import React, { useState } from "react";
import { signupFormType } from "../types";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Button, Input } from "antd";

const SignupTab = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<signupFormType>({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSignup = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/signup`,
        formData,
        { withCredentials: true }
      );
      console.log({ res });
      router.push("/chat");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Name"
        size="large"
        value={formData.name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange("name", e.target.value)
        }
      />
      <Input
        size="large"
        placeholder="Username"
        value={formData.username}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange("username", e.target.value)
        }
      />
      <Input
        size="large"
        placeholder="Email"
        value={formData.email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange("email", e.target.value)
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
        onClick={handleSignup}
        loading={loading}
      >
        Sign up
      </Button>
    </div>
  );
};

export default SignupTab;
