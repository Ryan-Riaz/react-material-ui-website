import React from "react";

// ম্যাটেরিয়াল কম্পোনেন্ট ইম্পোর্ট করা যেগুলা দরকার!
import { Box, Typography } from "@material-ui/core";

// যদি কোন কাস্টম স্টাইল করাতে চাই
import { makeStyles } from "@material-ui/core/styles";

// কাস্টম স্টাইলকে একটি ভেরিয়েবলে রাখা
// এখানে theme parameter ব্যবহার করে ডিফল্ট থিমের প্রপার্টিগুলাও ব্যবহার করা যায়!
const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		justifyContent: "spaceBetween",
	},
	myClass: {
		backgroundColor: theme.palette.info.main,
		boxShadow: theme.shadows[5],
		color: "white",
		padding: 20,
		margin: 20,
	},
}));

const CssInJs = () => {
	// কম্পোনেন্টে ব্যবহার করার জন্য  কাস্টম ভেরিয়েবল কে কল করা
	const classes = useStyles();
	return (
		<div className="App">
			<Typography variant={"h2"}>Hello World</Typography>
			{/* সেই কাস্টম ক্লাসগুলাকে ব্যবহারের জন্য ক্লাসে কল করা  */}
			<Box className={classes.container}>
				<Box className={classes.myClass}>
					<Typography variant={"h3"}>Hi Developers!</Typography>
					<Typography>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Minima explicabo magni animi totam quibusdam. Laudantium
						qui, delectus ab veritatis molestiae eos inventore.
						Praesentium, placeat itaque.
					</Typography>
				</Box>
				<Box className={classes.myClass}>
					<Typography variant={"h3"}>Hi Programmers!</Typography>
					<Typography>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Minima explicabo magni animi totam quibusdam. Laudantium
						qui, delectus ab veritatis molestiae eos inventore.
						Praesentium, placeat itaque.
					</Typography>
				</Box>
				<Box className={classes.myClass}>
					<Typography variant={"h3"}>Hi Thinkers!</Typography>
					<Typography>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Minima explicabo magni animi totam quibusdam. Laudantium
						qui, delectus ab veritatis molestiae eos inventore.
						Praesentium, placeat itaque.
					</Typography>
				</Box>
			</Box>
		</div>
	);
};

export default CssInJs;
