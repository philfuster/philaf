import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import { Container, Toolbar } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Navigation } from '#features/Navigation';

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
}));

export interface AppProps {
	outlet?: JSX.Element;
}

function App(props: AppProps) {
	const { outlet } = props;
	return (
		<>
			{globalStyles}
			<AppContainer>
				<ContentContainer>
					<Navigation />
					<Toolbar />
					<Container component="main" sx={{ pt: 5, maxWidth: 1600 }}>
						{outlet || <Outlet />}
					</Container>
				</ContentContainer>
			</AppContainer>
		</>
	);
}

export default App;
