"use client";

import { Card } from "antd";
import LoginTab from "./component/loginTab";
import SignupTab from "./component/signupTab";
import { useState } from "react";

const LoginPage = () => {
  const tabList = [
    {
      key: "signup",
      tab: "Sign up",
    },
    {
      key: "login",
      tab: "Login",
    },
  ];

  const [activeTabKey, setActiveTabKey] = useState<string>("signup");

  const onTabChange = (key: string) => {
    setActiveTabKey(key);
  };

  const contentList: Record<string, React.ReactNode> = {
    signup: <SignupTab />,
    login: <LoginTab />,
  };
  return (
    <div className="grid grid-cols-3 h-[100vh]">
      <div className="col-span-2">Landing Page</div>
      <div className="col-span-1 h-full">
        <Card
          style={{ width: "100%" }}
          tabList={tabList}
          activeTabKey={activeTabKey}
          onTabChange={onTabChange}
        >
          {contentList[activeTabKey]}
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
