import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const about = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <h1 style={{ marginBottom: 15 }}>About page</h1>
        <Image src="/nextjs.png" width={300} height={280} alt="image"/>
      </div>
    </>
  );
};

export default about;
