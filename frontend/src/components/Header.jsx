import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoPaw } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaStore } from "react-icons/fa";
import { BsInfoCircleFill } from "react-icons/bs";
import { IoMdContacts } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaHouseUser } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from '../styles/Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className={styles.logo}>
        <IoPaw className={styles.logoIcon} />
        <Link to="/" className={styles.name_logo}>Paws and Claws</Link>
      </div>
      <nav className={styles.menu}>
        <ul className={styles.menu_item}>
          <li><FaHome className={styles.Icon} /></li>
          <li><Link to="/">HOME</Link></li>
        </ul>
        <ul className={styles.menu_item}>
          <li><FaStore className={styles.Icon} /></li>
          <li><Link to="/table">QUIZ</Link></li>
        </ul>
        <ul className={styles.menu_item}>
          <li><BsInfoCircleFill className={styles.Icon} /></li>
          <li><Link to="/about">ABOUT</Link></li>
        </ul>
        <ul className={styles.menu_item}>
          <li><IoMdContacts className={styles.Icon} /></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>
      </nav>

      <button className={styles.menu_button} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>


      {isMenuOpen && (
        <div className={styles.mobile_menu}>
          <div className={styles.mobile_menu_content}>
            <Link to="/" onClick={closeMenu} className={styles.mobile_menu_item}>
              <FaHome className={styles.mobile_icon} />
              <span>HOME</span>
            </Link>
            <Link to="/table" onClick={closeMenu} className={styles.mobile_menu_item}>
              <FaStore className={styles.mobile_icon} />
              <span>QUIZ</span>
            </Link>
            <Link to="/about" onClick={closeMenu} className={styles.mobile_menu_item}>
              <BsInfoCircleFill className={styles.mobile_icon} />
              <span>ABOUT</span>
            </Link>
            <Link to="/contact" onClick={closeMenu} className={styles.mobile_menu_item}>
              <IoMdContacts className={styles.mobile_icon} />
              <span>CONTACT</span>
            </Link>
          </div>
        </div>
      )}

      <nav className={styles.menu_log}>
        <ul className={styles.menu_item_log}>
          <li><Link to="/login">Login</Link></li>
          <li>/</li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </nav>
    </header>
  )
}