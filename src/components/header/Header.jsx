import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import Blur from '../../assets/blur/blur1.png';
import Logo from '../ui/Logo/Logo';

const Header = () => {
	// const location = useLocation();
	// const isRoot = location.pathname === '/';

	return (
		<header className={styles.container}>
			<ul className={styles.list}>
				<li>
					<Link to='/'>About</Link>
				</li>
				<li>
					<Link to='/a'>Admin panel</Link>
				</li>
				<li>
					<Link to='/b'>Profit calculator</Link>
				</li>
				{/* <div className={styles.logo}>
						<Logo />
					</div> */}
			</ul>
			<button>Registration</button>
		</header>
	);
};

export default Header;
