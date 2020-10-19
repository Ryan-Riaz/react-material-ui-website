import React from "react";

// ম্যাটেরিয়াল কম্পোনেন্ট ইম্পোর্ট করা যেগুলা দরকার!
import {
	Box,
	Container,
	Typography,
	Button,
	makeStyles,
} from "@material-ui/core";

// ম্যাটেরিয়াল কালার প্যালেট থেকে কালার ব্যবহার করা
import { purple, red } from "@material-ui/core/colors";

const useStyles = makeStyles({
	myHeading: {
		color: red.A400,
	},
});

const ColorComp = () => {
	const classes = useStyles();
	return (
		<Container maxWidth="sm">
			<Box p={4}>
				<Typography variant="h3" className={classes.myHeading}>
					Hello Programmers
				</Typography>
				<Typography style={{ color: purple[800] }}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Tenetur quia at doloremque nihil ad. Nobis quia
					necessitatibus fugit tempore distinctio.
				</Typography>
				<Button variant="contained" color="secondary">
					Learn More
				</Button>
			</Box>
		</Container>
	);
};

export default ColorComp;
