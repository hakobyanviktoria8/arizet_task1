import React from "react";
import { ImgWrapper } from "../components/ImgWrapper";
import { Layout } from "../components/Layout";
import { SignUpFormData } from "../components/formComp/SignUpFormData";

export const Home = () => {
  return (
    <Layout>
      <div className="app__main">
        <div className="app__main_formWrapper">
          <SignUpFormData />
        </div>

        <ImgWrapper />
      </div>
    </Layout>
  );
};
