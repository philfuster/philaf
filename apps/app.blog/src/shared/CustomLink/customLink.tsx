import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

export interface CustomLinkProps {
	to?: string;
	text?: string;
}

function CustomLink(props: CustomLinkProps) {
	const { to, text } = props;
	return (
		<Link component={RouterLink} to={to ?? '/'}>
			{text}
		</Link>
	);
}

export default CustomLink;
