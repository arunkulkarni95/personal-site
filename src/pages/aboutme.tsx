import Head from "next/head";
import styles from "../../styles/Home.module.css";
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export const AboutMe = () => 
  <>
    <NavBar/>
    <div className={styles.container}>
      <Head>
        <title>About Me | Arun Kulkarni</title>
        <meta name="description" content="About Arun Kulkarni" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>About Me</h1>
        <div className={styles.description}>
          Coming soon!
        </div>
      </main>
      <Footer />
    </div>
  </>
  
export default AboutMe;
