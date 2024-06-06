import styles from './Header.module.css';
import MenuIcon from '../../assets/icons/menu-mobile-icon.svg?react';
import Button from '../ui/Button/Button';
import { useContext, useState } from 'react';
import Logo from '../ui/Logo/Logo';

const MenuList = ({ className }) => {
	return (
		<ul className={className}>
			<li>
				<a to='/'>About</a>
			</li>
			<li>
				<a to='/a'>Admin panel</a>
			</li>
			<li>
				<a to='/b'>о HOW TO CONNECT</a>
			</li>
			{/* <div className={styles.logo}>
            <Logo />
        </div> */}
		</ul>
	);
};

const Header = ({ currentSlide }) => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	//12
	const contrastLogo = currentSlide === 0 && document.body.classList.contains('end');

	return (
		<header className={styles.container}>
			{currentSlide > 0 && (
				<div className={styles.logoSmall}>
					<Logo contrast={contrastLogo} />
				</div>
			)}
			{isMobileMenuOpen && (
				<div className={styles.menuMobileLayout}>
					<button onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
						<MenuIcon
							style={{
								width: '48px',
								height: '48px',
							}}
						/>
					</button>
					<MenuList className={styles.menuListMobile} />
				</div>
			)}
			<button onClick={() => setIsMobileMenuOpen((prev) => !prev)} className={styles.mobileMenuButton}>
				<MenuIcon
					style={{
						width: '48px',
						height: '48px',
					}}
				/>
			</button>
			<MenuList className={styles.list} />
			<button className={styles.regButton}>Registration</button>
		</header>
	);
};

export default Header;
