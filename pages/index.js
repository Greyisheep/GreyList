import Head from "next/head";
import Image from "next/image";
// import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/comps/Navbar";
import Footer from "@/comps/Footer";
import Link from "next/link";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.title}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
          architecto corrupti fugit, esse laborum, voluptates quisquam aliquam
          porro debitis quas sequi est ipsum libero et repudiandae nam corporis
          ipsa culpa!
        </p>
        <p className={styles.title}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
          architecto corrupti fugit, esse laborum, voluptates quisquam aliquam
          porro debitis quas sequi est ipsum libero et repudiandae nam corporis
          ipsa culpa!
        </p>
        <Link href="/ninjas" className={styles.btn}>
          See Ninja Listing
        </Link>
      </div>
    </>
  );
}
