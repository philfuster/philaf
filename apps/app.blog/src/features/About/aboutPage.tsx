import { Typography } from '@mui/material';
import { Article } from '#shared/Article';
import { CustomLink } from '#shared/CustomLink';

function AboutPage() {
	return (
		<Article title="Hi, Thanks for Stopping By!">
			<Typography variant="body1">
				My name is Phil. I&apos;m a software engineer based out of New Jersey and I have been
				working in the industry for four years.
			</Typography>
			<Typography variant="body1">
				I started off as an intern at <CustomLink to="https://storis.com" text="STORIS" /> where I
				was then hired full time as part of their Application Development team. I worked on their
				ERP (Enterprise Resource Planner) application as a full-stack U2 developer for about 2
				years. I worked collaboratively with co-workers and on my own on projects of various sizes.
				As I grew as a developer at STORIS, I was given the opportunity to work with other
				departments in order to gain an understanding of the software development life cycle at
				STORIS.
			</Typography>
			<Typography variant="body1">
				I worked on the Support team as a tier-3 support developer for about three months. I was
				responsible for handling escalated cases that required research, development, and
				collaboration with fellow co-workers & clients. This was valuable as a developer because
				every day was a new experience debugging code in an unfamiliar area of the code base. One of
				my managers at STORIS always spoke of &quote;Training your developer eye.&quote;,
				emphasizing the importance of reading code and understanding what it does. This was crucial
				in my role as U2 developer because U2 has no type system and I was working in a code base
				with thousands of programs, sometimes with thousands of lines of code each.
			</Typography>
			<Typography variant="body1">
				From my experience in support I learned a lot about debugging, collaborating with other team
				members, and how to communicate with clients. STORIS is a large ERP application tailored to
				the retail furnishing industry. It handles Point of Sale, Accounts Payable, Accounts
				Receivable, Logistics, Inventory, Credit Card integrations, ..., the list goes on and on.
				With that being said, no one single person can know the whole system. Support is possible
				through collaboration between team members with the single minded goal of helping customers.
				As a member of the support team I learned how to collaborate with other team members to
				solve problems, sharing knowledge of the system.
			</Typography>
			<Typography variant="body1">
				Engagement with clients was significant to this experience because the reason for
				communication was usually not a good one. Something was not working for an unknown reason
				and at its worst money was at stake. I had to communicate with them in a professional
				manner, making sure to manage expectations, while continuing to make progress towards
				addressing the issue at hand.
			</Typography>
			<Typography variant="body1">
				After working in support I moved to the Quality Assurance team for a few months. I was
				responsible for testing enhancements and support case packets. I learned how to write test
				plans and test cases based off documentation detailing the enhancement or bug fix. I learned
				how to write clear and concise bug reports whenever a bug was encountered. I learned how to
				communicate with developers and other team members to make sure that the software was being
				tested thoroughly as the last set of measures before software was released. I should note
				that this was testing was done manually because U2 did not have a testing framework.
			</Typography>
			<Typography variant="body1">
				After having gained experience across the software development life cycle working with QA
				and Support, I was very happy to return to development. I worked on a series of projects and
				soon enough I was tasked with research and analysis. I was responsible for engaging with
				product management and clients to gather requirements and then design and implement
				solutions. It was a great experience because I was able to work on projects from soup to
				nuts.
			</Typography>
			<Typography variant="body1">
				I was promoted to Software Developer II and shortly after that I made a horizontal move to
				the Next Gen team. This team works on the &quote;Next Generation&quote; of STORIS
				technology. I work on the back-end specifically using TypeScript and{' '}
				<CustomLink to="https://moleculer.services" text="moleculer.js" />, a microservices
				framework for Node.js. You can imagine this was quite the change from U2. Here, I&apos;m
				learning how to write scalable software for a distributed application. It has been a lot of
				fun and with this blog, I hope to share some of the things I&apos;ve learned along the way.
			</Typography>
		</Article>
	);
}

export default AboutPage;
