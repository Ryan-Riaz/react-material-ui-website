import React from "react";

// ম্যাটেরিয়াল কম্পোনেন্ট ইম্পোর্ট করা যেগুলা দরকার!
import { Paper, Box, Container, Typography, Icon } from "@material-ui/core";

// importing material icons
import Alarm from "@material-ui/icons/Alarm";

const IconComp = () => {
	return (
		<Container maxWidth="md">
			<Paper component={Box} p={5}>
				<Typography variant="h3">
					This is just Perfect example of Icons:
				</Typography>

				{/* Font awesome icons, firstly call the CDN in index.html */}
				<Icon
					className="fas fa-address-book"
					style={{ fontSize: "30px" }}
				></Icon>

				{/* Material Icons, firstly import */}
				<Alarm style={{ fontSize: "55px" }} />
			</Paper>
		</Container>
	);
};

export default IconComp;
