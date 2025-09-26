import { Link } from 'react-router-dom';
import styles from '../styles/Footer.module.css';

export default function Footer() {
    return (
		<footer>
			<nav>
				<ul>
                    <li><Link to="/" className={styles.footer_item}>Home</Link></li>
                    <li><Link to="/table" className={styles.footer_item}>Store</Link></li>
					<li><a className={styles.footer_item} href="#">About</a></li>
					<li><a className={styles.footer_item} href="#">Contact</a></li>
				</ul>
			</nav>
			<p>Copyright © 2025 All rights reserved - Paws and Claws</p>
		</footer>
	);
}