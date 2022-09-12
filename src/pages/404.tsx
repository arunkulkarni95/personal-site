import styles from "../../styles/Home.module.css";
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "../components/Footer";
import Meta from "../components/Meta";
import NavBar from "../components/NavBar";

export const PageNotFound = () => 
  <>
    <NavBar />
    <div className={styles.container}>
      <Meta key='404' pageTitle='404' path='/404'/>
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
