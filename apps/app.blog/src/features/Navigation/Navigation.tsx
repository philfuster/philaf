import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const drawerWidth = 240;
type NavigationDetails = { to: string; text: string } & { component?: () => JSX.Element };

const navDetails: NavigationDetails[] = [
	{
		to: '/',
		text: 'Home',
	},
	{ to: 'about', text: 'About' },
	// { to: 'blog', text: 'Blog' },
];

export default function DrawerAppBar() {
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
			<Typography variant="h6" sx={{ my: 2 }}>
				Philaf
			</Typography>
			<Divider />
			<List>
				{navDetails.map(({ text, to }) => (
					<ListItem key={text} disablePadding>
						<ListItemButton sx={{ textAlign: 'center' }}>
							<Link component={RouterLink} to={to}>
								<ListItemText>{text}</ListItemText>
							</Link>
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<Box sx={{ display: 'flex' }}>
			<AppBar>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						component={RouterLink}
						to="/"
						sx={{
							variant: 'h3',
							color: '#fff',
							flexGrow: 1,
							display: { xs: 'block', sm: 'block' },
						}}
					>
						Philaf
					</Typography>
					<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
						{navDetails.map(({ to, text }) => (
							<Button key={text} sx={{ color: '#fff' }}>
								<Link sx={{ color: '#fff' }} component={RouterLink} to={to}>
									{text}
								</Link>
							</Button>
						))}
					</Box>
				</Toolbar>
			</AppBar>
			<Box component="nav">
				<Drawer
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
					}}
				>
					{drawer}
				</Drawer>
			</Box>
		</Box>
	);
}
