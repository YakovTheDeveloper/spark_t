import styles from './Header.module.css';
import MenuIcon from '../../assets/icons/menu-mobile-icon.svg?react';
import Button from '../ui/Button/Button';
import { useContext, useState } from 'react';
import Logo from '../ui/Logo/Logo';
import { useDataStore } from '../../../store';
import classNames from 'classnames';
import { slides } from '../pages/Home';

const MenuList = ({ className, setCurrentSlide, isMobile, close }) => {
	const slideIndex = (id) => {
		isMobile && close?.();
		return slides.findIndex((s) => s.slideProps.id === id);
	};

	return (
		<ul className={className}>
			<li>
				<button onClick={() => setCurrentSlide(slideIndex('AboutUs'))}>About</button>
			</li>
			<li>
				<button onClick={() => setCurrentSlide(slideIndex('AdminPanel'))}>Admin panel</button>
			</li>
			<li>
				<button onClick={() => setCurrentSlide(slideIndex('Registration'))}>HOW TO CONNECT</button>
			</li>
			{/* <div className={styles.logo}>
            <Logo />
        </div> */}
		</ul>
	);
};

const Header = ({ currentSlide, setCurrentSlide }) => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const step = useDataStore((s) => s.step);
	const current = currentSlide.slideProps.id;
	const contrastLogo = current === 'Profit' && step > 0;
	const isLastSlide = current === 'Footer';

	return (
		<header className={classNames(styles.container, isLastSlide && 'hide')}>
			{currentSlide.slideProps.id !== 'Welcome' && (
				<div className={styles.logoSmall}>
					<Logo contrast={contrastLogo} />
				</div>
			)}
			{isMobileMenuOpen && (
				<div className={styles.menuMobileLayout}>
					<button onClick={() => setIsMobileMenuOpen((prev) => !prev)} style={{ marginRight: 'auto' }}>
						<MenuIcon
							style={{
								width: '48px',
								height: '48px',
							}}
						/>
					</button>
					<MenuList
						close={() => setIsMobileMenuOpen(false)}
						isMobile={true}
						className={styles.menuListMobile}
						setCurrentSlide={setCurrentSlide}
					/>
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
			<MenuList className={styles.list} setCurrentSlide={setCurrentSlide} />
			<button className={styles.regButton}>Registration</button>
		</header>
	);
};

export default Header;
