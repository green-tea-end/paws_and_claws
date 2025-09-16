import { IoPaw } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaHouseUser } from "react-icons/fa6";
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header>
      <div className={styles.logo}>
        <IoPaw className={styles.logoIcon} />
        <a href="/" className={styles.name_logo}>Paws and Claws</a>
      </div>
{/*       <button className='menu-button'>☰</button> */}
      <nav>
        <ul className={styles.menu}>
          <li><a href="/">HOME</a></li>
          <li><a href="/store">STORE</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">CONTACT</a></li>
          <li><FaCartShopping className={styles.Icon} /></li>
          <li><FaHouseUser className={styles.Icon}/></li>
        </ul>
      </nav>
    </header>
  )
}