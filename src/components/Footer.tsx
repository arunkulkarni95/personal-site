import styles from "../../styles/Home.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
                Copyright &#169; {new Date().getFullYear()} Arun Kulkarni
      </div>
    </footer>
  )
}

export default Footer;