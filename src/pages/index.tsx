import type { NextPage } from "next";
import Head from "next/head";
import { Activity } from "phosphor-react";
import { InputText } from "../components/inputText";

const Home: NextPage = () => {
  return (
    <div className="p-10 text-black">
      <h1>Homepage</h1>
      <InputText
        type="text"
        onChange={(value) => {}}
      />
    </div>
  );
};

export default Home;
