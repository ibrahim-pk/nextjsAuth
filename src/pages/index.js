import Head from "next/head";
import { useSession } from "next-auth/react";
import app from "@/firebase/FirebaseConfig";
import { getAuth } from "firebase/auth";
import { useState } from "react";
const HomePage = () => {
  const [userEmail, setUserEmail] = useState();
  const { data: session } = useSession();
  const auth = getAuth();
  auth.onAuthStateChanged((user) => {
    setUserEmail(user.email);
  });
  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: "center", marginTop: "10%" }}>
        Welcome To Next Auth Home Page{" "}
        {session?.user?.name ? session.user.name : userEmail}
      </h1>
    </div>
  );
};

export default HomePage;
