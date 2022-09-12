import styles from "../../styles/Home.module.css";
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "../components/Footer";
import Meta from "../components/Meta";
import NavBar from "../components/NavBar";

export const Contact = () => 
  <>
    <NavBar />
    <div className={styles.container}>
      <Meta key='contact' pageTitle='Contact' />
      <main className={styles.main}>
        <h1 className={styles.title}>Contact Me</h1>
        <div className={styles.description}>
          Coming soon!
        </div>
      </main>
      <Footer />
    </div>
  </>

export default Contact;
