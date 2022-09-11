import Head from "next/head";
import styles from "../../styles/Home.module.css";
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projects | Arun Kulkarni</title>
        <meta name="description" content="Arun Kulkarni's Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <main className={styles.main}>
        <h1 className={styles.title}>Projects</h1>

        <div className={styles.description}>
          Coming soon!
        </div>
      </main>
      <Footer />
    </div>
  )
}