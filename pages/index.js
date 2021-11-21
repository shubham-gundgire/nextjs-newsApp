import styles from '../styles/Home.module.css';
import { Toolbar } from '../components/Toolbar';

export default function Home() {
  return (
    <div className="page-container">
      <Toolbar />

      <div className={styles.main}>
        <h1>Next.js News App</h1>

        <h3>Your one stop shop for the latest news articles</h3>
        <h5>this project created by following tutorial. link to tutorial <a  style={{color:"skyblue",textDecoration:"underline"}} href="https://www.youtube.com/watch?v=xtItzwYG6oQ">tutorial</a> </h5>
      
      </div>
    </div>
  );
}