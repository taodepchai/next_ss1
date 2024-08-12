import Head from "next/head";
import Image from "next/image";
import { Inter, Roboto } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Bt3 from "@/components/Bt3";
import Bt4 from "@/components/Bt4";
import Button from "@/components/Bt5";
import Bt7 from "@/components/Bt7";
import Bt8 from "@/components/Bt8";
import { Bt10 } from "@/components/Bt10";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "100",
});

export default function Home() {
  return (
    <>
      <Bt7></Bt7>
      <Bt3></Bt3>
      <Bt4></Bt4>
      <h1>bt5</h1>
      <Button>thêm</Button>
      <Button>sửa</Button>
      <Button>xoá</Button>
      <Bt10></Bt10>
      <Bt8></Bt8>
    </>
  );
}
