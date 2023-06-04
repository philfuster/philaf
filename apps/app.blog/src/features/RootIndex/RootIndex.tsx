import { Container, Link } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import { Article } from '#shared/Article';

function Index() {
	return (
		<Container component="main" id="rootIndex">
			<Article title="Hi, thanks for stopping by!">
				<Typography variant="body1">
					My name is Phil. I am a Software Engineer based out of New Jersey and this is my blog! I
					hope to use this blog as a way of learning in public, sharing my thoughts, and things I
					learn about software development work on a service based application. I mainly write in TypeScript working on the API.
				</Typography>
				<Typography variant="body1">
					For a little more about me check out the{' '}
					<Link component={RouterLink} to="about">
						about
					</Link>{' '}
					page.
				</Typography>
			</Article>
		</Container>
	);
}

export default Index;
