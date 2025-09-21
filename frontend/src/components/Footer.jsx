import styles from '../styles/Footer.module.css';

export default function Footer() {
    return (
		<footer>
			<nav>
				<ul>
					<li><a className={styles.footer_item} href="#">Home</a></li>
					<li><a className={styles.footer_item} href="#">Store</a></li>
					<li><a className={styles.footer_item} href="#">About</a></li>
					<li><a className={styles.footer_item} href="#">Contact</a></li>
				</ul>
			</nav>
			<p>Copyright © 2025 All rights reserved - Paws and Claws</p>
		</footer>
	);
}