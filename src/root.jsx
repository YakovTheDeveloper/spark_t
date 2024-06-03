import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Layout from './components/Layout';

export default function Root() {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
		</>
	);
}
