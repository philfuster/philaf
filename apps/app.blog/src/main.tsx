import { RootRoute, Route, Router, RouterProvider } from '@tanstack/router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '#features/App';

const rootRoute = new RootRoute({
	component: App,
});

function Index() {
	return (
		<div>
			<h3>Welcome!</h3>
		</div>
	);
}

const indexRoute = new Route({
	getParentRoute: () => rootRoute,
	path: '/hello',
	component: Index,
});

const routeTree = rootRoute.addChildren([indexRoute]);

const router = new Router({ routeTree });

declare module '@tanstack/router' {
	interface Register {
		router: typeof router;
	}
}

// root is definitely there promise.
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
	const root = createRoot(rootElement);
	root.render(
		<StrictMode>
			<RouterProvider router={router} />
		</StrictMode>,
	);
}
