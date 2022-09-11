import Head from "next/head";
import styles from "../../styles/Home.module.css";
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export const PageNotFound = () => 
  <>
    <NavBar />
    <div className={styles.container}>
      <Head>
        <title>404 | Arun Kulkarni</title>
        <meta name="description" content="404 Not Found" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>404</h1>
        <div className={styles.description}>
          Page Not Found
        </div>
      </main>
      <Footer />
    </div>
  </>

export default PageNotFound;
