import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Root from './root';
import Home from './components/pages/Home';
import OurVision from './components/pages/OurVision/OurVision';
import KeyFeatures from './components/pages/KeyFeatures/KeyFeatures';
import AboutUs from './components/pages/AboutUs/AboutUs';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '/',
				element: (
					<>
						<Home />
						<OurVision />,
						<KeyFeatures />
						<AboutUs />
					</>
				),
			},
			{
				path: '/vision',
				element: <OurVision />,
			},
			{
				path: '/keys',
				element: <KeyFeatures />,
			},
			{
				path: '/about',
				element: <AboutUs />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
