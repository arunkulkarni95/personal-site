import cx from 'classnames';
import Head from "next/head";
import { Button } from 'react-bootstrap'
import styles from "../../styles/Home.module.css";
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from '../components/NavBar';

export const Home = () => 
  <>
    <NavBar />
    <div className={styles.container}>
      <Head>
        <title>Home | Arun Kulkarni</title>
        <meta name="description" content="Arun Kulkarni's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Arun's Site!</h1>
        <div className={styles.description}>
          A personal portfolio site built with Next.js, distributed by
          CloudFront, and hosted on AWS S3 to showcase my professional
          accomplishments - currently a work in progress!
        </div>
        <div className={cx('d-flex justify-content-around', styles.description)}>
          <Button
            size='lg'
            className='me-5'
            href='/ArunKulkarni_Resume_9-3.pdf'
            target='blank'
            rel='noopener noreferrer'
            variant="primary"
          >
            My Resume
          </Button>
          <Button
            size='lg'
            href='https://github.com/arunkulkarni95/personal-site'
            target='blank'
            rel='noopener noreferrer'
            variant="primary"
          >
            This Site's Source Code (GitHub)
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  </>

export default Home;
