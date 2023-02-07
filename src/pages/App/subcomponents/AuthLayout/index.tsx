import { useHookstate } from "@hookstate/core";
import { Card } from "antd";
import authApi from "apis/auth";
import appStore from "pages/App/store";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  const [isCheckingToken, setIsCheckingToken] = useState<boolean>(true);
  const appState = useHookstate(appStore);

  useEffect(() => {
    handleCheckToken();
  }, []);

  const handleCheckToken = async () => {
    try {
      await authApi.checkToken();
      appState.isLogged.set(true);
      setIsCheckingToken(false);
    } catch (error) {
      appState.isLogged.set(false);
      setIsCheckingToken(false);
    }
  };

  if (isCheckingToken) {
    return null;
  }

  if (!appState.isLogged.get()) {
    return <Card>Vui lòng đăng nhập</Card>;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthLayout;
