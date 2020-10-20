import React from "react";

// ম্যাটেরিয়াল কম্পোনেন্ট ইম্পোর্ট করা যেগুলা দরকার!
import { Paper, Box, Container, Typography, Button } from "@material-ui/core";

import AddCircleIcon from "@material-ui/icons/AddCircle";

const ButtonComp = () => {
	return (
		<Container maxWidth="md">
			<Paper component={Box} p={5}>
				<Typography variant="h2">The Reader</Typography>
				<Typography variant="subtitle1">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Velit aperiam nam repellendus iste unde commodi.
				</Typography>
				<Box mt={3}>
					{/* use buttons */}
					<Button variant="contained" color="primary">
						Learn more
					</Button>

					{/* Use icon in button */}
					<Button
						variant="contained"
						color="secondary"
						startIcon={<AddCircleIcon />}
					>
						Learn more
					</Button>
				</Box>
			</Paper>
		</Container>
	);
};

export default ButtonComp;
