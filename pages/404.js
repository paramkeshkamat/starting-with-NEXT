// import Link from "next/link";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

const ErrorPage = () => {
  const router = useRouter();

  useEffect(() => {
    const redirect = setTimeout(() => {
      router.push("/");
    }, 8000);
    return () => clearTimeout(redirect, 8000);
  }, []);

  return (
    <>
      <Head>
        <title>Error Page</title>
      </Head>
      <div className="ErrorPage">
        <h1>404</h1>
        <p className="msg">This page could not be found.</p>
        <p>
          Go back to&nbsp;
          {/* <Link href="/">
          <a>home page</a>
        </Link> */}
          <button onClick={() => router.push("/")}>home page</button>
        </p>
      </div>
    </>
  );
};

export default ErrorPage;
