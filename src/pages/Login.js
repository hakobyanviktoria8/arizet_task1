import React from "react";
import { ImgWrapper } from "../components/ImgWrapper";
import { Layout } from "../components/Layout";
import { LoginDataComp } from "../components/LoginDataComp";

export const Login = () => {
  return (
    <Layout>
      <div className="app__main">
        <div className="app__main_formWrapper">
          <LoginDataComp />
        </div>

        <ImgWrapper />
      </div>
    </Layout>
  );
}
