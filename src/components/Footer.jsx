import styles from "./Sidebar.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; Copyright 2023 - {new Date().getFullYear()} WorldWise Inc.
      </p>
    </footer>
  );
}

export default Footer;
