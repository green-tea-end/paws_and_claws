import { Link } from 'react-router-dom';
import styles from '../styles/Footer.module.css';

export default function Footer() {
    return (
		<footer>
			<nav>
				<ul>
                    <li><Link to="/" className={styles.footer_item}>Home</Link></li>
                    <li><Link to="/table" className={styles.footer_item}>Quiz</Link></li>
					<li><Link to="/about" className={styles.footer_item}>About</Link></li>
					<li><Link to="/contact" className={styles.footer_item}>Contact</Link></li>
				</ul>
			</nav>
			<p className={styles.p}>Copyright © 2025 All rights reserved - Paws and Claws</p>
		</footer>
	);
}