import styles from './Header.module.css';
import MenuIcon from '../../assets/icons/menu-mobile-icon.svg?react';
import Button from '../ui/Button/Button';
import { useContext, useState } from 'react';
import Logo from '../ui/Logo/Logo';
import { useDataStore } from '../../../store';
import classNames from 'classnames';
import { slides } from '../pages/Home';
import LogoNamed from '../../assets/icons/logo-named.svg?react';

const MenuList = ({ className, setCurrentSlide, isMobile, close }) => {
	return (
		<ul className={className}>
			<li>
				<a
					href='#AboutUsMore'
					onClick={() => {
						isMobile && close?.();
					}}
				>
					About
				</a>
			</li>
			<li>
				<a
					href='#AdminPanel'
					onClick={() => {
						isMobile && close?.();
					}}
				>
					Admin panel
				</a>
			</li>
			<li>
				<a
					href='#Profit'
					onClick={() => {
						isMobile && close?.();
					}}
				>
					Profit Calculator
				</a>
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
	const isWelcomeScreen = useDataStore((s) => s.isWelcomeScreen);

	console.log('isWelcomeScreen', isWelcomeScreen);

	return (
		<header className={classNames(styles.container, isLastSlide && 'hide')}>
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
			<a href='#Welcome'>
				<LogoNamed className={classNames(styles.logoNamed, !isWelcomeScreen && styles.logoNamedAppear)} />
			</a>
			<div className={styles.rightPanel}>
				<a href='#Registration'>Registration</a>
			</div>
		</header>
	);
};

export default Header;
