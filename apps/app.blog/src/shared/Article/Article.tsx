import type { PaperProps } from '@mui/material';
import { Paper, Typography } from '@mui/material';

export interface ArticleProps extends PaperProps {
	children: React.ReactNode;
	title: string;
}
/**
 * Article component for simple text content layouts
 */
function Article(props: ArticleProps) {
	const { children, title } = props;
	return (
		<Paper
			elevation={3}
			sx={{ p: 8, maxWidth: 1200, '& p': { mb: 3, maxWidth: 700 } }}
			className="articleContainer"
			component="article"
		>
			<Typography className="articleHeader" variant="h4" gutterBottom>
				{title}
			</Typography>
			{children}
		</Paper>
	);
}

export default Article;
