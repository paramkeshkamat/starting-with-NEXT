import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Users.module.css";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  
  return {
    props: { users: data },
  };
};

const Users = ({ users }) => {
  return (
    <>
      <Head>
        <title>Users Page</title>
      </Head>
      <div className={styles.users}>
        <h1 className={styles.title}>All Users</h1>
        {users.map((user) => (
          <Link href={`/users/${user.id}`} key={user.id}>
            <div className={styles.user}>
              <h3 style={{ fontWeight: 500 }}>{user.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Users;
