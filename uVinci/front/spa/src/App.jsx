// Material UI
import { Box, CssBaseline } from "@material-ui/core";

// components
import { useCookies } from "react-cookie";
import NavBar from "./components/templates/NavBar";
import MapWidget from "./components/templates/MapWidget";

import authStub from "./stub/authStub";


const App = () => {
  
  const [, setCookies] = useCookies(["authentication"]);
 setCookies(
      "user",
      `{"id": "${authStub.getUser().id}", "name": "${
        authStub.getUser().name
      }"}`,
      { path: "/" }
    );
    setCookies("token", authStub.getToken(), { path: "/" });

  return (
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
)};

export default App;
