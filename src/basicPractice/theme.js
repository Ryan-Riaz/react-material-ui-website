// To customize the theme we'd create individual file called theme(it's optional)
// then import createMuiTheme fn & then customize it
// we can customize any default property that materialize provided us
// for changing, see default theme property then replace it!
import { createMuiTheme } from "@material-ui/core/styles";

import green from "@material-ui/core/colors/green";
import { blue } from "@material-ui/core/colors";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: blue[500],
		},
		secondary: {
			main: green[500],
		},
	},
});
export default theme;
