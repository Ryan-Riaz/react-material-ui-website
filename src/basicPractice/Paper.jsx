import React from "react";

// ম্যাটেরিয়াল কম্পোনেন্ট ইম্পোর্ট করা যেগুলা দরকার!
import { Paper, Box, Container, Typography, Button } from "@material-ui/core";

const PaperComp = () => {
	return (
		<Container maxWidth="sm">
			{/* পেপার কম্পোনেন্ট হচ্ছে কার্ডের মতন */}
			<Paper variant="outlined" elevation={5}>
				<Box p={4}>
					<Typography variant="h3">Hello Programmers</Typography>
					<Typography>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Tenetur quia at doloremque nihil ad. Nobis quia
						necessitatibus fugit tempore distinctio.
					</Typography>
					<Button variant="contained" color="secondary">
						Learn More
					</Button>
				</Box>
			</Paper>
		</Container>
	);
};

export default PaperComp;
