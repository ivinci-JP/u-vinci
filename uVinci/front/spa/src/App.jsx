// Material UI
import { Box, CssBaseline } from "@material-ui/core";

// components
import NavBar from "./components/templates/NavBar";
import MapWidget from "./components/templates/MapWidget";

const App = () => (
  <>
    <CssBaseline />
    <Box display="flex" flexDirection="column" style={{ height: "100vh" }}>
      <Box>
        <NavBar />
      </Box>

      <Box flexGrow={1}>
        <MapWidget />
      </Box>
    </Box>
  </>
);

export default App;
