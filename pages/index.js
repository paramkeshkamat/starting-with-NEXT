import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <h1>Home Page</h1>
        <p className={styles.paragraph}>
          Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut.
          Carrot cake caramels pie sweet apple pie tiramisu carrot cake.
          Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon
          drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton
          candy gummi bears chocolate bar cake cookie. Cupcake muffin danish
          muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé
          chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy
          croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot
          cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake
          dragée pie.
        </p>
        <Link href="/users">
          <a className={`${styles.btn} ${styles.btn2}`}>see all users</a>
        </Link>
      </div>
    </>
  );
};

export default Home;
