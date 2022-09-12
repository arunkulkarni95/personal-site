import cx from 'classnames';
import Image from 'next/image';
import { Button } from 'react-bootstrap'
import styles from "../../styles/Home.module.css";
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import Meta from '../components/Meta';
import NavBar from '../components/NavBar';

export const Home = () => 
  <>
    <NavBar />
    <div className={styles.container}>
      <Meta key='home' pageTitle='Home' path='/' />
      <main className={cx('d-flex flex-column justify-content-center align-items-center', styles.homepageMain)}>
        <Image src='/professional.png' width='200' height='200' />
        <h1 className={styles.title}>Welcome to Arun's Site!</h1>
        <div className={styles.description}>
          A personal portfolio site built with Next.js, distributed by
          CloudFront, and hosted on AWS S3 to showcase my professional
          accomplishments - currently a work in progress!
        </div>
        <div className={cx('d-flex flex-wrap justify-content-center', styles.homepageButtons)}>
          <Button 
            className='d-flex me-2 mb-4'
            size='lg'
            href='/ArunKulkarni_Resume_9-3.pdf'
            target='blank'
            rel='noopener noreferrer'
            variant="primary"
          >
            My Resume
          </Button>
          <Button
            className='d-flex mb-4'
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
