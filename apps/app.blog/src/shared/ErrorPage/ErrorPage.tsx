import Typography from '@mui/material/Typography';
import { useRouteError } from 'react-router-dom';

function ErrorPage() {
	const error = useRouteError() as Error;
	const { message, name } = error;

	return (
		<>
			<Typography variant="h1">Oops!</Typography>
			<Typography variant="body1">Sorry, an unexpected error has occurred.</Typography>
			<Typography variant="body1">
				<Typography variant="body2" component="i">
					{message || name}
				</Typography>
			</Typography>
		</>
	);
}
export default ErrorPage;
