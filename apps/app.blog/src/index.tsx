import { PhilafThemeProvider } from '@philaf/app_common.components';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AboutPage } from '#features/About';
import { App } from '#features/App';
import { RootIndex } from '#features/RootIndex';
import { ErrorPage } from '#shared/ErrorPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <App outlet={<ErrorPage />} />,
		children: [
			{
				path: '/',
				index: true,
				Component: RootIndex,
			},
			{
				path: '/about',
				Component: AboutPage,
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
