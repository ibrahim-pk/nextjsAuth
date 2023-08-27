import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import { signIn } from "next-auth/react";
import Head from "next/head";
import styles from "@/styles/Login.module.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import app from "@/firebase/FirebaseConfig";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);
  const handleLogin = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const handleRegister = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <div>
      <Head>
        <title>Next Login</title>
      </Head>
      <div className={styles.form}>
        <h3>LOGIN</h3>
        <div className={styles.social_icons}>
          <GoogleOutlined
            onClick={() =>
              signIn("google", { callbackUrl: "http://localhost:3000/" })
            }
          />
          <GithubOutlined
            onClick={() =>
              signIn("github", { callbackUrl: "http://localhost:3000/" })
            }
          />
        </div>
        <hr />
        <form>
          <label htmlFor="">Your Email</label>
          <input onChange={(e) => setEmail(e.target.value)} type="email" />
          <label htmlFor="">Your Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <button onClick={handleLogin}>Register</button>
          <button onClick={handleRegister} type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
