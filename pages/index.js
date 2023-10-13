import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <li>
        <Link href="/auth/login">Go to login form</Link>
      </li>
      <li>
        <Link href="/auth/register">Go to register form</Link>
      </li>
    </div>
  );
}
