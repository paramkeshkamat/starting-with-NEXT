import Head from "next/head";
import styles from "../../styles/Users.module.css";

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  const paths = data.map((user) => {
    return {
      params: { id: user.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();

  return {
    props: { user: data },
  };
};

const User = ({ user }) => {
  return (
    <>
      <Head>
        <title>Single User</title>
      </Head>
      <div className={styles.singleUser}>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.website}</p>
        <p>{user.address.city}</p>
      </div>
    </>
  );
};

export default User;
