import Head from "next/head";
// import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.container}>
        <h1>Home page</h1>
        <Link href="ninjas">See ninja listing</Link>
      </div>
    </>
  );
}
