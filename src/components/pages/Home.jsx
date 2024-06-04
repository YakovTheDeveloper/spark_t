import React from 'react';
import styles from './Home.module.css';
import Slide from '../ui/Slide/Slide';
import AboutUsMore from './AboutUsMore/AboutUsMore';
import AdminPanel from './AdminPanel/AdminPanel';
import OurVision from './OurVision/OurVision';
import KeyFeatures from './KeyFeatures/KeyFeatures';
import Welcome from './Welcome/Welcome';
import AboutUs from './AboutUs/AboutUs';
import Documentation from './Documentation/Documentation';
import Registration from './Registration/Registration';
import Achievements from './Achievements/Achievements';

const Home = () => {
	return (
		<>
			<Slide>
				<Welcome />
			</Slide>
			<Slide>
				<OurVision />
			</Slide>
			<Slide>
				<KeyFeatures />
			</Slide>
			<Slide>
				<AboutUs />
			</Slide>
			<Slide>
				<AboutUsMore />
			</Slide>
			<Slide>
				<AboutUsMore selectedLink={1} />
			</Slide>
			<Slide>
				<AboutUsMore selectedLink={2} />
			</Slide>
			<Slide>
				<AboutUsMore selectedLink={3} />
			</Slide>
			<Slide className={styles.adminPanel}>
				<AdminPanel />
			</Slide>
			<Slide className={styles.docs}>
				<Documentation />
			</Slide>
			<Slide className={styles.reg}>
				<Registration />
			</Slide>
			<Slide>
				<Achievements />
			</Slide>
		</>
	);
};

export default Home;
