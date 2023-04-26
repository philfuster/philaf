import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import { Outlet } from '@tanstack/router';

const globalStyles = (
	<Global
		styles={() => ({
			html: {
				boxSizing: 'border-box',
			},
			'*, *:before, *:after': {
				boxSizing: 'inherit',
			},
			body: {
				margin: 0,
				lineHeight: '1.2',
				overflowX: 'hidden',
			},
			a: {
				textDecoration: 'none',
			},
			'a:hover': {
				textDecoration: 'underline',
			},
			img: {
				maxWidth: '100%',
				height: 'auto',
				width: 'auto',
			},
		})}
	/>
);

const AppContainer = styled('div')(() => ({
	display: 'flex',
	alignItems: 'stretch',
	minHeight: '100vh',
	width: '100%',
}));

const ContentContainer = styled('div')(() => ({
	flex: '1 1 100%',
	maxWidth: '100%',
	marginLeft: 0,
}));

function App() {
	return (
		<>
			{globalStyles}
			<AppContainer>
				<ContentContainer>
					<h1>Welcome to my blog!</h1>
					<Button variant="contained">Hello World!</Button>
					<Outlet />
				</ContentContainer>
			</AppContainer>
		</>
	);
}

export default App;
