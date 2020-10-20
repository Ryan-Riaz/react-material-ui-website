import React from "react";

import {
	Container,
	Grid,
	Typography,
	Box,
	Paper,
	Button,
} from "@material-ui/core";

const Grids = () => {
	return (
		<Container>
			{/* container grid is parent of flexbox */}
			<Grid container spacing={3}>
				{/* item grid is children of flexbox */}
				<Grid item md={4}>
					<Paper>
						<Box p={2}>
							<Typography variant="h5">Hi Developers!</Typography>
							<Typography variant="subtitle1" gutterBottom>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Recusandae temporibus alias
								autem quam et dolorum.
							</Typography>
							<Button color="primary" variant="contained">
								Read more...
							</Button>
						</Box>
					</Paper>
				</Grid>
				<Grid item md={4}>
					<Paper>
						<Box p={2}>
							<Typography variant="h5">
								Hi Programmers!
							</Typography>
							<Typography variant="subtitle1" gutterBottom>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Recusandae temporibus alias
								autem quam et dolorum.
							</Typography>
							<Button color="primary" variant="contained">
								Read more...
							</Button>
						</Box>
					</Paper>
				</Grid>
				<Grid item md={4}>
					<Paper>
						<Box p={2}>
							<Typography variant="h5">Hi Thinkers!</Typography>
							<Typography variant="subtitle1" gutterBottom>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Recusandae temporibus alias
								autem quam et dolorum.
							</Typography>
							<Button color="primary" variant="contained">
								Read more...
							</Button>
						</Box>
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Grids;
