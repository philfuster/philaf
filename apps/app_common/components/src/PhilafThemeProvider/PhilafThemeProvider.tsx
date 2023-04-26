import { CssBaseline, GlobalStyles } from '@mui/material';
import { teal } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// https://mui.com/material-ui/customization/theming/#theme-configuration-variables
declare module '@mui/material/styles/createPalette' {
	interface Palette {
		tertiary: PaletteColor;
	}
	interface PaletteOptions {
		tertiary: PaletteColorOptions;
	}
}

declare module '@mui/material/styles/components' {
	interface Components {
		appbarHeightMobile: number;
		appbarHeightMobileLandscape: number;
		appbarHeightDesktop: number;
		bottomNavigationHeight: number;
		tabsHeightIcon: number;
		tabsHeightText: number;
		navigationRailWidth: number;
	}
}

const philaf = createTheme({
	palette: {
		primary: {
			main: '#1976d2',
			// contrastText: '#fff',
		},
		secondary: {
			main: 'rgb(220, 0, 78)',
		},
		tertiary: {
			light: teal[400],
			main: teal.A700,
		},
	},
	components: {
		appbarHeightMobile: 56,
		appbarHeightMobileLandscape: 48,
		appbarHeightDesktop: 64,
		bottomNavigationHeight: 56,
		tabsHeightIcon: 72,
		tabsHeightText: 48,
		navigationRailWidth: 72,
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1920,
		},
	},
});

// It is a good practice to hoist the <GlobalStyles /> to a static constant, to avoid rerendering.
// This will ensure that the <style> tag generated would not recalculate on each render.
// See https://mui.com/material-ui/customization/how-to-customize/#4-global-css-override
const globalStyles = (
	<GlobalStyles
		styles={(theme) => ({
			html: {
				boxSizing: 'border-box',
			},
			'*, *:before, *:after': {
				boxSizing: 'inherit',
			},
			body: {
				margin: 0,
				background: theme.palette.grey[100],
				fontFamily: theme.typography.fontFamily,
				color: theme.palette.text.primary,
				lineHeight: '1.2',
				overflowX: 'hidden',
				WebkitFontSmoothing: 'antialiased', // Antialiasing.
				MozOsxFontSmoothing: 'grayscale', // Antialiasing.
			},
			a: {
				color: theme.palette.secondary.main,
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

interface PhilafThemeProviderProps {
	children: React.ReactNode;
}

const PhilafThemeProvider = (props: PhilafThemeProviderProps) => {
	const { children } = props;
	return (
		// The EmotionCacheProvider is only used to silence console warnings from emotion that say
		// "The pseudo class ':first-child' is potentially unsafe when doing server-side rendering".
		// We never use server-side rendering, so silencing the warning should be ok.
		// https://github.com/emotion-js/emotion/issues/1105#issuecomment-557726922
		<ThemeProvider theme={philaf}>
			<CssBaseline />
			{globalStyles}
			{children}
		</ThemeProvider>
	);
};

export default PhilafThemeProvider;
