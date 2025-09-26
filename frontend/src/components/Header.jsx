import { Link } from 'react-router-dom';
import { IoPaw } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaStore } from "react-icons/fa";
import { BsInfoCircleFill } from "react-icons/bs";
import { IoMdContacts } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaHouseUser } from "react-icons/fa6";
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header>
      <div className={styles.logo}>
        <IoPaw className={styles.logoIcon} />
        <Link to="/" className={styles.name_logo}>Paws and Claws</Link>
      </div>
{/*       <button className='menu-button'>☰</button> */}
      <nav className={styles.menu}>
        <ul className={styles.menu_item}>
          <li><FaHome className={styles.Icon} /></li>
          <li><Link to="/">HOME</Link></li>
        </ul>
        <ul className={styles.menu_item}>
          <li><FaStore className={styles.Icon} /></li>
          <li><Link to="/table">STORE</Link></li>
        </ul>
        <ul className={styles.menu_item}>
          <li><BsInfoCircleFill className={styles.Icon} /></li>
          <li><a href="#">ABOUT</a></li>
        </ul>
        <ul className={styles.menu_item}>
          <li><IoMdContacts className={styles.Icon} /></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
      </nav>

      <nav>
        <ul className={styles.account}>
          <li><FaHouseUser className={styles.Icon}/></li>
        </ul>
      </nav>
    </header>
  )
}