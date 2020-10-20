import React from "react";

// To use custom theme, firstly import theme provider
import { ThemeProvider } from "@material-ui/core";

// Then import theme where we defined about theme
import theme from "./theme";

// ম্যাটেরিয়াল কম্পোনেন্ট ইম্পোর্ট করা যেগুলা দরকার!
import { Paper, Box, Container, Typography, Button } from "@material-ui/core";

const Customization = () => {
	return (
		<ThemeProvider theme={theme}>
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
					</Box>
				</Paper>
			</Container>
		</ThemeProvider>
	);
};

export default Customization;
