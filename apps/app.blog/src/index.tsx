import { PhilafThemeProvider } from '@philaf/app_common.components';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from '#features/App';
import { ErrorPage } from '#shared/ErrorPage';

// const rootRoute = new RootRoute({
// 	component: App,
// });

function Index() {
	return <h3>Welcome!</h3>;
}

function About() {
	return <h2>About me</h2>;
}

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <App outlet={<ErrorPage />} />,
		children: [
			{
				path: '/',
				index: true,
				Component: Index,
			},
			{
				path: '/about',
				Component: About,
			},
		],
	},
]);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const rootElement = document.getElementById('main')!;
if (!rootElement.innerHTML) {
	const root = createRoot(rootElement);
	root.render(
		<StrictMode>
			<PhilafThemeProvider>
				<RouterProvider router={router} />
			</PhilafThemeProvider>
		</StrictMode>,
	);
}
