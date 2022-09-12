import styles from "../../styles/Home.module.css";
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "../components/Footer";
import Meta from "../components/Meta";
import NavBar from "../components/NavBar";

export const AboutMe = () => 
  <>
    <NavBar />
    <div className={styles.container}>
      <Meta key='aboutme' pageTitle='About Me' path='/aboutme' />
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
